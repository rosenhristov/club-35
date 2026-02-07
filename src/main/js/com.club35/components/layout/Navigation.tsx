import { NavLink } from "react-router-dom"
import { NavItem } from "../../api/types"

interface Props {
    items: NavItem[]
}

export function Navigation({ items }: Props) {
    return (
        <nav className="border-b">
            <ul className="max-w-5xl mx-auto flex gap-6 px-6 py-4">
                {items
                    .sort((a, b) => a.order - b.order)
                    .map(item => (
                        <li key={item.id}>
                            <NavLink
                                to={item.path}
                                className={({ isActive }) =>
                                    isActive
                                        ? "font-semibold text-black"
                                        : "text-gray-600 hover:text-black"
                                }
                            >
                                {item.label}
                            </NavLink>
                        </li>
                    ))}
            </ul>
        </nav>
    )
}
