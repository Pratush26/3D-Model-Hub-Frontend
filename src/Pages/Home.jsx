import { useLoaderData } from "react-router"

export default function HomePage() {
    const {data} = useLoaderData()
    console.log(data)
    return (
        <main>
            HomePage
        </main>
    )
}