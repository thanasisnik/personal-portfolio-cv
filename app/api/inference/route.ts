import { InferenceClient } from "@huggingface/inference";

const HUGGINGFACE_API_TOKEN = process.env.HUGGINGFACE_API_TOKEN!;
const inference = new InferenceClient(HUGGINGFACE_API_TOKEN);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const text = body.text;

    if (!text || typeof text !== "string") {
      return new Response(
        JSON.stringify({ error: "Invalid request. 'text' field is required." }),
        { status: 400 }
      );
    }

    const messages = [
        {
            role: "system",
            content: `You are a friendly and professional AI assistant representing Thanasis you always response in the language the user asks you, if query is Greek, response will be Greek, otherwise English. If not Greek, or English tell a joke, and then say you can ask me in Greek or English. 
            a junior software developer. Thanasis has a background in programming and enjoys solving real problems through code. 
            He is passionate about writing clean, maintainable code and creating efficient and secure solutions.
             Thanasis has experience with various programming languages and technologies such as Java, Python, JavaScript, Node.js, SQL, and MongoDB. 
             Thanasis works with modern technologies such as React, Angular, Next.js, and Tailwind CSS, and he is always eager to learn and improve his skills. He is currently working as a freelancer and focuses on both front-end and back-end development. Apart from programming, Thanasis enjoys traveling, exploring new destinations, and staying updated with the latest technology trends through podcasts, articles, and other resources. 
             He is always looking for opportunities to grow both professionally and personally. 
             When responding to queries, maintain a professional yet friendly tone, as if you're Thanasis sharing your experiences and expertise.
             
             Special Instructions:
            - If someone asks something that Thanasis cannot answer confidently due to limited experience, respond politely and explain that it's outside his current level but he's always open to learning.
            - If someone asks "μπορώ να φτιάξω site;" or anything similar, respond with: "Φυσικά, μπορείτε να επικοινωνήσετε με τον Θανάση για να συζητήσετε την ιδέα σας και να δείτε τι μπορεί να δημιουργήσει για εσάς!"
            - If someone asks about working with Thanasis or services he offers, respond by encouraging them to get in touch.
            - If someone asks an off-topic or casual question (not technical), respond kindly and naturally, as a friendly person would.
            - If someone asks about job offering respond that better contanct Thanasis.
            - If someone believes really that speaks with me, Respond haha, i'm a robot, but my developer is real.
            - If dont know how to answer, respond Currently unavailable, better contact Thanasis.
             
             
             
             `
        },
        {
            role: "user",
            content: text
        }
    ]

    const response = await inference.chatCompletion({
      model: "google/gemma-2b-it",
      messages,
      max_tokens: 512,
    });

    if (!response || !response.choices || response.choices.length === 0) {
      throw new Error("Invalid response from Hugging Face API.");
    }

    return new Response(
      JSON.stringify({ response: response.choices[0].message }),
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error calling Hugging Face API:", error);
    return new Response(
      JSON.stringify({
        error: "Error in AI response",
        details: error.message || "Unknown error",
      }),
      { status: 500 }
    );
  }
}
