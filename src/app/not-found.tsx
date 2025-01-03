
import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 dark:text-gray-200">404</h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">Oops! The page you are looking for does not exist.</p>
        <Link href="/" className="mt-6 inline-block px-6 py-3 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
          
            Go Back Home
          
        </Link>
      </div>
    </div>
  )
}