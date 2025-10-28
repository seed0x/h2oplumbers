'use client'

export default function Offline() {
  const handleTryAgain = () => {
    if (typeof window !== 'undefined') {
      window.location.reload()
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-secondary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 1 0 0 19.5 9.75 9.75 0 0 0 0-19.5z" />
          </svg>
        </div>
        
        <h1 className="text-2xl font-bold text-gray-900 mb-4">You are Offline</h1>
        
        <p className="text-gray-600 mb-6">
          It looks like you are not connected to the internet. Please check your connection and try again.
        </p>
        
        <div className="space-y-3">
          <button
            onClick={handleTryAgain}
            className="w-full bg-secondary-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-secondary-600 transition-colors"
          >
            Try Again
          </button>
          
          <a
            href="/"
            className="block w-full bg-gray-100 text-gray-900 py-2 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors"
          >
            Go to Homepage
          </a>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Emergency Contact</h2>
          <div className="space-y-2">
            <a
              href="tel:+13608832506"
              className="flex items-center justify-center space-x-2 text-primary-500 font-medium"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>(360) 883-2506</span>
            </a>
            <p className="text-sm text-gray-600">24/7 Emergency Service Available</p>
          </div>
        </div>
      </div>
    </div>
  )
}





