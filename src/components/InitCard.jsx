import React, { useState } from "react";

export default function InitCard({ item, removeItem, updateCard }) {
  const [card, setCard] = useState(item);
  // const [init, setInit] = useState(0);
  // const [name, setName] = useState("");
  // const [hp, setHp] = useState(0);
  // const [notes, setNotes] = useState("");
  // const [effects, setEffects] = useState("");

  function updateValue(event) {
    const { name, value } = event.target;
    setCard({ ...card, [name]: value });
    updateCard({ ...card, [name]: value });
  }

  return (
    <div className="flex mx-4 gap-4">
      <input
        className="border border-white rounded-md px-2 py-1"
        type="text"
        name="initiative"
        id="initiative"
        value={card.initiative}
        onChange={(e) => {
          updateValue(e);
        }}
      />
      <input
        className="border border-white rounded-md px-2 py-1"
        type="text"
        name="name"
        id="name"
        value={card.name}
        onChange={(e) => {
          updateValue(e);
        }}
      />

      <input
        className="border border-white rounded-md px-2 py-1"
        type="text"
        name="hp"
        id="hp"
        value={card.hp}
        onChange={(e) => {
          updateValue(e);
        }}
      />
      <input
        className="border border-white rounded-md px-2 py-1"
        type="text"
        name="notes"
        id="notes"
        value={card.notes}
        onChange={(e) => {
          updateValue(e);
        }}
      />
      <input
        className="border border-white rounded-md px-2 py-1"
        type="text"
        name="effects"
        id="effects"
        value={card.effects}
        onChange={(e) => {
          updateValue(e);
        }}
      />
      <button
        onClick={() => removeItem(item.id)}
        className="px-4 py-2 bg-red-400 font-bold border-2 rounded-2xl border-white text-black"
      >
        Delete
      </button>
    </div>
  );
}
