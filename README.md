# enichols.dev - Personal Developer Portfolio

![enichols.dev](https://via.placeholder.com/800x400.png?text=enichols.dev+Portfolio)

## Overview

This project is a personal developer portfolio website showcasing various projects and providing contact information. It features a clean, modern design with interactive elements, smooth animations, and a task management system. Built with performance and responsiveness in mind, it demonstrates both frontend and backend capabilities.

## Features

- **Project Showcase**: Dynamic project cards with detailed individual project pages
- **Interactive UI**: Custom animations, gradient effects, and particle systems
- **Task Management**: Full-featured task tracking system with CRUD operations
- **MDX Content**: Content-driven project pages using MDX and Contentlayer
- **Responsive Design**: Mobile-friendly layout that works across all device sizes
- **API Routes**: Backend functionality for managing data
- **Testing**: Comprehensive test suite with Jest and Playwright

## Major Technologies Used

- **Frontend Framework**: [Next.js](https://nextjs.org/) 14 with App Router
- **UI Library**: [React](https://reactjs.org/) 18
- **Type Safety**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom components
- **Content Management**: [Contentlayer](https://www.contentlayer.dev/) for MDX processing
- **Animations**: [Framer Motion](https://www.framer.com/motion/) for fluid animations
- **State Management**: [Zustand](https://github.com/pmndrs/zustand) for global state
- **Testing**: [Jest](https://jestjs.io/) and [Playwright](https://playwright.dev/)
- **UI Components**: Custom UI components and [Radix UI](https://www.radix-ui.com/) primitives

## Project Structure

```
ebn-dev-2024/
├── app/                    # Next.js app directory
│   ├── api/                # API routes for backend functionality
│   │   └── tasks/          # Task management API endpoints
│   ├── contact/            # Contact page
│   ├── projects/           # Projects pages including dynamic routes
│   │   └── [slug]/         # Dynamic project detail pages
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout component
│   └── page.tsx            # Home page component
├── components/             # Reusable React components
│   ├── ui/                 # UI component library
│   ├── magicui/            # Special effect components
│   └── mdx.tsx             # MDX rendering components
├── content/                # Markdown content for projects
│   └── projects/           # Individual project MDX files
├── data/                   # JSON data files
├── hooks/                  # Custom React hooks
├── lib/                    # Utility functions and helpers
├── public/                 # Static assets
│   ├── fonts/              # Custom fonts
│   └── images/             # Project images and icons
├── store/                  # Zustand state stores
├── types/                  # TypeScript type definitions
├── util/                   # Utility functions
├── tests/                  # Jest test files
└── e2e/                    # Playwright end-to-end tests
```

## Main Components and Their Roles

1. **Layout Components**
   - `app/layout.tsx`: Root layout with metadata, fonts, and global structure
   - `app/page.tsx`: Home page featuring animated elements and project navigation

2. **Project Components**
   - `app/projects/page.tsx`: Gallery of all projects with filtering capabilities
   - `app/projects/[slug]/page.tsx`: Dynamic page for individual project details
   - `components/ShineBorderCard.tsx`: Interactive card component with shine effect

3. **UI Effects**
   - `components/GradientText.tsx`: Text with gradient color effects
   - `components/particles.tsx`: Particle animation system
   - `components/magicui/shine-border.tsx`: Advanced border animation effects

4. **Task Management**
   - `components/taskManager.tsx`: UI for managing tasks
   - `components/task-item.tsx`: Individual task display component
   - `lib/taskManager.ts`: Core task management logic
   - `hooks/useTasks.ts`: Custom hook for task data operations
   - `store/task-store.ts`: Global state for tasks using Zustand

5. **Content**
   - `components/mdx.tsx`: Component for rendering MDX content
   - `content/projects/*.mdx`: MDX files containing detailed project information

## Building and Running the App

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/ebn-dev-2024.git
   cd ebn-dev-2024
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or
   bun install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   # or
   bun dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000)** in your browser to view the app.

5. **Build for production**:
   ```bash
   npm run build
   # or
   bun run build
   ```

6. **Start the production server**:
   ```bash
   npm start
   # or
   bun start
   ```

## Testing

- **Run Jest unit tests**:
  ```bash
  npm run test:jest
  ```

- **Run Playwright end-to-end tests**:
  ```bash
  npm run test:e2e
  ```

- **Run all tests**:
  ```bash
  npm test
  ```

- **Run linting**:
  ```bash
  npm run lint
  ```

## Project Features in Detail

### Task Management System
The application includes a complete task management system with:
- Create, read, update, and delete functionality
- Task prioritization and categorization
- Local state persistence
- API endpoints for data operations

### Project Showcase
- Dynamic project cards with hover effects
- Detailed project pages with MDX content
- Custom styling for code blocks and content
- Gradient text and interactive UI elements

### UI Components
The project includes a comprehensive UI component library built with Tailwind CSS and Radix UI primitives:
- Buttons, cards, and form elements
- Dialog modals and select dropdowns
- Custom animations and transitions
- Responsive design patterns

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).