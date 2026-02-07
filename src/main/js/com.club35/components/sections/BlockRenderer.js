function BlockRenderer({ block }: { block: Block }) {
    switch (block.type) {
        case "html":
            return (
                <div
                    className="prose max-w-none"
                    dangerouslySetInnerHTML={{ __html: block.content }}
                />
            )

        case "image":
            return <img src={block.content} alt="" />

        case "text":
            return <p>{block.content}</p>

        default:
            return null
    }
}
