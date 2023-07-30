import { CountButton } from "./CountButton"

export interface GithubUserProps {
  username: string
} 

export async function GithubUser({ username }: GithubUserProps) {

  const response = await fetch(`https://api.github.com/users/${username}`)
  const user = await response.json()

  await new Promise(resolve => setTimeout(resolve, 3000))

  return (
    <>
      <p>{JSON.stringify(user)}</p>
      <CountButton />
    </>
  )
}