import Head from "next/head";
import Navbar from "~/components/navbar";
import { type Translation } from "translations/translations";
import mgl from "translations/mgl";

export default function Home() {
  const translation: Translation = mgl;
  return (
    <>
      <Head>
        <title>UFE Lost n Found</title>
      </Head>
      <main className="bg-white h-screen">
        <div className="sticky z-10 w-full">
          <Navbar />
        </div>
        <div className="w-screen h-[40vh]  flex items-center justify-center" style={{ backgroundImage: `url('/bg.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center',}}>
          <div className="">
             <p className="text-white text-uppercase font-bold text-4xl">{translation.mainText}</p>
             <input type="text" />
          </div>
         
        </div>
      </main>
    </>
  );
}
