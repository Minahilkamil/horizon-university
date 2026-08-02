'use client';

import Link from 'next/link';
import { Home, RefreshCw } from 'lucide-react';
import { Card } from "@/components/ui/Card";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="max-w-2xl w-full text-center">
        <Card className="bg-white rounded-3xl p-12 border border-gray-200 shadow-xl">
          <div className="w-20 h-20 rounded-full mx-auto mb-8 flex items-center justify-center bg-red-100 text-red-600">
            <span className="text-4xl font-bold">500</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Oops! Something went wrong
          </h1>
          <p className="text-base mb-10 text-gray-600">
            We're sorry, but there was an error processing your request. Please try again later or go back to the homepage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={reset}
              className="px-8 py-4 rounded-xl text-sm font-semibold inline-flex items-center gap-2 text-white bg-blue-600"
            >
              <RefreshCw className="w-4 h-4" />
              Try Again
            </button>
            <Link
              href="/"
              className="px-8 py-4 rounded-xl text-sm font-semibold inline-flex items-center gap-2 text-gray-700 bg-gray-100 border border-gray-200"
            >
              <Home className="w-4 h-4" />
              Go to Homepage
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}
