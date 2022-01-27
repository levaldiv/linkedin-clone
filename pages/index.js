import Head from "next/head";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>LinkedIn</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      {/* Only use space when using in one direction, gap for horizontal and vertical */}
      <main className="flex justify-center gap-x-5 px-4 sm:px-12">
        <div className="flex flex-col md:flex-row gap-5">

          {/* Sidebar */}
          <Sidebar />
          {/* Feed */}
        </div>
        {/* Widgets */}
      </main>
    </div>
  );
}
