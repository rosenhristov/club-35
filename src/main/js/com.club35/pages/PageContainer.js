// src/pages/PageContainer.tsx
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchPage } from "../api/pages"
import { Page } from "../api/types"

export function PageContainer() {
    const { slug = "home" } = useParams()
    const [page, setPage] = useState<Page | null>(null)

    useEffect(() => {
        fetchPage(slug).then(setPage)
    }, [slug])

    if (!page) {
        return <div className="p-8">Loading...</div>
    }

    return (
        <main className="max-w-5xl mx-auto px-6 py-12">
            <header className="mb-12">
                <h1 className="text-4xl font-bold">{page.title}</h1>
                {page.subtitle && (
                    <p className="text-gray-600 mt-2">{page.subtitle}</p>
                )}
            </header>

            <section className="space-y-12">
                {page.sections.map(section => (
                    <SectionRenderer key={section.id} section={section} />
                ))}
            </section>
        </main>
    )
}
