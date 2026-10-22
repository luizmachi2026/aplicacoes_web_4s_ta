'use client'

interface PrimeiroComponenteProps {
    mensagem?: string;
    mensagemBotao?: string;
}

export const PrimeiroComponente: React.FC<PrimeiroComponenteProps> = 
(props: PrimeiroComponenteProps) => {
    
    function handleClick(){
        console.log(props.mensagemBotao)
    }
    
    return(
        <div>
            { props.mensagem}

            <button onClick={handleClick}>Clique Aqui</button>
        </div>
    );
}

export const ArrowFunction = () => {
    return(
        <h2>Arrow Function</h2>
    )
}