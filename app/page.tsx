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
          © 2025 Vinod. Built with NextJs, Typescript, and Claude ☕
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
          © 2025 Vinod. Built with NextJs, Typescript, and Claude ☕
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