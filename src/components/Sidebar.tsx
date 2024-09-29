// components/Sidebar.tsx
import Link from 'next/link';

const Sidebar = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div
      className={`fixed lg:static top-0 left-0 h-[100vh] bg-sky-800 text-white transition-transform duration-300 ease-in-out z-50 w-64 lg:w-60 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0`}
    >
      <div className="text-2xl font-bold p-4">Admin</div>
      <nav className="p-4">
        <ul>
          <li className="py-2">
            <Link href="/" className="hover:bg-gray-700 block px-2 py-1 rounded">
              Dashboard
            </Link>
          </li>
          <li className="py-2">
            <Link href="/users" className="hover:bg-gray-700 block px-2 py-1 rounded">
              Users
            </Link>
          </li>
          <li className="py-2">
            <Link href="/settings" className="hover:bg-gray-700 block px-2 py-1 rounded">
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
