import { FiSearch } from "react-icons/fi";

export function App() {


  return (
    <>
      <div className="h-screen flex items-center justify-center flex-col bg-indigo-700">
        <div className="w-2/5 min-w-96 h-12 flex items-center relative">
          <input
            className="h-full w-full pl-4 block rounded-md border-0 py-1.5 text-gray-700 text-lg ring-2 ring-gray-200 ring-inset outline-none placeholder:text-gray-400"
            type="text"
            placeholder="Pesquise um cep"
          />
          <button className="absolute h-10 w-10 right-2">
            <FiSearch
              fontSize={28}
              className="text-gray-200"
            />
          </button>
        </div>

        <div className="w-2/5 min-w-96 p-4 mt-10 rounded-sm bg-white">
          <h1 className="text-center">Resultado</h1>
        </div>
      </div>
    </>
  )
}

