import Topbar from "@/components/feature-nav/topbar";
import Footer from "@/components/feature-nav/footer";

import "./Page.css";
// import { useState } from "react";

interface PageProps {
  children: JSX.Element;
}

export default function Page({ children }: PageProps) {
  // const [signedIn, setSignedIn] = useState(false);

  return (
    <div className="flex background text-white min-w-0 h-screen">
      <div className="flex flex-col w-screen min-h-screen">
        <Topbar />
        <div className="flex flex-col h-full overflow-auto scrollbar-hide justify-between items-center ">
          <div className="flex flex-1 min-h-fit h-fit w-full pt-8 pb-16 px-2 sm:px-4 max-w-4xl">
            {children}
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
