'use client'; // Required because we use usePathname and useEffect

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";

export default function NotFound() {
  const pathname = usePathname();

  useEffect(() => {
    // In Next.js, usePathname() gives you the current URL path
    console.error("404 Error: User attempted to access non-existent route:", pathname);
  }, [pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-extrabold text-slate-900">404</h1>
        <p className="mb-4 text-xl text-slate-600 font-medium">Oops! Page not found</p>
        <p className="mb-8 text-slate-500">
          The page <code className="bg-slate-200 px-1 rounded">{pathname}</code> does not exist.
        </p>
        <Link 
          href="/" 
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-all inline-block"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}