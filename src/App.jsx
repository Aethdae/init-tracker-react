import { useState } from "react";
import InitCard from "./components/InitCard";

export default function App() {
  const [initCards, setInitCards] = useState([]);
  function addInit() {
    setInitCards((prev) => [...prev]);
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
      <hr />
      <section className="flex flex-col mx-auto gap-4" id="initiativeHolder">
        {initCards.map((card) => (
          <InitCard key={card.id} item={card} />
        ))}
      </section>
      <button
        className="border-2 border-black rounded-2xl px-8 py-2 bg-green-400 font-bold self-center"
        id="addItemButton"
        onClick={() => addInit}
      >
        Add
      </button>
    </main>
  );
}
