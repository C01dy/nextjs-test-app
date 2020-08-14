import {useState, useEffect} from 'react';
import {useRouter} from "next/router";
import Link from "next/link";
import {MainLayout} from "../../components/main-layout";

export default function Post() {
  const router = useRouter();
  const [post, setPost] = useState(null)

  useEffect(() => {
    async function load() {
      const res = await fetch(`http://localhost:4200/posts/${router.query.id}`)
      const data = await res.json()
      setPost(data)
    }

    load()
  }, [])

  if (!post) {
    return (
      <MainLayout>
        <p>Loading...</p>
      </MainLayout>
    )
  }

  return (
    <>
      <MainLayout>
        <h1><span style={{color: "coral"}}>{post.title}</span></h1>
        <hr/>
        <p>{post.body}</p>
        <Link href={`/posts`}><a>Go to posts</a></Link>
      </MainLayout>
    </>
  )
}

export async function getServerSideProps({query}) {
  const res = await fetch(`http://localhost:4200/posts/${query.id}`);
  const post = await res.json();

  return {props: {post}}
}