"use client";
import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { X, MessageSquare } from "lucide-react";

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [userInput, setUserInput] = useState("");
    const [aiResponse, setAiResponse] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setAiResponse("");
        setError("");
        setLoading(true);

        try {
            const res = await axios.post("/api/inference", {
                text: userInput,
            });

            setUserInput("");

            if (res.data?.response?.content) {
              
                setAiResponse(res.data.response.content);
            } else {
                setError("No response from the AI.");
            }
        } catch (err: any) {
            console.error("Error:", err);
            setError(err?.response?.data?.error || "Error generating response.");
        } finally {
            setLoading(false);
        }
    };

      return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`p-3 rounded-full shadow-lg transition-all ${
          isOpen ? "bg-gray-200 dark:bg-gray-700" : "bg-accent"
        }`}
      >
        {isOpen ? (
          <X className="w-5 h-5" />
        ) : (
          <MessageSquare className="w-5 h-5 text-white" />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-20 right-4 w-[90vw] max-w-md min-h-[200px]   bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700"
        >
          <div className="p-4">
            <h3 className="font-medium text-lg mb-3 flex items-center gap-2">
              <MessageSquare className="w-4 h-4" /> AI Assistant
            </h3>
            
            {/* Chat History */}
            <div className="min-h-40 max-h-80 overflow-y-auto mb-3">
              {aiResponse && (
                <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded mb-2">
                  <p>{aiResponse}</p>
                </div>
              )}
            </div>

            {/* Input Form */}
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 ">
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Ask me anything..."
                className="flex-1 p-2 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-accent dark:bg-gray-700 dark:border-gray-600"
                disabled={loading}
              />
              <button
                type="submit"
                disabled={loading}
                className="p-2 bg-accent text-white rounded disabled:opacity-50"
              >
                {loading ? "..." : "→"}
              </button>
            </form>

            {error && (
              <p className="text-red-500 text-xs mt-2">{error}</p>
            )}
          </div>
        </motion.div>
      )}
    </div>
  );
}
