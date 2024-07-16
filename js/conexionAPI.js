async function listarCards(){
    const conexion = await fetch("http://localhost:3001/card");

    const conexionCombertida = conexion.json();

    return conexionCombertida
}

export const conexionAPI = {
    listarCards
}