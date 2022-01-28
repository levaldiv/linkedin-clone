import { getSession } from "next-auth/react";
import Head from "next/head";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div className="bg-[#F3F2EF] dark:bg-black dark:text-white h-screen overflow-y-scroll md:space-y-6">
      <Head>
        <title>Feed | LinkedIn</title>
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

export async function getServerSideProps(context) {
  //checks if the user is auth on the server
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: "/home",
      },
    };
  }

  // otherwise
  return {
    props: {
      session,
    },
  };
}
