# AI Assistance Disclosure

## Project

Plant Explorer is a one-page plant search website built on the existing Node.js project structure. It uses the Trefle API to display plant names, scientific names, families, and images.

## Student-provided work and decisions

- The existing project and its folder structure were provided as the starting point.
- The Trefle API token was supplied in the local `.env` file.
- The project requirements and design preferences were specified by the student.

## AI-assisted work

AI assistance was used to adapt the existing application for Plant Explorer, including:

- Loading the `TREFLE_API_TOKEN` environment variable on the server with `dotenv`.
- Adding a server-side Axios connection to Trefle for plant listings and searches, keeping the token out of browser code.
- Replacing the dog-themed page with a searchable plant-card interface that displays plant names, scientific names, families, and images.
- Adding a fixed 4:3 image aspect ratio, loading and result messages, and error handling.
- Updating `.gitignore` to exclude `.env` and `node_modules/`.

The student should review this disclosure and adjust it if needed to match the course's AI-use policy and their own contributions.

No API token or other secret is included in this file.
