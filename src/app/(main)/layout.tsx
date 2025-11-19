import React from 'react';

export default function MainAppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // In a future step, this will include the bottom navigation bar.
  return <>{children}</>;
}
