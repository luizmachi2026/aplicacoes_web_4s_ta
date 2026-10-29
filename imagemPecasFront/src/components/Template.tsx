interface TemplateProps {
    children: React.ReactNode
}

export const Template: React.FC<TemplateProps> = (props: TemplateProps) => {
    return(
        <>
            <Header/>
                <div className="container mx-auto mt-8 px-4">
                    {props.children}
                </div>
            <Footer/>
        </>
    )
}

const Header: React.FC = () =>{
    return(
        <header className="bg-red-600 text-white py-3">
            <div className="container mx-auto flex items-center justify-between px-4">
                <h1 className="text-3x1 font-bold">Imagem Peças</h1>
            </div>
        </header>
    )
}

const Footer: React.FC = () =>{
    return(
        <footer className="bg-red-600 text-white py-4 mt-8">
            <div className="container mx-auto text-center">
                Desenvolvido por Luiz Lozano
            </div>
        </footer>
    )
}