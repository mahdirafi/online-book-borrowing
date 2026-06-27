import { Button } from "@heroui/react";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="bg-[url('https://images.unsplash.com/photo-1614068630200-44bc6a9a898e?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] h-[60vh] w-full bg-cover bg-no-repeat bg-center flex items-center rounded-lg shadow-2xl">
      {/* Overlay */}
      <div className="w-full h-full rounded-lg bg-black/70 flex items-center ">
        <div className="max-w-7xl mx-auto px-6 text-white">
          <h1 className="text-4xl md:text-7xl font-bold mb-4 max-w-2xl">
            Find Your Next Read
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-xl text-gray-200">
            
            Explore thousands of books, discover authors, and enjoy reading every day.

          </p>

          <div className="flex gap-4">
            <Link href="#">
              <Button className="bg-linear-to-r from-pink-500 via-purple-500 bg-red-500">
               Browse Now
              </Button>
            </Link>

            <Link href="/pricing">
              <Button variant="outline" className="text-white">
                Join Free
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;