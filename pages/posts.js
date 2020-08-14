import {useState, useEffect} from 'react';
import Head from "next/head";
import {MainLayout} from "../components/main-layout";
import s from '../styles/posts.module.sass';
import Link from "next/link";

export default function Posts() {

  const [posts, setPosts] = useState(null);
  useEffect(() => {
    async function load() {
      const res = await fetch('http://localhost:4200/posts');
      const data = await res.json();

      setPosts(data)
    }

    load()

  }, [])

  if (!posts) {
    return (
      <MainLayout>
        <p>Loading...</p>
      </MainLayout>
    )
  }

  return (
    <MainLayout>
      <Head>
        <title>Posts page</title>
      </Head>
      <h1 style={{color: "pink"}}>Posts Page</h1>
      <ul className={s.posts}>
        {posts.map(({title, body, id}) => {
          return (
            <li className={s.post} key={title + id}>
              <Link href={`/post/[id]`} as={`/post/${id}`}>
                <a><h4>{title}</h4></a>
              </Link>
            </li>
          )
        })}
      </ul>
    </MainLayout>
  )
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:4200/posts');
  const posts = await res.json();

  return {props: {posts}}
}