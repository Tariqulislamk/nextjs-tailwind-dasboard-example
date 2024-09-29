// components/Navbar.tsx
const Navbar = ({ onToggle }: { onToggle: () => void }) => {
    return (
      <div className="w-full h-16 bg-white shadow-md flex items-center justify-between px-4 lg:pl-0">
        <div className="text-lg font-semibold">Dashboard</div>
        <button
          className="lg:hidden p-2"
          onClick={onToggle}
          aria-label="Toggle Sidebar"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
        <div className="hidden lg:flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search..."
            className="border p-2 rounded"
          />
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    );
  };
  
  export default Navbar;
  