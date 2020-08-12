export default function myApp({Component, pageProps}) {
  return (
    <>
      <Component {...pageProps}/>
      <style jsx global>{`
          body {
            font-family: 'Raleway', sans-serif;
          }
        `}
      </style>
    </>
  )
}