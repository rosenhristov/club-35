import { api } from "./http"
import { Navigation } from "./types"

export async function fetchNavigation(): Promise<Navigation> {
    const res = await api.get<Navigation>("/navigation")
    return res.data
}
