function ResolvedList({pokemon}){
    console.log(pokemon)
    const linkImg = pokemon.sprites.other['official-artwork'].front_default;
    return (
        <div>
            <h1>{pokemon.name}</h1>
            <img src={linkImg} width="340" alt="pokemonImg"/>
        </div>
    )
}
export default ResolvedList