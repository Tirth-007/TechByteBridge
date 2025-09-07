// components/BackToTop.js
export default function BackToTop() {
  return (
    <a
      href="#"
      title="Back to top"
      className="fixed right-4 bottom-4 bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105 z-50 flex items-center justify-center w-12 h-12"
      onClick={(e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }}
      aria-label="Back to top"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <path d="m18 15-6-6-6 6"/>
      </svg>
    </a>
  )
}