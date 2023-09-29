import Header from "@/components/main/Header";
import Image from "next/image";
import Link from "next/link";

import pic_404 from "../../public/404man.svg"
import { prata } from "./layout";

export const dynamic = "force-static";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col">
      <Header font={prata.className}/>
      <div className={`grid place-items-center h-screen flex-1`}>
        <div className="mt-[-100px]">
          <Image
            src={pic_404}
            className="w-[600px] h-[400px]"
            priority
            alt="404_pic"
          />
          <div className="text-center sm:mt-[-35px]">
            <p className="mb-[15px]">We can&apos;t find this page</p>
            <Link href="/" className="blackBtn block w-fit mx-auto">
              Return Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
