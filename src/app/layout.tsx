// app/layout.tsx
"use client";
import Navbar from '../components/Navbar';
import './globals.css';
import '@/app/product.css'

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default Layout;
