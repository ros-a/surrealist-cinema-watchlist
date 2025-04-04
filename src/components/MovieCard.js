import React from "react";
import styled, { ThemeProvider } from "styled-components";

const StyledMovieCard = styled.div`
    height: 100%;
    img {
        border-radius: 10px;
        width: 100%;
        &:hover {
            transform: scale(1.05);
            transition: transform .5s ease;
            cursor: pointer;
        }
    }
    .movie-without-image {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        border: 1px solid #FFF;
        color: #FFF;
        text-align: center;
    }
`;

export const MovieCard = ({movie}) => {
    return (
        <StyledMovieCard>
            {movie.poster_path ? (
                <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} 
                alt={`${movie.title} Poster`}/>
            ) : (
                <div className="movie-without-image">
                    <div>{movie.title} ({movie.release_date?.split('-')[0]})</div>
                </div>
            )
            }
        </StyledMovieCard>
    )
}