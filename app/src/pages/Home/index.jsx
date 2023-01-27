import { useParams } from 'react-router-dom'

import '../../styles/global.css'

export function Home() {
    const {userName} = useParams();

    return (
        <h1>Parabens... hora de stalkear {userName}</h1>
    );
}