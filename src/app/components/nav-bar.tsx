import Link from 'next/link';
import React from 'react';

export default function NavBar() {
  return (
    <div className="flex gap-2 items-center p-2 border-b">
      <Link
        className="p-2 text-sm bg-gray-200 rounded-md cursor-pointer hover:bg-gray-300 active:bg-gray-300/90  transition-all"
        href={'/?tenant=a'}
      >
        Tenant A (East)
      </Link>
      <Link
        className="p-2 text-sm bg-gray-200 rounded-md cursor-pointer hover:bg-gray-300 active:bg-gray-300/90  transition-all"
        href={'/?tenant=b'}
      >
        Tenant B (Central)
      </Link>
      <Link
        className="p-2 text-sm bg-gray-200 rounded-md cursor-pointer hover:bg-gray-300 active:bg-gray-300/90  transition-all"
        href={'/?tenant=c'}
      >
        Tenant C (West)
      </Link>
      <Link
        className="p-2 text-sm bg-gray-200 rounded-md cursor-pointer hover:bg-gray-300 active:bg-gray-300/90  transition-all"
        href={'/'}
      >
        None
      </Link>
    </div>
  );
}
