# Food Cards

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Purpose

Food Cards is a service handling a common issue: What will we have for dinner? (The transition of my good-old paper cards into digital.)

## Prototype

Lo-fi prototype [HERE](https://www.figma.com/community/file/1359375869618657842)

## Preview

[Vercel preview](https://food-cards-51hr.vercel.app/cs)

[Manage preview](https://vercel.com/tom-pilnajs-projects/food-cards-51hr)

## Solution

<img width="1888" alt="food_cards" src="https://github.com/pilniczek/food_cards/assets/4343111/6fc6e148-6da5-494a-9ca4-2dde20f0284e">

## Getting Started

First, run the development server:

- `npm i`
- `npm run prepare` (husky, pre-commit hooks)
- `npx supabase login` 
- `npm run generate-types` ([Supabase generating types](https://supabase.com/docs/guides/api/rest/generating-types))
- `npm run dev`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Committing

- `feat #issueId: message`
- `fix #issueId: message`
- `refactor #issueId: message`
- `doc #issueId: message`
- `test #issueId: message`
- `ci #issueId: message`
- `npm #issueId: message`

## OAuth

- [Google setup](https://console.cloud.google.com/apis/credentials?authuser=0&organizationId=0&project=food-cards-420011)
- [Github setup](https://github.com/settings/applications/2544326)
- [Supabase setup](https://supabase.com/dashboard/project/zygclhlkpilpvnvrgcse/auth/providers)
- [Supabase redirect](https://supabase.com/dashboard/project/zygclhlkpilpvnvrgcse/auth/url-configuration)
- [Vercel env](https://vercel.com/tom-pilnajs-projects/food-cards-51hr/settings/environment-variables)
