import { useState } from "react";
import AddItem from "./components/AddItem";
import Tasks from "./components/Tasks";

function App() {
  const [itens, NewItens] = useState([]);

  function OnclickItem(itemId) {
    const newItens = itens.map((item) => {
      if (item.id == itemId) {
        return { ...item, EstaCompleta: !item.EstaCompleta };
      }

      return item;
    });
    NewItens(newItens);
  }

  function DeleteItem(itemId) {
    const deleteItem = itens.filter((item) => itemId !== item.id);
    NewItens(deleteItem);
  }

  function banana(fruta, quantidade) {
    const newItem = {
      id: itens.length + 1,
      fruta: fruta,
      quantidade: quantidade,
      isCompleted: false,
    };

    NewItens([...itens, newItem]);
  }
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-4">
      <div className="w-[500px] space-y-4">
        <h1 className="text-center text-white text-3xl">
          Gerenciador de Listas de Mercado
        </h1>
        <Tasks banana={banana} />
        <AddItem itens={itens} newItens={OnclickItem} deleteItem={DeleteItem} />
      </div>
    </div>
  );
}
export default App;
