import "./App.css";
import React, { useEffect, useState } from "react";
import Card from "./components/card";
import CardRoom from "./components/cardRoom";

function App() {
  const housesURL =
    "https://gist.githubusercontent.com/josejbocanegra/0067d2b28b009140fee423cfc84e40e6/raw/6e6b11160fbcacb56621b6422684d615dc3a0d33/spaces.json ";

  const roomsURL =
    "https://gist.githubusercontent.com/josejbocanegra/92c90d5f2171739bd4a76d639f1271ea/raw/9effd124c825f7c2a7087d4a50fa4a91c5d34558/rooms.json ";

  const [cards, setCards] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [roomsHTML, setRoomsHTML] = useState([]);

  useEffect(() => {
    fetch(housesURL)
      .then((res) => res.json())
      .then((data) => {
        const cardsArray = [];
        data.forEach((house) => {
          cardsArray.push(house);
        });

        setCards(cardsArray);
      });
  }, []);

  const getRooms = (id) => {
    fetch(roomsURL)
      .then((res) => res.json())
      .then((data) => {
        const roomsArray = [];
        data.forEach((room) => {
          if (room.homeId === id) roomsArray.push(room);
        });

        setRooms(roomsArray);
      });
  };

  console.log(rooms);
  return (
    <React.Fragment>
      <h1>My Spaces</h1>
      <div className="row">
        {cards.map((card, key) => {
          return (
            <Card
              name={card.name}
              address={card.address}
              key={card.id}
              getRooms={getRooms}
              id={card.id}
            />
          );
        })}
      </div>
      <div className="row"></div>
    </React.Fragment>
  );
}

export default App;
