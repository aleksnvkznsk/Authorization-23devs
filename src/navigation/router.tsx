import { Routes, Route } from 'react-router-dom'
import { PATHS } from './paths'
import Register from '../pages/register'
import Login from '../pages/login'
import Posts from '../pages/posts'

const Router = () => {

    return (
        <Routes>
            <Route path={PATHS.REGISTR} element={<Register />} />
            <Route path={PATHS.LOGIN} element={<Login />} />
            <Route path={PATHS.POSTS} element={<Posts />} />
        </Routes>
    )
}

export default Router