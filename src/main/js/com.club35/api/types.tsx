export interface Section {
    id: string
    type: string
    heading: string
    content: string
}

export interface Page {
    slug: string
    title: string
    subtitle?: string | null
    sections: Section[]
}

export interface HomePage {
    title: string
    subtitle: string
    sections: Section[]
}

export interface NavItem {
    id: string
    label: string
    path: string
    order: number
}

export interface Navigation {
    items: NavItem[]
}

