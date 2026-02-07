
import { useEffect, useState } from "react"
import { fetchNavigation } from "../api/navigation"
import { Navigation } from "../components/layout/Navigation"
import { NavItem } from "../api/types"
import { Outlet } from "react-router-dom"

export function App() {
    const [navItems, setNavItems] = useState<NavItem[]>([])

    useEffect(() => {
        fetchNavigation().then(data => setNavItems(data.items))
    }, [])

    return (
        <>
            <Navigation items={navItems} />
            <Outlet />
        </>
    )
}
