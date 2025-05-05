'use client';
export default function PageContainer({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-1 items-center justify-center h-full ml-0 md:ml-72 min-h-screen">{children}</div>;
}