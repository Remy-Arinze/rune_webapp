import React from 'react';

export function ContentCreatorCard() {
  return (
    <div className="bg-[var(--dark)] text-white rounded-xl p-6 shadow-sm mx-auto">
      {/* Header Section */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
          <span className="text-xs font-bold">MP</span>
        </div>
        <div>
          <h2 className="font-bold text-white">Marlene UI/UX Pro</h2>
          <p className="text-xs text-gray-500">Content Creator</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="mb-4">
        <h3 className="font-semibold text-white mb-2">What does your private space look like?</h3>
        <p className="text-white text-sm leading-relaxed">
          Do you like to meet a clean and organized house when you return from work, or will you rather work after work? Short men jump, but not as high as you; Dont think they do not.
          <br /><br />
          You think you know all, try ignorance. It kills faster than the knowledge of death itself. Just joking! Im a King, so dont be scared, Ill make things come to...
        </p>
      </div>

      {/* Divider */}
      <div className="border-t border-[#E3F77A]/30 my-3"></div>

      {/* Action Buttons */}
      <div className="flex gap-4 text-xs">
        <button className="flex items-center gap-1 text-gray-600 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
          upvote
        </button>
        <button className="flex items-center gap-1 text-gray-600 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
          go
        </button>
        <button className="flex items-center gap-1 text-gray-600 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          23 comments
        </button>
      </div>
    </div>
  );
}