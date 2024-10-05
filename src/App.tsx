import { BuscarEnderecoPage } from "./pages/buscar-endereco/buscarEnderecoPage";
import { Layout } from "./pages/layout";
import { Route, Routes } from "react-router-dom";

export const App = () => {

  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<></>} />
          <Route path="/buscar-endereco" element={<BuscarEnderecoPage/>}/>
        </Routes>
      </Layout>
    </>
    
  )
}

