"use client";

import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-white">
      <div className="text-center">
        <h1 className="text-[10rem] md:text-[14rem] font-bold leading-none text-gray-200">
          404
        </h1>
        <div className="-mt-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Page Not Found
          </h2>
          <p className="text-base max-w-md mx-auto mb-8 text-gray-500">
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild variant="primary">
              <Link href="/">
                <Home className="w-4 h-4" />
                Back to Home
              </Link>
            </Button>
            <Button variant="secondary" onClick={() => window.history.back()}>
              <ArrowLeft className="w-4 h-4" />
              Go Back
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
