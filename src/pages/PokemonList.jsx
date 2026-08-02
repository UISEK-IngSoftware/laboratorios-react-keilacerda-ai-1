import { useState, useEffect} from "react";
import { getPokemonList } from "../services/pokemonService";
import { Grid, Typography } from "@mui/material";
import PokemonCard from "../components/PokemonCard";
import Spinner from "../components/Spinner";
import "./PokemonList.css";

export default function PokemonList() {
    const [pokemons, setPokemons] = useState([]);
    const [errorMsg, setErrorMsg] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect( () => {
        setLoading(true);
        getPokemonList().then((pokemonsData) => {
            setPokemons(pokemonsData);
        }).catch((error) => {
            setErrorMsg("Error obteniendo la lista de Pokémons.");
            alert("Error obteniendo la lista de Pokémons:", error);
        }).finally(() => {
            setLoading(false);
        });
    }, []);

    if (loading) {
        return <Spinner />;
    }

    return (
        <Grid container spacing={2}>
            { pokemons.map((pokemon) => (
                <Grid item key={pokemon.id} size={{ xs: 12, sm: 6, md: 4 }}>
                    <PokemonCard pokemon={pokemon} />
                </Grid>
            ))}
            { errorMsg !== "" && (
                <Grid item xs={12}>
                    <Typography color="error">
                        {errorMsg}
                        </Typography>
                </Grid>
                )}
        </Grid>
    );
}