import { useState } from "react";

interface CepData {
    cep: string;
    state: string;
    city: string;
    neighborhood: string;
    street: string;
}

interface CNPJData {
    cep: string;
    cnpj: string
    uf: string;
    porte: string;
    bairro: string;
    razao_social: string;
    nome_fantasia: string;
    descricao_situacao_cadastral: string;
    municipio: string;
    logradouro: string;
}

export const useFetch = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<any | CepData | CNPJData>(null);

    const fetchData = async (input: string) => {

        const cleanString = (str: string) => str.replace(/\D/g, '')
        const cleanInput = cleanString(input)

        const URL = cleanInput.length === 8 ?
            `https://brasilapi.com.br/api/cep/v1/${cleanInput}` :
            `https://brasilapi.com.br/api/cnpj/v1/${cleanInput}`

        setLoading(true);
        try {
            const request = await fetch(URL);
            const response = await request.json();
            setData(response);
            console.log(response)
        } catch (error) {

        } finally {
            setInterval(() => {
                setLoading(false);
            }, 1200);
        }


    };

    return { loading, data, fetchData }; // Retorna o estado de erro
};


// const cleanString = (str: string) => str.replace(/\D/g, '');
//`https://brasilapi.com.br/api/cep/v1/${input}`
// : `https://brasilapi.com.br/api/cnpj/v1/${input}`; 

