export function DocumentPage() {
    const { slug = "index" } = useParams()
    const [doc, setDoc] = useState<Document | null>(null)

    useEffect(() => {
        fetchDocument(slug).then(setDoc)
    }, [slug])

    if (!doc) return <div>Loading…</div>

    return (
        <main className="max-w-5xl mx-auto px-6 py-8">
            {doc.blocks.map(block => (
                    <BlockRenderer key={block.id} block={block} />
))}
    </main>
)
}
