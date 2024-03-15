import PaginaPadrao from 'components/PaginaPadrao';
import Menu from 'components/menu';
import Footer from 'components/footer';
import Cardapio from 'pages/Cardapio';
import Inicio from 'pages/Inicio';
import Sobre from 'pages/Sobre';
import NotFound from 'pages/NotFound';
import Prato from 'pages/Prato';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function AppRouter() {
    return (
        <main className='container'>
            <Router>
                <Menu/>
                <Routes>
                    <Route path='/' element={<PaginaPadrao/>}>
                        <Route index element={<Inicio />} />
                        <Route path='cardapio' element={<Cardapio />} />
                        <Route path='sobre' element={<Sobre />} />
                    </Route>
                    <Route path='*' element={<NotFound />} />
                    <Route path='/prato/:id' element={<Prato />} />
                </Routes>
                <Footer />
            </Router>
        </main>
    );
}