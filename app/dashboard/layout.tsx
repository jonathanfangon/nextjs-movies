import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <h1>hello from dashboard layout</h1>
      {children}
    </div>
  );
}
