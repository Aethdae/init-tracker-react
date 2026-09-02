import { useEffect, useState, useRef } from "react";
import InitCard from "./components/InitCard";
let id = 0;

export default function App() {
  const [initCards, setInitCards] = useState(() => {
    const saveData = localStorage.getItem("save");
    if (saveData) {
      const arr = JSON.parse(saveData).map((item) => createCardFromData(item));
      return arr;
    }
    return [];
  });
  const cardsRef = useRef(initCards);
  cardsRef.current = initCards;

  useEffect(() => {
    setTimeout(() => {
      autosave();
    }, 10000);
  }, []);

  function autosave() {
    localStorage.setItem("save", JSON.stringify(cardsRef.current));
    setTimeout(() => {
      autosave();
    }, 10000);
  }

  function getNextId() {
    id++;
    return id;
  }
  function createBlankCard() {
    return {
      id: getNextId(),
      initiative: 0,
      name: "",
      hp: 0,
      notes: "",
      effects: "",
    };
  }

  function updateCard(newCard) {
    const changed = initCards.map((card) =>
      card.id === newCard.id ? newCard : card,
    );
    setInitCards((prev) => changed);
  }

  function createCardFromData(data) {
    return {
      id: getNextId(),
      initiative: data.initiative,
      name: data.name,
      hp: data.hp,
      notes: data.notes,
      effects: data.effects,
    };
  }

  function removeCard(id) {
    const filter = initCards.filter((card) => card.id === id);
    setInitCards((prev) => [...prev.splice(prev.indexOf(filter), 1)]);
  }
  function addInit() {
    setInitCards((prev) => [...prev, createBlankCard()]);
  }
  return (
    <main className="max-w-300 mx-auto flex flex-col gap-4">
      <header className="text-center text-4xl font-bold">
        Initiative Tracker
      </header>
      <div className="flex justify-around font-bold text-2xl">
        <h2>Initiative</h2>
        <h2>Name</h2>
        <h2>HP</h2>
        <h2>Notes</h2>
        <h2>Effects</h2>
        <h2>-</h2>
      </div>
      <hr className="" />
      <section className="flex flex-col mx-2 gap-4" id="initiativeHolder">
        {initCards
          .sort((a, b) => Number(b.initiative) - Number(a.initiative))
          .map((card) => {
            return (
              <InitCard
                key={card.id}
                item={card}
                removeItem={removeCard}
                updateCard={updateCard}
              />
            );
          })}
      </section>
      <button
        className="border-2 border-white text-black rounded-2xl px-8 py-2 bg-green-400 font-bold self-center"
        id="addItemButton"
        onClick={addInit}
      >
        Add
      </button>
    </main>
  );
}
