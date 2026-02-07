// src/api/pages.ts
import { api } from "./http"
import { Page } from "./types"

export async function fetchPage(slug: string): Promise<Page> {
    const res = await api.get<Page>(`/pages/${slug}`)
    return res.data
}
