# enichols.dev - Personal Developer Portfolio

![enichols.dev](https://via.placeholder.com/800x400.png?text=enichols.dev+Portfolio)

## Overview

This project is a personal developer portfolio website showcasing various projects and providing contact information. It's built using modern web technologies and features a clean, minimalist design with smooth animations.

## Major Technologies Used

- [Next.js](https://nextjs.org/) - React framework for server-side rendering and static site generation
- [React](https://reactjs.org/) - JavaScript library for building user interfaces
- [TypeScript](https://www.typescriptlang.org/) - Typed superset of JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Contentlayer](https://www.contentlayer.dev/) - Content SDK for Next.js
- [Framer Motion](https://www.framer.com/motion/) - Animation library for React
- [Zustand](https://github.com/pmndrs/zustand) - State management
- [Jest](https://jestjs.io/) and [Playwright](https://playwright.dev/) - Testing frameworks

## Project Structure

```
ebn-dev-2024/
├── app/                    # Next.js app directory
│   ├── api/                # API routes
│   ├── contact/            # Contact page
│   ├── projects/           # Projects pages
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout component
│   └── page.tsx            # Home page component
├── components/             # Reusable React components
├── content/                # Markdown content for projects
├── public/                 # Static assets
├── styles/                 # Additional styles
├── lib/                    # Utility functions and helpers
├── types/                  # TypeScript type definitions
├── tests/                  # Test files
└── package.json            # Project dependencies and scripts
```

## Main Components and Their Roles

1. `app/layout.tsx`: Root layout component that sets up the basic HTML structure, fonts, and metadata.
2. `app/page.tsx`: Home page component featuring a minimalist design with animated elements and navigation links.
3. `app/projects/page.tsx`: Projects listing page showcasing various developer projects.
4. `app/projects/[slug]/page.tsx`: Dynamic page for individual project details.
5. `components/mdx.tsx`: Component for rendering MDX content, used for project descriptions.
6. `content/projects/*.mdx`: MDX files containing detailed information about each project.

## Building and Running the App

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/ebn-dev-2024.git
   cd ebn-dev-2024
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Run the development server:
   ```
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

5. To build for production:
   ```
   npm run build
   ```

6. To start the production server:
   ```
   npm start
   ```

## Testing

- Run Jest tests:
  ```
  npm run test:jest
  ```

- Run Playwright end-to-end tests:
  ```
  npm run test:e2e
  ```

- Run all tests:
  ```
  npm test
  ```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).
