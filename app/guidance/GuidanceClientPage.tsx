"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Copy, Check, Terminal, Package, Rocket, Wrench, Database, Shield, HelpCircle } from "lucide-react"

export default function GuidanceClientPage() {
  const [copied, setCopied] = useState<string | null>(null)

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopied(id)
    setTimeout(() => setCopied(null), 2000)
  }

  const CodeBlock = ({ code, id }: { code: string; id: string }) => (
    <div className="relative">
      <pre className="bg-slate-950 text-slate-50 p-4 rounded-md overflow-x-auto">
        <code className="text-sm font-mono">{code}</code>
      </pre>
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-2 right-2 h-8 w-8 bg-slate-800 hover:bg-slate-700"
        onClick={() => copyToClipboard(code, id)}
      >
        {copied === id ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
      </Button>
    </div>
  )

  const CommandSection = ({
    title,
    description,
    commands,
  }: {
    title: string
    description: string
    commands: { id: string; code: string; explanation: string }[]
  }) => (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-slate-600">{description}</p>
      <div className="space-y-6">
        {commands.map((command) => (
          <div key={command.id} className="space-y-2">
            <CodeBlock code={command.code} id={command.id} />
            <p className="text-sm text-slate-600">{command.explanation}</p>
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <div className="container mx-auto py-10">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold tracking-tight">Project Guidance</h1>
        <p className="text-slate-600 mt-2">
          Step-by-step instructions for setting up and running the Cox's Bazar Tourism project
        </p>
      </div>

      <Tabs defaultValue="setup" className="w-full">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/4">
            <Card>
              <CardHeader>
                <CardTitle>Navigation</CardTitle>
                <CardDescription>Choose a section to view guidance</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <TabsList className="flex flex-col w-full h-auto bg-transparent">
                  <TabsTrigger
                    value="setup"
                    className="justify-start w-full px-4 py-3 data-[state=active]:bg-slate-100"
                  >
                    <Package className="h-4 w-4 mr-2" /> Prerequisites & Setup
                  </TabsTrigger>
                  <TabsTrigger
                    value="development"
                    className="justify-start w-full px-4 py-3 data-[state=active]:bg-slate-100"
                  >
                    <Terminal className="h-4 w-4 mr-2" /> Development Commands
                  </TabsTrigger>
                  <TabsTrigger
                    value="production"
                    className="justify-start w-full px-4 py-3 data-[state=active]:bg-slate-100"
                  >
                    <Rocket className="h-4 w-4 mr-2" /> Production & Deployment
                  </TabsTrigger>
                  <TabsTrigger
                    value="database"
                    className="justify-start w-full px-4 py-3 data-[state=active]:bg-slate-100"
                  >
                    <Database className="h-4 w-4 mr-2" /> Database Management
                  </TabsTrigger>
                  <TabsTrigger
                    value="advanced"
                    className="justify-start w-full px-4 py-3 data-[state=active]:bg-slate-100"
                  >
                    <Wrench className="h-4 w-4 mr-2" /> Advanced Configuration
                  </TabsTrigger>
                  <TabsTrigger
                    value="security"
                    className="justify-start w-full px-4 py-3 data-[state=active]:bg-slate-100"
                  >
                    <Shield className="h-4 w-4 mr-2" /> Security & Environment
                  </TabsTrigger>
                  <TabsTrigger
                    value="troubleshooting"
                    className="justify-start w-full px-4 py-3 data-[state=active]:bg-slate-100"
                  >
                    <HelpCircle className="h-4 w-4 mr-2" /> Troubleshooting
                  </TabsTrigger>
                </TabsList>
              </CardContent>
            </Card>
          </div>

          <div className="md:w-3/4">
            <Card>
              <CardContent className="pt-6">
                <TabsContent value="setup" className="mt-0 space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Prerequisites & Project Setup</h2>
                    <p className="text-slate-600 mb-6">
                      Before you begin, ensure you have the following installed on your system:
                    </p>

                    <ul className="list-disc pl-6 space-y-2 mb-6">
                      <li>Node.js (v18.0.0 or higher)</li>
                      <li>npm (v9.0.0 or higher) or yarn (v1.22.0 or higher)</li>
                      <li>Git</li>
                      <li>PowerShell (v5.1 or higher)</li>
                    </ul>

                    <Separator className="my-6" />

                    <CommandSection
                      title="Checking Prerequisites"
                      description="Verify that you have the required tools installed with these commands:"
                      commands={[
                        {
                          id: "check-node",
                          code: "node --version",
                          explanation: "Checks the installed Node.js version. Should be v18.0.0 or higher.",
                        },
                        {
                          id: "check-npm",
                          code: "npm --version",
                          explanation: "Checks the installed npm version. Should be v9.0.0 or higher.",
                        },
                        {
                          id: "check-git",
                          code: "git --version",
                          explanation: "Checks the installed Git version.",
                        },
                        {
                          id: "check-powershell",
                          code: "$PSVersionTable.PSVersion",
                          explanation: "Checks the PowerShell version. Should be v5.1 or higher.",
                        },
                      ]}
                    />

                    <Separator className="my-6" />

                    <CommandSection
                      title="Cloning the Project"
                      description="Clone the project repository to your local machine:"
                      commands={[
                        {
                          id: "clone-repo",
                          code: "git clone https://github.com/your-organization/coxs-bazar-tourism.git",
                          explanation: "Clones the project repository to your local machine.",
                        },
                        {
                          id: "navigate-project",
                          code: "cd coxs-bazar-tourism",
                          explanation: "Navigates to the project directory.",
                        },
                      ]}
                    />

                    <Separator className="my-6" />

                    <CommandSection
                      title="Installing Dependencies"
                      description="Install the project dependencies using npm or yarn:"
                      commands={[
                        {
                          id: "install-deps-npm",
                          code: "npm install",
                          explanation: "Installs all project dependencies using npm.",
                        },
                        {
                          id: "install-deps-yarn",
                          code: "yarn install",
                          explanation: "Alternative: Installs all project dependencies using yarn.",
                        },
                      ]}
                    />
                  </div>
                </TabsContent>

                <TabsContent value="development" className="mt-0 space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Development Commands</h2>
                    <p className="text-slate-600 mb-6">Commands for running and developing the project locally:</p>

                    <CommandSection
                      title="Starting the Development Server"
                      description="Run the project in development mode with hot-reloading:"
                      commands={[
                        {
                          id: "dev-server-npm",
                          code: "npm run dev",
                          explanation:
                            "Starts the development server using npm. Access the site at http://localhost:3000",
                        },
                        {
                          id: "dev-server-yarn",
                          code: "yarn dev",
                          explanation: "Alternative: Starts the development server using yarn.",
                        },
                      ]}
                    />

                    <Separator className="my-6" />

                    <CommandSection
                      title="Code Linting"
                      description="Check and fix code style issues:"
                      commands={[
                        {
                          id: "lint-npm",
                          code: "npm run lint",
                          explanation: "Runs ESLint to check for code style issues.",
                        },
                        {
                          id: "lint-fix-npm",
                          code: "npm run lint -- --fix",
                          explanation: "Automatically fixes fixable code style issues.",
                        },
                      ]}
                    />

                    <Separator className="my-6" />

                    <CommandSection
                      title="Running Tests"
                      description="Execute the test suite to ensure everything is working correctly:"
                      commands={[
                        {
                          id: "test-npm",
                          code: "npm test",
                          explanation: "Runs all tests in the project.",
                        },
                        {
                          id: "test-watch-npm",
                          code: "npm test -- --watch",
                          explanation: "Runs tests in watch mode, re-running when files change.",
                        },
                      ]}
                    />
                  </div>
                </TabsContent>

                <TabsContent value="production" className="mt-0 space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Production & Deployment</h2>
                    <p className="text-slate-600 mb-6">
                      Commands for building and deploying the project to production:
                    </p>

                    <CommandSection
                      title="Building for Production"
                      description="Create an optimized production build:"
                      commands={[
                        {
                          id: "build-npm",
                          code: "npm run build",
                          explanation: "Creates an optimized production build of the project.",
                        },
                        {
                          id: "build-yarn",
                          code: "yarn build",
                          explanation: "Alternative: Creates a production build using yarn.",
                        },
                      ]}
                    />

                    <Separator className="my-6" />

                    <CommandSection
                      title="Starting Production Server"
                      description="Run the production build locally to test:"
                      commands={[
                        {
                          id: "start-npm",
                          code: "npm start",
                          explanation: "Starts the production server locally. Access at http://localhost:3000",
                        },
                        {
                          id: "start-yarn",
                          code: "yarn start",
                          explanation: "Alternative: Starts the production server using yarn.",
                        },
                      ]}
                    />

                    <Separator className="my-6" />

                    <CommandSection
                      title="Deployment to Vercel"
                      description="Deploy the project to Vercel hosting platform:"
                      commands={[
                        {
                          id: "vercel-login",
                          code: "npx vercel login",
                          explanation: "Log in to your Vercel account.",
                        },
                        {
                          id: "vercel-deploy",
                          code: "npx vercel",
                          explanation: "Deploy the project to Vercel (development).",
                        },
                        {
                          id: "vercel-prod",
                          code: "npx vercel --prod",
                          explanation: "Deploy the project to Vercel production environment.",
                        },
                      ]}
                    />
                  </div>
                </TabsContent>

                <TabsContent value="database" className="mt-0 space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Database Management</h2>
                    <p className="text-slate-600 mb-6">Commands for managing the project's database:</p>

                    <CommandSection
                      title="Database Setup"
                      description="Set up and configure the database:"
                      commands={[
                        {
                          id: "prisma-generate",
                          code: "npx prisma generate",
                          explanation: "Generates Prisma Client based on your schema.",
                        },
                        {
                          id: "prisma-migrate-dev",
                          code: "npx prisma migrate dev --name init",
                          explanation: "Creates and applies migrations to your development database.",
                        },
                        {
                          id: "prisma-studio",
                          code: "npx prisma studio",
                          explanation: "Opens Prisma Studio, a visual database editor at http://localhost:5555",
                        },
                      ]}
                    />

                    <Separator className="my-6" />

                    <CommandSection
                      title="Database Migrations"
                      description="Manage database schema changes:"
                      commands={[
                        {
                          id: "prisma-migrate-reset",
                          code: "npx prisma migrate reset",
                          explanation: "Resets the database and applies all migrations.",
                        },
                        {
                          id: "prisma-db-push",
                          code: "npx prisma db push",
                          explanation: "Pushes the schema to the database without migrations.",
                        },
                        {
                          id: "prisma-migrate-deploy",
                          code: "npx prisma migrate deploy",
                          explanation: "Applies pending migrations to the production database.",
                        },
                      ]}
                    />
                  </div>
                </TabsContent>

                <TabsContent value="advanced" className="mt-0 space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Advanced Configuration</h2>
                    <p className="text-slate-600 mb-6">Advanced commands and configurations for the project:</p>

                    <CommandSection
                      title="Environment Configuration"
                      description="Set up environment variables for different environments:"
                      commands={[
                        {
                          id: "env-setup",
                          code: "Copy-Item .env.example .env.local",
                          explanation: "Creates a local environment file from the example template.",
                        },
                        {
                          id: "env-edit",
                          code: "notepad .env.local",
                          explanation: "Opens the local environment file for editing.",
                        },
                      ]}
                    />

                    <Separator className="my-6" />

                    <CommandSection
                      title="Custom Server Configuration"
                      description="Configure custom server settings:"
                      commands={[
                        {
                          id: "custom-port",
                          code: "npm run dev -- -p 4000",
                          explanation: "Starts the development server on port 4000 instead of the default 3000.",
                        },
                        {
                          id: "custom-hostname",
                          code: "npm run dev -- -H 0.0.0.0",
                          explanation: "Makes the development server accessible from other devices on the network.",
                        },
                      ]}
                    />

                    <Separator className="my-6" />

                    <CommandSection
                      title="Performance Analysis"
                      description="Analyze the performance of the application:"
                      commands={[
                        {
                          id: "analyze-bundle",
                          code: "npm run analyze",
                          explanation: "Analyzes the bundle size of the application.",
                        },
                        {
                          id: "lighthouse",
                          code: "npx lighthouse https://localhost:3000 --view",
                          explanation: "Runs a Lighthouse audit on the local development server.",
                        },
                      ]}
                    />
                  </div>
                </TabsContent>

                <TabsContent value="security" className="mt-0 space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Security & Environment</h2>
                    <p className="text-slate-600 mb-6">Security best practices and environment configuration:</p>

                    <CommandSection
                      title="Security Audits"
                      description="Run security audits on dependencies:"
                      commands={[
                        {
                          id: "npm-audit",
                          code: "npm audit",
                          explanation: "Checks for known vulnerabilities in dependencies.",
                        },
                        {
                          id: "npm-audit-fix",
                          code: "npm audit fix",
                          explanation: "Automatically fixes fixable vulnerabilities.",
                        },
                        {
                          id: "npm-outdated",
                          code: "npm outdated",
                          explanation: "Checks for outdated dependencies that might need updating.",
                        },
                      ]}
                    />

                    <Separator className="my-6" />

                    <CommandSection
                      title="Environment Variables"
                      description="Manage environment variables for different environments:"
                      commands={[
                        {
                          id: "vercel-env-add",
                          code: "npx vercel env add",
                          explanation: "Adds an environment variable to your Vercel project.",
                        },
                        {
                          id: "vercel-env-ls",
                          code: "npx vercel env ls",
                          explanation: "Lists all environment variables in your Vercel project.",
                        },
                        {
                          id: "vercel-env-rm",
                          code: "npx vercel env rm VARIABLE_NAME",
                          explanation: "Removes an environment variable from your Vercel project.",
                        },
                      ]}
                    />
                  </div>
                </TabsContent>

                <TabsContent value="troubleshooting" className="mt-0 space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Troubleshooting</h2>
                    <p className="text-slate-600 mb-6">Common issues and how to resolve them:</p>

                    <CommandSection
                      title="Clearing Cache"
                      description="Clear various caches to resolve common issues:"
                      commands={[
                        {
                          id: "clear-next-cache",
                          code: "npm run dev -- -c",
                          explanation: "Clears the Next.js cache before starting the development server.",
                        },
                        {
                          id: "clear-npm-cache",
                          code: "npm cache clean --force",
                          explanation: "Clears the npm cache to resolve dependency issues.",
                        },
                        {
                          id: "delete-node-modules",
                          code: "Remove-Item -Recurse -Force node_modules",
                          explanation: "Deletes the node_modules directory for a fresh install.",
                        },
                        {
                          id: "reinstall-deps",
                          code: "npm install",
                          explanation: "Reinstalls all dependencies after clearing caches.",
                        },
                      ]}
                    />

                    <Separator className="my-6" />

                    <CommandSection
                      title="Debugging"
                      description="Commands for debugging issues:"
                      commands={[
                        {
                          id: "debug-mode",
                          code: "$env:DEBUG='*'; npm run dev",
                          explanation: "Runs the development server with verbose debugging enabled.",
                        },
                        {
                          id: "check-ports",
                          code: "netstat -ano | findstr :3000",
                          explanation: "Checks if port 3000 is already in use by another process.",
                        },
                        {
                          id: "kill-process",
                          code: "taskkill /PID [PID] /F",
                          explanation: "Kills a process by its PID (replace [PID] with the actual process ID).",
                        },
                      ]}
                    />

                    <Separator className="my-6" />

                    <CommandSection
                      title="Common Error Solutions"
                      description="Solutions for common errors you might encounter:"
                      commands={[
                        {
                          id: "module-not-found",
                          code: "npm install [missing-module]",
                          explanation: "Installs a missing module that's causing 'Module not found' errors.",
                        },
                        {
                          id: "port-in-use",
                          code: "npm run dev -- -p 3001",
                          explanation: "Starts the development server on an alternative port if 3000 is in use.",
                        },
                        {
                          id: "reset-git",
                          code: "git reset --hard HEAD",
                          explanation: "Resets your working directory to the last commit if you have code issues.",
                        },
                      ]}
                    />
                  </div>
                </TabsContent>
              </CardContent>
            </Card>
          </div>
        </div>
      </Tabs>
    </div>
  )
}

