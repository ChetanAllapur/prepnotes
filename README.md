# PrepNotes

PrepNotes is an interview-preparation platform where users can explore study notes, purchase downloadable PDFs, and access their purchase history.

## Project Structure

- `apps/web` - React, TypeScript, and Vite web application
- `apps/mobile` - Expo and React Native mobile application
- `packages/shared` - Shared code for web and mobile
- `supabase` - Backend configuration and database migrations
- `tests` - Automated testing

## Tech Stack

- React and TypeScript
- Vite and React Router
- React Native and Expo
- Supabase for backend services
- Turborepo and npm workspaces

## Getting Started

### Install Dependencies

Run this command from the project root:

```bash
npm install
```

### Start the Web Application

```bash
npm run dev:web
```

### Start the Mobile Application

```bash
npm run dev:mobile
```

### Build the Project

```bash
npm run build
```

### Run Lint Checks

```bash
npm run lint
```

## Product Roadmap

- [ ] Build the web application
- [ ] Develop the mobile application
- [ ] Configure Supabase authentication and database
- [ ] Implement secure payments and PDF delivery
- [ ] Build purchase history and admin features
- [ ] Add automated tests

## Development Guidelines

- Keep credentials and secrets in local environment files.
- Never commit actual secrets to Git.
- Use `.env.example` to document required environment variables.
- Keep reusable types and business logic in `packages/shared`.

---

*PrepNotes is under active development.*
