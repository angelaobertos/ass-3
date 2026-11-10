# AI Assistance Disclosure

## Project

Plant Explorer is a one-page plant search website built on the existing Node.js project structure. It uses the Trefle API to display plant names, scientific names, families, and images.

## Work completed manually by the student

- Provided the existing project and folder structure from the previous assignment as the starting point.
- Added the Trefle API token to the local `.env` file.
- Specified the Plant Explorer requirements and design preferences.

## AI-assisted work

AI assistance was used to adapt the existing application for Plant Explorer, including:

- Loading the `TREFLE_API_TOKEN` environment variable on the server with `dotenv`.
- Adding a server-side Axios connection to Trefle for plant listings and searches, keeping the token out of browser code.
- Replacing the dog-themed page with a searchable plant-card interface that displays plant names, scientific names, families, and images.
- Adding a fixed 4:3 image aspect ratio, loading and result messages, and error handling.
- Updating `.gitignore` to exclude `.env` and `node_modules/`.

The student should review this disclosure and adjust it if needed to match the course's AI-use policy and their own contributions.

No API token or other secret is included in this file.
