import { useState } from "react";
import AddGamers from './AddGamers';
import GameRoom from './GameRoom';

const Game = () => {
    const [playerName, setPlayerName] = useState("");
    const [players, setPlayers] = useState([]);


    // const newPlayer = ({ target }) => {
    //     setPlayerName(target.value);
    // }
    // is the same as

    const newPlayer = e => {
        setPlayerName(e.target.value);
    }

    const submitForm = (event) => {
        // prevent form submission on initial click
        event.preventDefault();
    }

    const handleAdd = () => {
        // the ... operator spreads the array, then playerName is added onto the end
        const newPlayers = [...players, playerName];
        setPlayers(newPlayers);
  

    }

    return (
        <>
            <AddGamers newPlayer={newPlayer} submitHandler={submitForm} handleAdd={handleAdd} />
            <GameRoom players={players} />
        </>
    )
}

export default Game;