import MainpageCon from '../containers/mainpageCon'
import { Routes, Route, Navigate } from "react-router-dom"
// import My404Component from '../containers/404Con'

export default function router() {
    return (
        <Routes>
            {/* <Route path='*' element={<Navigate to="/404" replace />} />
            <Route path="/404" element={<My404Component />} /> */}
            <Route path='/mainpage/home' element={<Navigate to="/" replace />} />
            <Route path="/mainpage/" element={<MainpageCon />} />
        </Routes>
    )
}