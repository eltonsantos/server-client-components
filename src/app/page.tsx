import { Suspense } from "react";
import { GithubUser } from "./components/GithubUser";

export default async function Home() {

  return (
    <div>
      <Suspense fallback={<p>Carregando...</p>}>
        <GithubUser username="eltonsantos" />
      </Suspense>
      <Suspense fallback={<p>Carregando...</p>}>
        <GithubUser username="maykbrito" />
      </Suspense>
    </div>
  )
}
