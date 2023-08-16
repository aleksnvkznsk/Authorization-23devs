import { Routes, Route } from 'react-router-dom'
import { PATHS } from './paths'
import Register from '../pages/register'
import Login from '../pages/login'
import Posts from '../pages/posts'
import AuthGuard from '../components/authguard/AuthGuard'

const Router = () => {

    return (
        <Routes>
            <Route path={PATHS.REGISTR} element={<Register />} />
            <Route path={PATHS.LOGIN} element={<Login />} />
            <Route path={PATHS.POSTS} element={
                <AuthGuard>
                    <Posts />
                </AuthGuard>
            }
            />
        </Routes>
    )
}

export default Router