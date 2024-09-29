// app/layout.tsx (Server Component)
import './globals.css';
import ClientLayout from '@/components/ClientLayout';  // Import the client-side layout

export const metadata = {
  title: 'Admin Dashboard',
  description: 'Responsive Admin Dashboard with Next.js 14 and Tailwind CSS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>{children}</ClientLayout> {/* Wrap children in ClientLayout */}
      </body>
    </html>
  );
}
