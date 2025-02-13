import Link from 'next/link';
const navItems = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About',
    href: '/about',
  },
];

export function NavBar() {
  return (
    <nav className="w-full pb-6">
      <div className="flex items-center justify-center gap-28 2xl:text-4xl">
        {navItems.map((item) => (
          <Link
            href={item.href}
            key={item.href}
            className="active:text-mainColor"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
