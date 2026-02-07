import { Section } from "../../api/types"

export function SectionRenderer({ section }: { section: Section }) {
    switch (section.type) {
        case "hero":
            return (
                <div className="bg-gray-100 p-8 rounded-lg">
                <h2 className="text-3xl font-semibold">{section.heading}</h2>
                    <p className="mt-4 text-lg">{section.content}</p>
            </div>
        )

        case "text":
        default:
            return (
                <div>
                    <h2 className="text-2xl font-semibold mb-2">
                    {section.heading}
                    </h2>
                    <p className="text-gray-700">{section.content}</p>
            </div>
        )
    }
}
