import FeatureBooks from "@/components/FeatureBooks";
import Banner from "@/components/homepage/Banner";
import { Button } from "@heroui/react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function Home() {
  return (
     <div>
      <div className="flex my-12 font-semibold">
         <Button className='py-2 px-4 text-black bg-white'>📚 New Arrivals:</Button> 
         <Marquee pauseOnHover={true} speed={50} gradient={false}>
         Atomic Habits | The Alchemist | Deep Work |
      🎉 Special Discount on Memberships | 🚚 Free Delivery
        </Marquee>
      </div>
        
      <Banner/>
      <FeatureBooks/>

      
      {/* <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        /> */}
     </div>
  );
}
