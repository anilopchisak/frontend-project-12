import { routes } from "../../routes.jsx"
import { Routes, Route } from 'react-router'

const AppRouter = () => {
    const renderRoutes = (routes) => {
        return routes.map((route, index) => (
            <Route
                key={index}
                path={route.path}
                element={route.element}
            />
        ))
    }

    return (
        <Routes>
            {renderRoutes(routes)}
        </Routes>
    )
}

export default AppRouter