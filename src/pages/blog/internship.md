---
layout: "../../components/blog/BlogPostLayout.astro"
title: My Internship Experience
description: I had an interesting internship experience at ezyVet during 2022/2023 summer university holiday and I want to share this experience
imageUrl: "/images/blog/internship/ezyvet-internship.jpg"
---

# My Internship Experience at ezyVet

<br/>
<br/>

![ezyVet Internship Photo](/images/blog/internship/ezyvet-internship.jpg)

<br/>

> **Where I am:** _Second to left person._

<br/>

## Intro

I was able to have a lucky opportunity to have an internship experience during the 2022/2023 summer break.

During the 3 months I applied the current skills I had and went beyond to learn new skills.

It was very chaotic to say the very least.

I was surprised what I achieved throughout this internship.
So I would like to share some of these achievements to inspire and motivate those who read this blog.

<br/>

> **Note:** _I got offered a grad offer before my internship. The internship is just for me to get started working earlier_\
> **Also I would have loved to show images but because of company policies I cannot**

<br/>

I will show you what I worked on throughout the internship and some key takeaways that everyone should know.

## Content:

- [First Week (Induction)](/blog/internship/#first-week)
- [First project (API Docs)](/blog/internship/#first-project-api-docs)
- [Second Project (End-to-end Test)](/blog/internship/#second-project-end-to-end-test)
- [Third Project (Data Export Tool)](/blog/internship/#third-project-data-export-tool)

## Where the spice starts

- [Urgent Ticket](/blog/internship/#urgent-ticket)
- [Aftermath](/blog/internship/#aftermath)
- [Verdict](/blog/internship/#verdict)

## TDLR

- As juniors try to solve the answer yourself (practice this early on)
- Only ask seniors when you are really stuck
- Be dependent
- Take ownership
- Make every moment an opportunity to improve.

## First Week

The first week was all filled with with onboarding and orientation. Pretty standard.
I had to complete the tasks they provided like tutorials about the product and also getting my dev environment set up.
I got a have a buddy with me ever since the first day so I was lucky. _(some people didn't)_

## First project (API Docs)

The first project that I worked on was removing the API Documentation from their monorepo and automating the project build.

I got to make a separate repo and made CI build steps in GitLab CI/CD. When the PR's gets approved, the main branch
started a pipeline that builds the project and uploads the minified(bundled) project into an AWS s3 bucket.
Then I used CloudFront to distribute the website to CDN.

Also I set up a development server inside of a docker container that mounts with the project for hot reload.

I also made the API docs have the same style system as their other docs.

\
\
**What I learned**

- [Writing pipelines in GitLab using their CI/CD pipeline.](https://docs.gitlab.com/ee/ci/)
- [Containerizing the project with docker](https://www.docker.com/)
- AWS [s3 bucket](https://aws.amazon.com/s3) and [CloudFront](https://aws.amazon.com/cloudfront/) for bucket storage and CDN

## Second Project (End-to-end Test)

The second project was quite exciting.

I got to write end-to-end tests to make code push
a lot more safe. The end-to-end tests were written for safety guards to let new code be compliant
with the existing code base. Initially there were only schema tests which meant there were no tests
with real data. So I had to create/mock new data and make the test work with a database.
Also I had to tweak the pipeline to make these new changes work for database compatibility.

These test were written with postman and a pipeline in GitLab was ran with newman. The newman pipeline was already done by the
team.

This was exciting because some people came up to me personally and thanked me for this.
Some of the developers caught their errors upfront which meant this was actually useful.

\
\
**What I learned**

- [Postman tests](https://www.postman.com/)
- [GitLab CI/CD Pipeline](https://docs.gitlab.com/ee/ci/) (again)

## Third Project (Data Export Tool)

The last major projects I got to work on the data exporting tool.
Previously ezyVet did all their data export manually which was very time
consuming and tedious to do every time.

I made a full stack app with [React](https://reactjs.org/) and [FastAPI](https://fastapi.tiangolo.com/) and made
custom components like table, card and pagination from scratch.

I made their manual process automatic so that their data export can be done and emailed out to the recipient
with a single click.

**What I learned**

- [React](https://reactjs.org/)
- [FastAPI](https://fastapi.tiangolo.com/)
- AWS [s3](https://aws.amazon.com/s3), [Cloudfront](https://aws.amazon.com/cloudfront/) and [DynamoDB](https://aws.amazon.com/dynamodb/)
- [GitLab CI/CD Pipeline](https://docs.gitlab.com/ee/ci/)

## Urgent Ticket

Second to last week I had to work on an urgent ticket that broke the
invoicing system in the main application.

You might think it's crazy that an intern had to work on a impactful urgent ticket
and you are not wrong.

### Here's the situation

The seniors in my team had to go to an important meeting for the whole week because for a new product decision discussion.
So in our team we were left with the intermediate and junior devs (and me).
The urgent ticket was reported but was passed down to the 1x inter and 1x junior dev.
I happened to finish all my tickets so I decided to hop on to help since it was an urgent ticket.
As soon as I hopped on for some reason the two devs decided to pass the ticket to me since I didn't have any ticket.
First of all I am just an intern and also their ticket priorities were medium.
I hopped on because it was the highest priority ticket. It's literally breaking the application in production.
I just wanted to help not do the whole ticket. I thought we would work on this together to finish it ASAP but clearly that didn't happen.

But I did not panic. I took ownership and responsibility and took this ticket.
I also thought this would be a great opportunity.

The ticket was constantly pinging because of clients reporting that the feature was broken. (and yet the other devs didn't give a damn)

In the end I got it done with the help with people from other teams. I was heavily disappointed that the other devs
left me to do this alone but know I have something perfect to say in interviews which is because of the result of taking this opportunity.

<br/>
<br/>

# Aftermath

Throughout this whole internship I've obviously done other smaller tickets but it was just small bug fixes so I didn't mention here.

Other than the API Docs the company didn't know what to do with me throughout the internship.
I had to find projects myself and beg for them. The internship was not very well organized but it was because they
organized it so suddenly because I wanted to work earlier.

I took every chance as an opportunity and learned so much from it.

The buddy that was assign to me was very good. She helped me initially. But the work that I did had nothing related to her so she couldn't help out that much. But by that time I already knew what I wanted to do.

I don't like comparing with others. But, because I was always out there seeking for opportunities I did way more work that the other interns.

<br/>
<br/>

# Verdict

As an early dev I always tried to solve the questions myself. I always see a problem with junior devs unnecessarily asking too many questions.

I had an annoying friend who did this. I saw that the seniors were tired answering his questions.
Remember. The more you ask them, they have less time to complete their tickets. Most likely, they are working with way harder ticket than you are. Keep a balance please. Ask questions when you really need to.

If you are a senior and you don't know how to solve a question who do you ask? No one. Seniors are the ones solving questions themselves.

<br/>
<br/>

## Become more dependant.

Try to practice answering questions yourself and become more dependent earlier in your career.
This way you can move to other companies way easier, don't have rely on others and you become way more hirable.
Think about it. The top 5% devs in the, they have to solve solutions and answer questions themselves.

If you want to become an average dev then I don't care.
You are probably working because all you care about is salary.

If you are knowledgeable and dependable the salary and the company will chase you. Not you chasing for the company.

## Take ownership

Even if you are a measly intern take ownership. Prioritize what is actually important. If the clients are angry because of broken code in production, take responsibility and fix it. Don't ditch off and do lower priority tickets. Remember the money is coming from the clients.
You need to make them happy for you and the company to make money.

## Make every moment an opportunity to improve

Always take advantage of everything. Even the flaws. The chaotic environment that I was in. I was always taking it as an opportunity.
If the company is lacking then you can fill it up yourself. This is how to make groundbreaking changes for not just yourself but for the company.
It was partially my strength that I adapt so well in chaotic environment that I succeeded. I bet it would have been harder for others.

<br/>
<br/>
<br/>

> **If you read the whole blog:** Thank you so much. I appreciate you listening to my thoughts.
> If you like what I do why don't you hit me up [here!](https://www.linkedin.com/in/peteransoftware/).
