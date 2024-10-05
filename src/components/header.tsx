import { useNavigate } from "react-router-dom";

export const Header = () => {

    const navigate = useNavigate();

    return (
        <>
            
                <div className="flex justify-between items-center py-4 px-12 bg-rose-300">
                    <div className="col-12 col-md-3 bg-blue italic font-bold "> LOGO </div>
                    <div className="flex space-x-4 col-12 col-md-3 col-lg-8">
                        <button className="btn btn-link hover:text-rose-200" onClick={() => navigate("/")}>
                            Home
                        </button>
                        <button className="btn btn-link hover:text-rose-200" onClick={() => navigate("/buscar-endereco")}>
                            Buscar Endereço
                        </button>
                    </div>
                </div>
         
        </>
    )
};
