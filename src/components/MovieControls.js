import React, { useState, useEffect, useContext } from "react";
import styled, { ThemeProvider } from "styled-components"; 
import { GlobalContext } from "../context/GlobalState";
import { useLocation } from "react-router-dom";


const StyledMovieControls = styled.div` 


`;

export const MovieControls = ({ movie, closeModal }) => {
    const {addToWatched, watched} = useContext(GlobalContext);
    const {removeFromWatched, removeFromWatchlist} = useContext(GlobalContext);
    const {addToWatchlist, watchlist} = useContext(GlobalContext);
    let storedInWatchlist = watchlist.find(o => o.id === movie.id);
    let storedInWatched = watched.find(o => o.id === movie.id);
    let location = useLocation();

    const handleRemoveFromWatched = id => {
        removeFromWatched(id);
        closeModal();
    }

    const handleRemoveFromWatchlist = id => {
        removeFromWatchlist(id);
        closeModal();
    }

    const handleAddToWatched = movie => {
        addToWatched(movie);
        removeFromWatchlist(movie.id);
        closeModal();
    }

    return (
        <StyledMovieControls>
                <div className="btn-container">
                    {location.pathname === '/' && (
                        <>
                            <button className="add-btn" onClick={() => addToWatchlist(movie)} disabled={storedInWatched || storedInWatchlist}>Add to watchlist</button>
                            <button className="add-btn" onClick={() => addToWatched(movie)} disabled={storedInWatched || storedInWatchlist}>Mark as watched</button>
                        </>
                    )}
                    {location.pathname === '/watched' && (
                        <>
                            <button className="add-btn" onClick={() => handleRemoveFromWatched(movie.id)}>Remove from watched</button>
                        </>                    
                    )}
                    {location.pathname === '/watchlist' && (
                        <>
                            <button className="add-btn" onClick={() => handleRemoveFromWatchlist(movie.id)}>Remove from watchlist</button>
                            <button className="add-btn" onClick={() => handleAddToWatched(movie)}>Mark as watched</button>
                        </>
                    )}
                </div>
        </StyledMovieControls>
    )
}