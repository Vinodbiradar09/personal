"use client";
import React, { useState } from "react";
import { ArrowRight, Github, Mail, Twitter, ExternalLink } from "lucide-react";
interface Project {
  title: string;
  year: string;
  description: string;
  technologies: string[];
  website: string;
  source: string;
}

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
}

const projects: Project[] = [
  {
    title: "BetterLetter AI",
    year: "2025",
    description:
      "AI-powered leave letter generator with Sonar Pro (Perplexity API) for smart generation, solving the handwriting problem for students.",
    technologies: ["Next.js", "TypeScript", "MongoDB", "NextAuth", "PDFKit"],
    website: "https://betterletterai.vercel.app",
    source: "https://github.com/Vinodbiradar09/betterletter-ai",
  },
  {
    title: "Contra AI",
    year: "2025",
    description:
      "Full-stack AI text transformation platform with four modes: Humanize, Refine, Concise, and Academics.",
    technologies: ["Next.js", "TypeScript", "MongoDB", "Sonar Pro"],
    website: "https://contra-ai.vercel.app",
    source: "https://github.com/Vinodbiradar09/contra-ai",
  },
  {
    title: "Anon Message",
    year: "2024",
    description:
      "True Feedback - Where your identity remains a secret and honest conversations flourish.",
    technologies: ["MongoDB", "Next.js", "TypeScript", "NextAuth", "Gemini"],
    website: "https://anonymous-messages-vin.vercel.app",
    source: "https://github.com/Vinodbiradar09/anonymous-msg",
  },
];

const skills: string[] = [
  "React",
  "Next.js",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "Express.js",
  "C++",
  "Rust",
  "PostgreSQL",
  "MongoDB",
  "Prisma",
  "Docker",
  "CI/CD",
];

const blogPosts: BlogPost[] = [
  {
    id: "understanding-docker",
    title: "Docker: The Superpower of Consistent Environments",
    excerpt:
      "What Docker really is and why it solves the 'works on my machine' problem once and for all.",
    date: "February 2025",
    readTime: "12 min read",
    content: `So, what is Docker? Docker is a container platform that gives us the superpower of running the same environment on every laptop or system. Let me tell you why this matters.

The Problem We All Face

Imagine this: I'm developing an application. I've installed all the dependencies my code needs, specific versions of libraries, everything works perfectly on my local machine. After a year, I want to collaborate with my friend Skanda. I give him my GitHub link, and he clones it.

But here's where things go wrong. Skanda might face problems right from the start - version mismatches, missing dependencies, and he's on Windows while I'm on Linux. We can't just run the code on the first try because there will be issues. Sound familiar?

The Docker Solution

If I used Docker in my codebase, Skanda would simply pull my Docker image and run it on his machine. Using this approach, the exact versions, the same code, and all dependencies running in my environment will also run in his environment without any errors. That's the beauty of Docker.

Getting Started with Docker

When you install Docker, you can check if it's running by typing 'docker' in your terminal. You can also use 'docker -v' to check the version.

Let's install your first image:

\`\`\`bash
docker run -it ubuntu
\`\`\`

What does this command do? We're telling Docker to run in interactive mode (-it) and use Ubuntu. First, Docker looks for an image named "ubuntu" on your system. If it finds it, great! If not, it downloads the image from Docker Hub.

About Docker Hub

hub.docker.com is like GitHub.com. Just like how we add code to GitHub and people can pull it, we can pull public images from Docker Hub. It's that simple.

Once you have the image, run the command again. This time, Docker serves the cached Ubuntu image and creates a new container. When the container runs, you get a container ID (something like c7192197f43bf52ab67e8f7b5c5a675493b287aaeee8fad).

The cool thing? Once you're inside the container, you can do literally anything, and it doesn't affect your actual system. That's isolation at its best.

Docker Networking

Containers are isolated by default - they can't talk to other containers or access the internet. But when you spin up a container, Docker creates a bridge network between the host network and the container's IP address.

How does it work? When Docker starts, it sets up these configs on your host machine:
1. It creates a virtual ethernet bridge named docker0 on your host
2. It connects all containers together through this bridge
3. It connects them to your host network

Docker Volumes: Persisting Your Data

Here's the thing about containers - they're isolated, and when a container is killed, all its data is gone. That's where Docker volumes come in.

Docker volumes are used for storing and persisting data even if the container is killed or removed. This is crucial because you don't want to lose your data. When you spin up a new container, you can mount it to the same volume. Whatever data is in the volume gets synced to the container again. Pretty neat, right?

Example Dockerfile

Here's a simple Dockerfile I use in my projects:

\`\`\`dockerfile
FROM node:20-alpine 
WORKDIR /usr/src/app

COPY package.json package-lock.json turbo.json tsconfig.json ./
COPY apps ./apps
COPY packages ./packages

RUN npm install 
RUN npm run db:generate
RUN npm run build 

CMD ["npm", "run", "start-user-app"]
\`\`\`

This Dockerfile:
- Uses Node.js 20 on Alpine Linux (lightweight)
- Sets the working directory
- Copies configuration files and source code
- Installs dependencies and builds the application
- Defines the command to start the app

Docker Compose: Running Multiple Containers

Docker Compose is a higher-level tool where you can run your entire codebase with one command. Multiple containers can be networked in the same network, share volumes, and it's perfect for production apps.

Here's a docker-compose.yml example:

\`\`\`yaml
version: '3.8'

services:
  app:
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - "3000:3000"
    environment:
      - DATABASE_URL=postgresql://user:password@db:5432/myapp
    depends_on:
      - db
    volumes:
      - ./src:/usr/src/app/src
    
  db:
    image: postgres:15-alpine
    environment:
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=password
      - POSTGRES_DB=myapp
    volumes:
      - postgres_data:/var/lib/postgresql/data
    ports:
      - "5432:5432"

volumes:
  postgres_data:
\`\`\`

Instead of running multiple docker run commands, you define everything in one file and use:

\`\`\`bash
docker-compose up
\`\`\`

This starts all your services together with proper networking and volumes configured.

Docker Caching Layers

One more thing - Docker caches layers of your image. Whenever a line in your Dockerfile changes, Docker rebuilds from that point onwards. This makes subsequent builds much faster. Understanding this can really speed up your development workflow.

Docker isn't just a tool; it's a way of thinking about how we build and deploy applications. Once you start using it, you'll wonder how you ever lived without it.`,
  },
  {
    id: "cicd-pipelines-explained",
    title: "CI/CD Pipelines: From Code to Production",
    excerpt:
      "A practical guide to understanding how continuous integration and deployment actually works in real projects.",
    date: "January 2025",
    readTime: "15 min read",
    content: `Let me break down CI/CD at a high level based on what I've learned and implemented in my projects.

The Branch Strategy

Whenever we create a repo, we make certain branches - typically 'dev' for development and 'prod' for production. This separation is crucial for maintaining stability.

How CI Pipelines Work

Whenever a user makes changes to the dev branch, the CI (Continuous Integration) pipeline gets triggered. Here's what happens:

The CI pipeline builds the repo on an ubuntu-latest machine (usually GitHub's runners). It checks for workflows and linting errors. If the PR passes all the workflows - building the repo without errors and being free from linting and formatting issues - only then is it pushed to the dev branch.

Once every two weeks or so, all the PRs in the dev branch are reviewed. If everything is correct and working as expected, they're pushed to the prod branch.

The CD Pipeline Takes Over

This is where CD (Continuous Deployment) comes into play. Here's the flow:

1. The repo is cloned using actions/checkout@v2 on an ubuntu-latest machine
2. If everything builds correctly, a Docker image is created
3. This Docker image is pushed to a Docker registry (or AWS ECR)
4. Using Kubernetes clusters, containers are created from this image
5. These containers are deployed to an EC2 machine and scaled up or down based on traffic

Let me show you the actual workflow files I use:

Build Workflow (build.yml)

\`\`\`yaml
name: Build on PR

on:
  pull_request:
    branches:
      - master
      - main

jobs:
  build:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Use Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'
      
      - name: Install Dependencies
        run: npm install
        
      - name: Generate Prisma Client
        run: npm run db:generate
        
      - name: Run Build
        run: npm run build
\`\`\`

This workflow runs on every pull request. It checks out the code, installs dependencies, generates the Prisma client, and runs the build. If any step fails, the PR can't be merged.

Deploy Workflow (deploy.yml)

\`\`\`yaml
name: Build and Deploy to Docker Hub

on:
  push:
    branches:
      - master

jobs:
  build-and-push:
    runs-on: ubuntu-latest
    
    steps:
      - name: Check Out Repo
        uses: actions/checkout@v2
        
      - name: Log in to Docker Hub
        uses: docker/login-action@v1
        with:
          username: \${{ secrets.DOCKER_USERNAME }}
          password: \${{ secrets.DOCKER_PASSWORD }}
          
      - name: Build and Push Docker Image
        uses: docker/build-push-action@v2
        with:
          context: .
          file: ./docker/Dockerfile.user 
          push: true
          tags: toovinod/cicd-pipelines:latest
          
      - name: Verify Pushed Image
        run: docker pull toovinod/cicd-pipelines:latest
\`\`\`

This runs on every push to master. It logs into Docker Hub, builds the image, pushes it, and verifies the push was successful.

The Dockerfile

\`\`\`dockerfile
FROM node:20-alpine 
WORKDIR /usr/src/app

COPY package.json package-lock.json turbo.json tsconfig.json ./
COPY apps ./apps
COPY packages ./packages

RUN npm install 
RUN npm run db:generate
RUN npm run build 

CMD ["npm", "run", "start-user-app"]
\`\`\`

This Dockerfile uses a lightweight Alpine Linux image with Node.js 20. It copies all necessary files, installs dependencies, generates Prisma client, builds the app, and defines the start command.

Docker Compose for Local Development

For local development with multiple services, Docker Compose is a lifesaver. Here's an example:

\`\`\`yaml
version: '3.8'

services:
  app:
    build:
      context: .
      dockerfile: docker/Dockerfile.user
    ports:
      - "3000:3000"
    environment:
      - DATABASE_URL=\${DATABASE_URL}
      - NODE_ENV=production
    depends_on:
      - db
      - redis
    
  db:
    image: postgres:15-alpine
    environment:
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=postgres
      - POSTGRES_DB=myapp
    volumes:
      - postgres_data:/var/lib/postgresql/data
    ports:
      - "5432:5432"
      
  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"
    volumes:
      - redis_data:/data

volumes:
  postgres_data:
  redis_data:
\`\`\`

You define all your services in one file and spin everything up with:

\`\`\`bash
docker-compose up
\`\`\`

The Big Picture

So to summarize: code changes trigger CI pipelines that test and validate. When code hits production branches, CD pipelines build Docker images, push them to registries, and deploy them to servers where they can scale based on demand.

Is this understanding correct? I'm always learning and improving my DevOps knowledge, so I'd love to hear your thoughts on this workflow!`,
  },
  {
    id: "websockets-backend-communication",
    title: "WebSockets and Advanced Backend Communication",
    excerpt:
      "How production systems use message queues, pub/sub, and WebSockets to build scalable microservices that don't fall apart under pressure.",
    date: "March 2025",
    readTime: "18 min read",
    content: `Let me tell you about something that blew my mind when I first learned it: in production applications, we don't just have one big backend doing everything. We break our backend into multiple services, and these services talk to each other in fascinating ways.

The PhonePe Problem

Let's start with a real example. Imagine I'm sending 200 rupees to my friend Shambavi through PhonePe. The money transfer needs to happen immediately - that's the core MVP, right? But PhonePe also sends notifications and SMS confirmations.

Here's where things get tricky. If we build everything in one backend and the SMS service goes down, suddenly our entire payment system is affected. Users can't send money because we're waiting for the SMS service to respond. That's a terrible user experience.

The notification service being down shouldn't stop people from sending money. That's where microservices architecture comes in.

Enter Message Queues

When a request comes in, it reaches our primary backend. The money deduction and addition happens immediately - that's synchronous and critical. But for services like SMS and notifications? We use a queue.

Think of a queue like a todo list. Our primary backend says "hey, I need to send an SMS to this user" and puts that job in the queue. Then it moves on. It doesn't wait. A separate worker service picks up jobs from the queue and handles them one by one.

The beauty? Money transfers happen instantly. Notifications can take their own time. If the notification worker crashes, users can still send money.

The LeetCode Architecture

Here's another great example: LeetCode. When Shambavi (let's say she's really good at coding) submits her C++ solution, here's what happens:

1. The request hits LeetCode's primary backend
2. The backend (producer) puts a job in a queue with: userId, problemId, code, language
3. A worker picks up the job and executes the code

Why not execute code in the primary backend? Two reasons:

First, we're running untrusted user code. What if someone writes system("rm -rf /") or system("ls")? They could read our entire filesystem. That's a security nightmare.

Second, what if the code has while(true)? Our primary backend would be stuck, and other users would suffer.

So workers run in isolated containers. They're sandboxed. They execute the code safely, and if something goes wrong, we just kill that worker. The main backend is fine.

Types of Communication

Let me break down how backends actually talk to each other:

Synchronous Communication

HTTP/HTTPS: When one service makes an HTTP request to another, it waits for a response. This is the classic three-way handshake from computer networks. Service A sends a request, Service B acknowledges it, and A confirms. A waits until B responds - that's synchronous.

WebSockets: This is interesting. WebSockets start as HTTP requests, then upgrade to WebSocket connections. They allow full-duplex communication - both server and client can send messages anytime without reopening connections. Unlike HTTP, where the connection closes after each response, WebSockets stay open.

Asynchronous Communication

Message Queues (Redis, RabbitMQ): A producer adds jobs to a queue, and consumers pick them up whenever they're ready. The producer doesn't wait - that's what makes it asynchronous.

Pub/Sub: Publishers send messages, and all subscribers receive them. Great for scaling multiple services.

The Full LeetCode Flow

Let me paint the complete picture:

1. Shambavi submits code
2. Primary backend puts job in queue
3. Worker picks the job and executes code in isolated container
4. Worker gets result (Accepted/TLE/Wrong Answer)
5. Worker publishes result to pub/sub
6. WebSocket server subscribed to pub/sub receives the result
7. WebSocket server sends event to Shambavi's browser

"Wait," you're thinking, "why do we need pub/sub? Why can't the worker directly talk to the browser?"

Why Workers Can't Talk to Browsers Directly

Three main reasons:

Workers are untrusted and isolated: They execute user code. They should never have direct access to clients. They should only talk to internal systems.

Workers are short-lived: They scale up and down. A worker might execute code and die before sending the result to the frontend. If workers connected directly to browsers, we'd lose messages when workers crash.

Security: Workers shouldn't know about external connections at all. They should be completely isolated from the outside world.

What If Things Go Down?

Primary backend is down: We tell users "servers are down, try again later." There's no way around this.

Queue is down: The primary backend retries adding jobs. If the queue crashes with jobs in it, those jobs might be lost. But queues rarely go down, and they have persistence strategies.

How Redis Handles Crashes

Redis has two strategies:

AOF (Append Only File): Every write operation (LPUSH, RPUSH, HSET) is logged to disk. If Redis crashes, we replay the log file from top to bottom. Downside? Large files take time to replay.

RDB (Redis Database Backup): Redis takes periodic snapshots (like every 900 seconds if at least 1 key changed). It creates a binary file (dump.rdb). Recovery is faster - just load one file. But you might lose data between snapshots.

RabbitMQ writes everything to disk too, with message replication across nodes for reliability.

Workers are down: If a worker picks a job and crashes, the queue doesn't receive an acknowledgment. After a timeout, the job goes back to the queue. A new worker picks it up. If a job keeps failing after multiple tries, we send it to the Dead Letter Queue (DLQ) for investigation.

Scaling WebSocket Servers

In production, we don't have just one WebSocket server. We have many. There are two main scaling strategies:

Sticky Connections (Room-based): Group users by rooms. Like in a game (think Gather.town or PUBG), put all 100 players in one server. This works well for smaller groups.

Downside? If a room has users from USA, India, Japan, and Australia, but the server is in India, non-Indian users experience latency.

Geographic Distribution (Better approach): Deploy WebSocket servers in multiple regions. Indian users connect to Indian servers, US users to US servers, etc.

But here's the challenge: if Vinod (India) and Shambavi (USA) are in the same room but on different servers, how does a message from Vinod reach Shambavi?

Pub/Sub to the Rescue

Instead of workers figuring out which WebSocket server Shambavi is connected to, workers just publish messages to pub/sub. All WebSocket servers subscribe to these messages. Whichever server has Shambavi connected receives the message and forwards it to her.

\`\`\`
WS1 → Shambavi → USA
WS2 → Vinod → India  
WS3 → Bharg → Australia
WS4 → Rihanna → Russia
\`\`\`

When Vinod sends a message, it goes to WS2 (India). WS2 publishes to pub/sub. WS1 (USA) picks it up and sends it to Shambavi. That's how we scale globally.

The Big Picture

Modern production systems aren't monoliths. They're distributed systems with:
- Synchronous communication for critical operations
- Asynchronous queues for non-critical tasks
- Pub/sub for scaling across servers
- WebSockets for real-time communication

Understanding these patterns changed how I think about building applications. Next time you send money on PhonePe or submit code on LeetCode, you'll know exactly what's happening behind the scenes.`,
  },
];

const HomePage = ({ onNavigate }: { onNavigate: (page: string) => void }) => {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-[#e8d4ba] font-mono">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <section className="mb-24">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#d4a574]">
            Vinod
          </h1>
          <p className="text-xl md:text-2xl text-[#c4b5a0] mb-2">
            A FullStack Dev, Currently Learning Rust
          </p>
          <p className="text-lg text-[#b4a590]">I Am 20, I Code.</p>
        </section>
        <section className="mb-24">
          <h2 className="text-2xl font-bold mb-6 text-[#d4a574]">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-[#1a1a1a] border border-[#3a3a3a] rounded text-sm hover:border-[#d4a574] transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="mb-24">
          <h2 className="text-2xl font-bold mb-8 text-[#d4a574]">Projects</h2>
          <div className="space-y-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="border border-[#3a3a3a] bg-[#1a1a1a] p-6 rounded hover:border-[#d4a574] transition-all"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-[#d4a574]">
                    {project.title}
                  </h3>
                  <span className="text-sm text-[#b4a590]">{project.year}</span>
                </div>
                <p className="text-[#c4b5a0] mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs px-2 py-1 bg-[#0d0d0d] border border-[#2a2a2a] rounded text-[#b4a590]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-[#d4a574] hover:underline"
                  >
                    Live <ExternalLink size={14} />
                  </a>
                  <a
                    href={project.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-[#d4a574] hover:underline"
                  >
                    GitHub <Github size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-24">
          <button
            onClick={() => onNavigate("blog")}
            className="flex items-center gap-2 text-[#d4a574] hover:underline text-lg"
          >
            Read My Blogs <ArrowRight size={20} />
          </button>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-[#d4a574]">Contact</h2>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Mail size={18} className="text-[#b4a590]" />
              <span className="text-[#c4b5a0]">Email:</span>
              <a
                href="mailto:vinodjb07@gmail.com"
                className="text-[#d4a574] hover:underline"
              >
                vinodjb07@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Github size={18} className="text-[#b4a590]" />
              <span className="text-[#c4b5a0]">GitHub:</span>
              <a
                href="https://github.com/Vinodbiradar09"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#d4a574] hover:underline"
              >
                @Vinodbiradar09
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Twitter size={18} className="text-[#b4a590]" />
              <span className="text-[#c4b5a0]">Twitter:</span>
              <a
                href="https://x.com/toovinod09"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#d4a574] hover:underline"
              >
                @toovinod09
              </a>
            </div>
          </div>
        </section>

        <footer className="text-center text-sm text-[#b4a590] pt-8 border-t border-[#3a3a3a]">
          © 2025 Vinod. Built with NextJs, Typescript, and Claude 🌸
        </footer>
      </div>
    </div>
  );
};

const BlogListPage = ({
  onNavigate,
  onSelectBlog,
}: {
  onNavigate: (page: string) => void;
  onSelectBlog: (id: string) => void;
}) => {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-[#e8d4ba] font-mono">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="mb-12">
          <button
            onClick={() => onNavigate("home")}
            className="flex items-center gap-2 text-[#d4a574] hover:underline mb-8"
          >
            ← Back to Home
          </button>
          <h1 className="text-4xl font-bold text-[#d4a574]">Blog Posts</h1>
        </div>

        <div className="space-y-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="border-l-2 border-[#d4a574] pl-6 py-2">
              <h2 className="text-2xl font-bold text-[#d4a574] mb-3">
                {post.title}
              </h2>
              <p className="text-[#c4b5a0] mb-4 leading-relaxed">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-4 text-sm text-[#b4a590] mb-4">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <button
                onClick={() => onSelectBlog(post.id)}
                className="flex items-center gap-2 text-[#d4a574] hover:underline"
              >
                Read More <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>

        <footer className="text-center text-sm text-[#b4a590] pt-16 mt-16 border-t border-[#3a3a3a]">
          © 2025 Vinod. Built with NextJs, Typescript, and Claude 🌸
        </footer>
      </div>
    </div>
  );
};

const BlogPostPage = ({
  blogId,
  onNavigate,
}: {
  blogId: string;
  onNavigate: (page: string) => void;
}) => {
  const post = blogPosts.find((p) => p.id === blogId);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#0d0d0d] text-[#e8d4ba] font-mono flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl text-[#d4a574] mb-4">Blog post not found</h1>
          <button
            onClick={() => onNavigate("blog")}
            className="text-[#d4a574] hover:underline"
          >
            ← Back to Blog
          </button>
        </div>
      </div>
    );
  }

  const renderContent = (content: string) => {
    const parts = content.split(/```/);
    return parts.map((part, index) => {
      if (index % 2 === 1) {

        const lines = part.split("\n");
        const language = lines[0].trim();
        const code = lines.slice(1).join("\n");
        
        return (
          <pre
            key={index}
            className="bg-[#1a1a1a] border border-[#3a3a3a] rounded p-4 overflow-x-auto mb-6"
          >
            {language && (
              <div className="text-xs text-[#d4a574] mb-2 font-bold uppercase">
                {language}
              </div>
            )}
            <code className="text-sm text-[#c4b5a0] font-mono">{code}</code>
          </pre>
        );
      } else {
        return part.split("\n\n").map((paragraph, pIndex) => {
          if (paragraph.trim()) {
            return (
              <p
                key={`${index}-${pIndex}`}
                className="text-[#c4b5a0] mb-6 leading-relaxed"
              >
                {paragraph}
              </p>
            );
          }
          return null;
        });
      }
    });
  };

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-[#e8d4ba] font-mono">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="mb-12">
          <button
            onClick={() => onNavigate("blog")}
            className="flex items-center gap-2 text-[#d4a574] hover:underline mb-8"
          >
            ← Back to Blog
          </button>
        </div>

        <article>
          <h1 className="text-4xl md:text-5xl font-bold text-[#d4a574] mb-4">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-[#b4a590] mb-8">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
          <div className="prose prose-invert prose-lg max-w-none">
            {renderContent(post.content)}
          </div>
        </article>

        <footer className="text-center text-sm text-[#b4a590] pt-16 mt-16 border-t border-[#3a3a3a]">
          © 2025 Vinod. Built with NextJs, Typescript, and Claude 🌸
        </footer>
      </div>
    </div>
  );
};

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedBlogId, setSelectedBlogId] = useState<string | null>(null);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    setSelectedBlogId(null);
  };

  const handleSelectBlog = (id: string) => {
    setSelectedBlogId(id);
    setCurrentPage("blogPost");
  };

  if (currentPage === "home") {
    return <HomePage onNavigate={handleNavigate} />;
  }

  if (currentPage === "blog") {
    return (
      <BlogListPage
        onNavigate={handleNavigate}
        onSelectBlog={handleSelectBlog}
      />
    );
  }

  if (currentPage === "blogPost" && selectedBlogId) {
    return (
      <BlogPostPage blogId={selectedBlogId} onNavigate={handleNavigate} />
    );
  }

  return <HomePage onNavigate={handleNavigate} />;
};

export default App;