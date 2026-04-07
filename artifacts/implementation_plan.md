# Goal Description

The goal is to create a modern Next.js 15 web application using the App Router, React 19, and Tailwind CSS to serve and beautifully render the markdown (`.md`) files present in this repository.

## User Review Required

> [!IMPORTANT]
> The Next.js application will be created in a new subdirectory named `web` to avoid conflicts with existing files in the root repository.
> The Next.js application will read the `.md` files directly from the parent directory (root folder).

## Proposed Changes

### 1. Next.js Setup

Create a new Next.js project in the `web` directory with the following configuration:

- TypeScript
- Tailwind CSS
- ESLint
- App Router (`src/app`)

### 2. Dependencies

Install required packages for parsing and styling markdown:

- `gray-matter` (to parse any potential frontmatter and content)
- `react-markdown`, `remark-gfm` (to render markdown as React components)
- `@tailwindcss/typography` (for out-of-the-box beautiful typography for markdown)
- `lucide-react` (for icons)

### 3. Application Architecture (`web/src`)

#### [NEW] `web/src/lib/markdown.ts`

- Utility functions to read the file system and Parse `.md` files from the root of the repository (`../`).

#### [NEW] `web/src/app/page.tsx`

- The homepage will list all available markdown documents as a clickable grid or list of cards with icons and document titles.

#### [NEW] `web/src/app/[slug]/page.tsx`

- Dynamic route to catch document names (e.g., `/Glossario`).
- Will load the specific `.md` file, render the content using `react-markdown` and `@tailwindcss/typography` styling.

#### [NEW] `web/src/components/layout/Header.tsx`

- A premium, sticky top navigation header with glassmorphism effect, title of the project, and navigation links.

## Open Questions

> [!CAUTION]
> Is it okay to create the Next.js application in a subfolder named `web`? Or would you prefer a different name like `docs`, `site`, or `app`?
> web

> [!NOTE]
> Tailwind CSS will be used for styling. Do you have any specific color theme in mind (e.g., dark mode by default, specific brand colors)?

## Verification Plan

### Automated Tests

- Build verification using `npm run build` inside the `web` folder.

### Manual Verification

- Run `npm run dev` and test the application in the browser.
- Ensure all existing markdown files are listed on the home page and render correctly on their respective detail pages.
