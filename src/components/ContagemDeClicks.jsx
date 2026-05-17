import { useState } from "react";

export default function Contar() {
    const [num, setNum] = useState(0);

    function somarMaisUm() {
        setNum(num + 1);
    }

    return (
        <button onClick={somarMaisUm}>
            Cliques: {num}
        </button>
    )
}