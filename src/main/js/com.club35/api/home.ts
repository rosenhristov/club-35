// src/api/home.ts
import { api } from "./http"
import { HomePage } from "./types"

export async function fetchHomePage(): Promise<HomePage> {
    const res = await api.get<HomePage>("/pages/home")
    return res.data
}
