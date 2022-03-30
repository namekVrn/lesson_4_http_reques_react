function ResolvedList({pokemon}){
    console.log(pokemon)
    return (
        <div>
            <h1>{pokemon.name}</h1>
            <img src={pokemon.sprites.other['official-artwork'].front_default} width="340"/>
        </div>
    )
}
export default ResolvedList