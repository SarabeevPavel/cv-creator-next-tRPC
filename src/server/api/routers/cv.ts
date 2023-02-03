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
      const prompt = `Create for user by the next schema:{"avatar": "","name": "user name","summary": "Generate summary for cv by position from input text on 250 characters.","position": "how is work search user or empty string","languages": "if user input some spoken language (e.g. English, French) in text - create array of languages, if not - create empty array","technologies": "if user input technologies in text - create array of technologies, if not - create empty array","contacts": {"tel": "user telephone or empty string","email": "user email or empty string","location": "user location in format: City, Country or empty string"}, "projects": empty array} - by next text:"${input.text}"`;
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
});
