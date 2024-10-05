import { ReactNode } from "react";
import { Footer } from "../components/footer";
import { Header } from "../components/header";

type Props = {
  children: ReactNode | ReactNode[]
}
export const Layout = ({ children }: Props) => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </>
  );
};