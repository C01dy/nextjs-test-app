import Link from "next/link";
import Head from "next/head";
import {MainLayout} from "../components/main-layout";

export default function Index() {
  return (
    <MainLayout>
      <Head>
        <title>Home</title>
      </Head>
      <h1>Hello, Next.JS!</h1>
      <p>
        <Link href="/about">
          <a>about</a>
        </Link>
      </p>
      <p>
        <Link href="/posts">
          <a>posts</a>
        </Link>
      </p>
    </MainLayout>
  )
}
