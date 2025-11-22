export default function Footer() {
  return (
    <footer className="py-8 text-center text-gray-500 text-sm border-t border-gray-200 dark:border-gray-800 bg-surface">
      <p>© {new Date().getFullYear()} Allen Jose. Built with Next.js & Tailwind.</p>
    </footer>
  );
}