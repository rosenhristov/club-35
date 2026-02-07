// src/pages/HomePage.tsx
import { useEffect, useState } from "react"
import { fetchHomePage } from "../api/home"
import { HomePage as HomePageModel } from "../api/types"

export function HomePage() {
    const [data, setData] = useState<HomePageModel | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchHomePage()
            .then(setData)
            .finally(() => setLoading(false))
    }, [])

    if (loading) {
        return <div className="p-8">Loading...</div>
    }

    if (!data) {
        return <div className="p-8">Error loading page</div>
    }

    return (
        <main className="max-w-5xl mx-auto px-6 py-12">
            <header className="mb-12">
                <h1 className="text-4xl font-bold">{data.title}</h1>
                <p className="text-gray-600 mt-2">{data.subtitle}</p>
            </header>

            <section className="space-y-10">
                {data.sections.map(section => (
                    <div key={section.id}>
                        <h2 className="text-2xl font-semibold mb-2">
                            {section.heading}
                        </h2>
                        <p className="text-gray-700">
                            {section.content}
                        </p>
                    </div>
                ))}
            </section>
        </main>
    )
}
