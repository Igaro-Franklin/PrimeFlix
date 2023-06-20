import { useEffect, useState } from "react";
import api from '../../services/api';
import { Link } from 'react-router-dom';
import './home.css';


// URL DA API: https://api.themoviedb.org/3/movie/now_playing?api_key=33ada1e5f82402c41cd9f3c5d94ce1a5&language=pt

function Home(){
    const [filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(()=>{

        async function loadFilmes(){
            const response = await api.get("movie/now_playing", {
                params:{
                api_key: "33ada1e5f82402c41cd9f3c5d94ce1a5",
                language: "pt-BR",
                page: 1,
                }
            })

            //console.log(response.data.results.slice(0, 10));
            setFilmes(response.data.results.slice(0, 10));
            setLoading(false)
        }

        loadFilmes();

    }, [])


    if(loading){
        return(
            <div className="loading">
                <h2>Carregando Filmes...</h2>
            </div>
        )
    }

    return(
        <div className="container">
            <div className="lista-filmes">
                {filmes.map((filmes) =>{
                    return(
                        <article key={filmes.id}>
                            <strong>{filmes.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original/${filmes.poster_path}`} alt={filmes.title}></img>
                            <Link to={`/filme/${filmes.id}`}>Acessar</Link>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}

export default Home;