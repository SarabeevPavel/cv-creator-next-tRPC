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
      const prompt = `Create for user by the next schema:{"avatar": "","name": "user name","summary": "Generate a user summary on first pearson of the user (e.g. I am [Name] and I...) for a CV based on the user's position and/or data from the text entered by the user, and continue if the data is insufficient .Maximum length is 350 characters.","position": "how is work search user or empty string","languages": "if user input some spoken language (e.g. English, French) in text - create array of languages, if not - create empty array","technologies": "Put here the technologies specified by the user and if the user has specified a position, generate more technologies so that the total number of technologies is 12 without examples, if not - create empty array","contacts": {"tel": "user telephone or empty string","email": "user email or empty string","location": "user location in format: City, Country or empty string"}, "projects": empty array} - by next text:"${input.text}"`;
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

  generateFullCV: publicProcedure
    .input(z.object({ text: z.string() }))
    .mutation(async ({ input }) => {
      const prompt = `Create for user by the next schema:{"avatar": "default","name": "Generate random user name - Name Surname","summary": "Generate a summary on first person format for a CV based on the data from the text entered by the user and continue it, if there is not enough data generate a user position.Maximum length - 350 symbols","position": "put here position user","languages": "generate array of 10 colloquial languages","technologies": "generate array of 12 techlogies by user's position","contacts": {"tel": "generate random tel number","email": "generate random email","location": "generate random location in format: City, Country"}, "projects":"generate 2 object by example:{"title": "random title of project", "description": "random  project's description", "repositoryUrl":"example.com"}"} - by user postion:"${input.text}"`;
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
      const prompt = `Create a CV summary for the position.Maximum length 250 symbols. Continue this text:${input.text}`;
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
      const prompt = `Continue a text form summary in CV by first person, :${input.text}`;
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
