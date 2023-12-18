export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  const user = await fetch("https://api.github.com/users/diego3g").then(async response => await response.json());

  return (
    <pre>{JSON.stringify(user, null, 2)}</pre>
  )
}
