import { json } from "stream/consumers";
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  organization: "org-W3Xv5I8Q2M06jcMXvaQeFT83",
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export const cvRouter = createTRPCRouter({
  initCV: publicProcedure
    .input(z.object({ text: z.string() }))
    .mutation(async ({ input }) => {
      const prompt = `Create for user by the next schema:{"avatar": "","name": "user name","summary": "Generate a summary for a CV based on the data from the text entered by the user and continue it, if there is not enough data generate a user pose so that the total length is about 250 characters","position": "how is work search user or empty string","languages": "if user input some spoken language (e.g. English, French) in text - create array of languages, if not - create empty array","technologies": "Put here the technologies specified by the user and if the user has specified a position, generate more technologies so that the total number of technologies is 12, if not - create empty array","contacts": {"tel": "user telephone or empty string","email": "user email or empty string","location": "user location in format: City, Country or empty string"}, "projects": empty array} - by next text:"${input.text}"`;
      const res = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `${prompt}`,
        max_tokens: 500,
        temperature: 0.5,
      });

      const result = res.data.choices[0]?.text
        ?.replace("\n", "")
        .replace("\\", "");

      JSON.parse(JSON.stringify(result as string));
      return result;
    }),

  generateSummary: publicProcedure
    .input(z.object({ text: z.string() }))
    .mutation(async ({ input }) => {
      const prompt = `Create a CV summary for the position:${input.text}`;
      const res = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `${prompt}`,
        max_tokens: 160,
        temperature: 0.5,
      });

      const result = res.data.choices[0]?.text
        ?.replace("\n", " ")
        .replace("\\", " ");

      return result;
    }),

  continueSummary: publicProcedure
    .input(z.object({ text: z.string() }))
    .mutation(async ({ input }) => {
      const prompt = `Continue a CV summary:${input.text}`;
      const res = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `${prompt}`,
        max_tokens: 160,
        temperature: 0.5,
      });

      const result = res.data.choices[0]?.text
        ?.replace("\n", "")
        .replace("\\", "");

      return result;
    }),

  generateStack: publicProcedure
    .input(z.object({ text: z.string() }))
    .mutation(async ({ input }) => {
      const prompt = `return stack from 12 technologies for ${input.text}`;
      const res = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `${prompt}`,
        max_tokens: 80,
        temperature: 0.5,
      });

      const result = res.data.choices[0]?.text;

      return result;
    }),
});
