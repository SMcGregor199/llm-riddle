
import dotenv from 'dotenv';
dotenv.config();
// Initialize OpenAI
import OpenAI from 'openai';
const openaiKey = process.env.OPENAI_API_KEY; 
const client = new OpenAI({ apiKey: openaiKey });

// Initialize Pinecone
import { Pinecone } from '@pinecone-database/pinecone';
const pineconeKey = process.env.PINECONE_API_KEY;
const pinecone = new Pinecone({ apiKey: pineconeKey });


const response = await client.responses.create({
    model:"gpt-5",
    input: "Write a one-sentence bedtime story about a unicorn."
});

console.log(response.output_text);




