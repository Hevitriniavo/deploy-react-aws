import { useEffect, useState } from 'react';
import AuthPage from './pages/AuthPage';
import { FaSun, FaMoon } from 'react-icons/fa';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div >
      <button
        className="absolute top-4 right-4 bg-gray-00 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? (
          <FaSun className="h-6 w-6" aria-hidden="true" />
        ) : (
          <FaMoon className="h-6 w-6" aria-hidden="true" />
        )}
      </button>
      <AuthPage />
    </div>
  );
};

export default App;
