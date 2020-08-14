import Link from "next/link";
import s from '../styles/error.module.sass';

export default function ErrorPage() {
  return (
    <>
      <div className={s.errorWrap}>
        <h1 className={s.error}>Error 404</h1>
        <p>Please, <Link href="/"><a>go back to safety</a></Link></p>
      </div>
    </>
  )
}