import { useEffect, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { TextField } from "../../components/text-field";
import { BuscarEnderecoForm, EnderecoConsultado } from "./types";

export const BuscarEnderecoPage = () => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<BuscarEnderecoForm>();

    const [enderecoConsultado, setEnderecoConsultado] = useState<EnderecoConsultado | undefined>(undefined);

    const onSubmit: SubmitHandler<BuscarEnderecoForm> = (data) => {
        fetch(`https://viacep.com.br/ws/${data.cep}/json/`)
            .then(response => response.json())
            .then(json => setEnderecoConsultado(json))
            .catch(error => console.error(error));
    };

    useEffect(() => {
        console.log(enderecoConsultado)
    }, [enderecoConsultado]);

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="bg-white border border-gray-200 rounded-t-lg shadow m-8 p-4 lg:max-w-6xl mx-auto">
                    <div className="text-sm divide-x divide-gray-500 rounded-t-lg sm:flex rtl:divide-x-reverse">
                        <p className="text-lg font-semibold text-start">Buscar endereço</p>
                    </div>
                    <div className={`flex flex-col sm:flex-row gap-4 sm:justify-center 
                    ${errors.cep?.message ? "sm:items-center" : "sm:items-end"}  sm:items-end`}>
                        <div className="flex-1">
                            <Controller
                                name="cep"
                                control={control}
                                rules={{ required: 'Este campo é obrigatório' }}
                                render={({ field }) => (
                                    <>
                                        <TextField
                                            label="CEP"
                                            placeholder="Digite seu CEP"
                                            {...field}
                                            error={errors.cep?.message}
                                        />
                                        {errors.cep && (
                                            <div className="text-red-500 text-sm mt-1">{errors.cep.message}</div>
                                        )}
                                    </>
                                )}
                            />
                        </div>
                        <button className="h-10 bg-rose-300 w-full sm:w-32 hover:bg-rose-400 text-white rounded-md shadow-lg transition duration-300 ease-in-out transform" type="submit">
                            Consultar
                        </button>
                    </div>
                </div>
            </form>
            <div className="bg-white border border-gray-200 rounded-t-lg shadow m-8 p-4 lg:max-w-6xl mx-auto">
                {enderecoConsultado ? (
                    <>

                        <div className={`flex flex-col sm:flex-row gap-4 sm:justify-center 
                    ${errors.cep?.message ? "sm:items-center" : "sm:items-end"}  sm:items-end`}>
                            <div className="flex-1">
                                <TextField
                                    label="Logradouro"
                                    placeholder={enderecoConsultado?.logradouro}
                                    disabled={true} />
                            </div>
                            <div className="flex-1">
                                <TextField
                                    label="Bairro"
                                    placeholder={enderecoConsultado?.bairro}
                                    disabled={true} />
                            </div>

                            <div className="flex-2">
                                <TextField
                                    label="CEP"
                                    placeholder={enderecoConsultado?.cep}
                                    disabled={true} />
                            </div>
                        </div>

                        <div className={`flex flex-col sm:flex-row gap-4 sm:justify-center 
                    ${errors.cep?.message ? "sm:items-center" : "sm:items-end"}  sm:items-end`}>
                            <div className="flex-1">
                                <TextField
                                    label="Cidade"
                                    placeholder={enderecoConsultado?.localidade}
                                    disabled={true} />
                            </div>
                            <div className="flex-3">
                                <TextField
                                    label="UF"
                                    placeholder={enderecoConsultado?.uf}
                                    disabled={true} />
                            </div>

                            <div className="flex-1">
                                <TextField
                                    label="Estado"
                                    placeholder={enderecoConsultado?.estado}
                                    disabled={true} />
                            </div>
                        </div>

                    </>
                ) : (
                    <>
                        <h5>Digite um CEP para verificar as informações</h5>
                        <p>Nenhum dado disponível.</p>
                    </>
                )}  </div>
        </>
    );
};
