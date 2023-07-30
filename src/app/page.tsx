import { Suspense } from "react";
import { GithubUser } from "./components/GithubUser";
import { DialogProvider } from "./contexts/DialogContext";

export default async function Home() {

  return (
    <DialogProvider>
      <Suspense fallback={<p>Carregando...</p>}>
        <GithubUser username="eltonsantos" />
      </Suspense>
      <Suspense fallback={<p>Carregando...</p>}>
        <GithubUser username="maykbrito" />
      </Suspense>
    </DialogProvider>
  )
}
