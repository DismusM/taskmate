# TaskMate Project

This document provides a high-level overview of the TaskMate application, its tech stack, and repository structure.

## Description

TaskMate is a vibrant and intuitive to-do list application designed for seamless task management. Key features include:

- **Multi-user support** with JWT-based authentication.
- **Task creation and management** through interactive modals.
- **Advanced sorting and filtering** options for organizing tasks.
- An **admin panel** for user and task administration.

## Tech Stack

- **Frontend:** Next.js (TypeScript, App Router)
- **UI:** Mantine UI
- **Backend:** Cloudflare Workers
- **Database:** Cloudflare D1
- **Deployment:** OpenNext
- **Monorepo:** Turborepo

## Folder Structure

The repository is organized as a monorepo with the following structure:

- `apps/web`: The Next.js frontend application.
- `apps/worker`: The Cloudflare Worker for backend logic.
- `packages/ui`: Shared Mantine UI components.
- `packages/types`: Shared TypeScript types for the frontend and backend.
