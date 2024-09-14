import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { Loading } from "./components/Loading";

export function App() {
  const [input, setInput] = useState("");
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    const response = await fetch(`https://brasilapi.com.br/api/cep/v1/${input}`);
    const data = await response.json();
    setData(data);
    setLoading(false);
    console.log(data)
  };

  return (
    <>
      <div className="h-screen flex items-center justify-center flex-col bg-indigo-700">
        <div className="w-2/5 min-w-96 h-12 flex items-center relative">
          <input
            className="h-full w-full pl-4 block rounded-md border-0 py-1.5 text-gray-700 text-lg ring-2 ring-gray-200 ring-inset outline-none placeholder:text-gray-500"
            type="text"
            placeholder="Pesquise um cep"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="absolute h-10 w-10 right-2" onClick={handleSubmit}>
            <FiSearch fontSize={28} className="text-gray-700" />
          </button>
        </div>

        {loading ? (
          <Loading />
        ) : Object.keys(data).length === 0 ? (
          '' // Renderiza uma string vazia se não há dados e não está carregando
        ) : (
          <div className="w-2/5 min-w-96 p-4 mt-10 rounded-sm bg-white">
            <h1 className="text-center">Resultado</h1>
          </div>
        )}
      </div>
    </>
  );
}
