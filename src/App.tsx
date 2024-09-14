import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { Loading } from "./components/Loading";
import { useFetch } from "./hooks/useFetch";

export function App() {
  const [input, setInput] = useState("")
  const { loading, data, fetchData } = useFetch()

  const handleSearch = () => {
    fetchData(input)
  }

  return (
    <>
      <div className="h-screen flex items-center justify-center flex-col bg-indigo-700">
        <div className="w-2/5 min-w-96 h-12 flex items-center relative">
          <input
            className="h-full w-full pl-4 block rounded-md border-0 py-1.5 text-gray-700 text-lg ring-2 ring-gray-200 ring-inset outline-none placeholder:text-gray-500"
            type="text"
            placeholder="Pesquise um CEP ou CNPJ"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="absolute h-10 w-10 right-2" 
            onClick={handleSearch}

            >
            <FiSearch fontSize={28} className="text-gray-700 hover:text-gray-400" />
          </button>
        </div>

        {loading ? (
          <Loading />
        ) : data ? (
          <div className="w-2/5 min-w-96 p-4 mt-5 rounded-md bg-white">

            {
              Object.keys(data).length < 9 ? (
                <>
                  <h1 className="text-center text-lg">Resultado do CEP</h1>
                  <p><span className="font-bold">CEP</span>: {data.cep}</p>
                  <p><span className="font-bold">Cidade</span>: {data.city}</p>
                  <p><span className="font-bold">Estado</span>: {data.state}</p>
                  <p><span className="font-bold">Rua</span>: {data.street}</p>
                  <p><span className="font-bold">Bairro</span>: {data.neighborhood}</p>
                </>
              ) : (
                <>
                  <h1 className="text-center text-lg">Resultado do CNPJ</h1>
                  <p><span className="font-bold">CEP</span>: {data.cep}</p>
                  <p><span className="font-bold">CNPJ</span>: {data.cnpj}</p>
                  <p><span className="font-bold">Estado</span>: {data.uf}</p>
                  <p><span className="font-bold">Município</span>: {data.municipio}</p>
                  <p><span className="font-bold">Rua</span>: {data.logradouro}</p>
                  <p><span className="font-bold">Bairro</span>: {data.bairro}</p>
                  <p><span className="font-bold">Porte</span>: {data.porte}</p>
                  <p><span className="font-bold">Razão Social</span>: {data.razao_social}</p>
                  <p><span className="font-bold">Situação Cadasral</span>: {data.descricao_situacao_cadastral}</p>
                </>
              )
            }
          </div>
        ) : (
          <p className="text-white mt-1">Nenhum resultado encontrado.</p>
        )}
      </div>
    </>
  );
}
