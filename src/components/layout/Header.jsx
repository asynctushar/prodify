import React from 'react';
import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { logout } from '@/redux/slices/authSlice';

const Header = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link
              href="/products"
              className="flex items-center space-x-2 focus:outline-none rounded-md px-2 py-1 -ml-2"
            >
              <div className="flex items-center">
                <span className="text-2xl sm:text-3xl font-bold text-primary tracking-tight">
                  Prodify
                </span>
              </div>
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="destructive"
              size="default"
              className="gap-2 cursor-pointer"
              onClick={handleLogout}
            >
              <LogOut className="w-4 h-4" />
              <span className="">Logout</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;