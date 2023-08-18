import Navbar from "@/Components/ui/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="w-fit md:w-full">
      <Navbar />
      <Toaster />
      <Component {...pageProps} />
    </div>
  );
}
