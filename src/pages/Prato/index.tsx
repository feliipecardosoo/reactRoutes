import { useParams } from 'react-router-dom';
import pratos from '../../data/cardapio.json';

interface Teste {
    id: string,
    [key: string]: string | undefined
}

export default function Prato() {

    const { id } = useParams<Teste>();

    const pratoEncontrado = pratos.find(prato => prato.id.toString() === id);

    if(!pratoEncontrado) {
        return <div>Prato Invalido!</div>;
    }

    return (
        <div>
            <h1>
                {pratoEncontrado?.title}
            </h1>
            <p>
                {pratoEncontrado?.description}</p>
            <p>
                {pratoEncontrado?.price}
            </p>
            <img src={pratoEncontrado?.photo} alt={pratoEncontrado?.title} />
        </div>
    );
}
