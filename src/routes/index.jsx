import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registrasi from "../pages/Registrasi"
import Login from "../component/Login/Login"
import SuntingProfil from "../pages/SuntingProfil";
import KomentarPenggguna from "../pages/KomentarPengguna"
import KomentarPengggunaLain from "../pages/KomentarPenggunaLain"

const App =() => {
return(
<BrowserRouter>
<Routes>
    <Route path="/" element={<Login />} />
    <Route path="registrasi" element={<Registrasi />} />
    <Route path="sunting" element={<SuntingProfil />} />
    <Route path="komentar/id" element={<KomentarPenggguna />} />
    <Route path="komentar/other" element={<KomentarPengggunaLain />} />
</Routes>
</BrowserRouter>
)
}
export default App;