import { AnimatePresence } from "framer-motion";
import { getSession, useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { modalState, modalTypeState } from "../atoms/modalAtom";
import Feed from "../components/Feed";
import Header from "../components/Header";
import Modal from "../components/Modal";
import Sidebar from "../components/Sidebar";
import { connectToDatabase } from "../util/mongodb";

export default function Home() {
  // renaming data to session
  // this React hook checks to see if someone is signed in
  // const { data: session } = useSession();
  // console.log(session);

  // this opens the modal
  const [modalOpen, setModalOpen] = useRecoilState(modalState);
  const [modalType, setModalType] = useRecoilState(modalTypeState);

  /* This only happens when the user is not authenticated on the client side */
  const router = useRouter();
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      // If the user is unauth, handle it here
      router.push("/home");
    },
  });

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
          <Feed />
        </div>
        {/* Widgets */}

        <AnimatePresence>
          {/* Only want to show modal if modalOpen state is true
           * handleClose sets the modalOpen to falsse
           * This here changes dynamically bc I am using modalOpen once but the type is only going to change
           * based on the users click */}
          {modalOpen && (
            <Modal handleClose={() => setModalOpen(false)} type={modalType} />
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  //checks if the user is auth on the server
  /* This only happens when user is not auth'd on the server side */
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: "/home",
      },
    };
  }

  // Get posts on ssr
  // get back our db instancec
  const { db } = await connectToDatabase();
  // retreiving all the posts
  const posts = await db
    // getting into posts
    .collection("posts")
    .find()
    // get latest post first
    .sort({ timestamp: -1 })
    .toArray();

  // Get Google News API to fetch

  // otherwise
  return {
    props: {
      session,
      // mapping through post and for every post, return a new object for every post
      posts: posts.map((post) => ({
        // all the info i want to retreive back from the posts
        _id: post._id.toString(),
        input: post.input,
        photoUrl: post.photoUrl,
        username: post.username,
        email: post.email,
        userImg: post.userImg,
        createdAt: post.createdAt,
      })),
    },
  };
}
