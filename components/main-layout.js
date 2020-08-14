import Link from "next/link";

export function MainLayout({children}) {
  return (
    <>
      <nav>
        <Link href="/"><a style={{marginLeft: '7px'}}>Home</a></Link>
        <Link href="/about"><a style={{marginLeft: '7px'}}>About</a></Link>
        <Link href="/posts"><a style={{marginLeft: '7px'}}>Posts</a></Link>
      </nav>

      <main>
        {children}
      </main>

      <style jsx>
        {`
          nav {
            display: flex;
            justify-content: space-around;
            align-items: center;
            background-color: crimson;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            height: 60px;
          }
          
          nav a {
            text-decoration: none;
            font-size: 16px;
            color: whitesmoke;
            letter-spacing: 1px;
            position: relative;
            padding: 0 4px;
            transition: .4s;
            text-transform: uppercase;
          }
          
          nav a:hover {
            transform: scale(1.1);
          }
          
          
          main {
            margin-top: 60px;
            padding: 1rem;
          }
        `}
      </style>
    </>
  )
}