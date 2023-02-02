import { json } from "stream/consumers";
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  organization: "org-W3Xv5I8Q2M06jcMXvaQeFT83",
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

// generate random user avatar by position or generate random image for avatar and paste there URL for it

export const cvRouter = createTRPCRouter({
  initCV: publicProcedure
    .input(z.object({ text: z.string() }))
    .mutation(async ({ input }) => {
      const prompt = `Create for user by the next shema:{"avatar": "","name": "user name","summary": "Generate summary for cv by position from input text on 250 characters.","position": "how is work search user or empty string","languages": "if user input languages in text - create array of languages, if not - create empty array","technologies": "if user input technologies in text - create array of technologies, if not - create empty array","contacts": {"tel": "user telephone or empty string","email": "user email or empty string","location": "user location or empty string"}} - by next text:"${input.text}"`;
      const res = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `${prompt}`,
        max_tokens: 500,
        temperature: 0.5,
        top_p: 1,
        n: 1,
        stream: false,
        logprobs: null,
      });
      // "text-davinci-003";
      // const text = JSON.parse(res.data.choices[0]?.text);
      const result = res.data.choices[0]?.text
        ?.replace("\n", "")
        .replace("\\", "");

      JSON.parse(JSON.stringify(result as string));
      return result;

      // if (typeof result === "string") return JSON.parse(result);

      // const obj = JSON.parse(res.data.choices[0]?.text);
      // return obj;
    }),
});
