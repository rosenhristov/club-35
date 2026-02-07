// src/app/router.tsx
import { createBrowserRouter } from "react-router-dom"
import { App } from "./App"
import { PageContainer } from "../pages/PageContainer"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { index: true, element: <PageContainer /> },
            { path: ":slug", element: <PageContainer /> }
        ]
    }
])
