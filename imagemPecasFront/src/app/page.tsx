import { PrimeiroComponente, ArrowFunction } from "../components/PrimeiroComponente";

export default function Home() {
  return (
    <>
      <PrimeiroComponente 
            mensagem = 'Passando mensagem como parametro'
            mensagemBotao=" Essa é a mensagem do botao"
      />

      <PrimeiroComponente 
            mensagem = 'Outro componente'
            mensagemBotao=" Clicou em outro componente"
      />

      <PrimeiroComponente 
      />
      <ArrowFunction />
    </>
  );
}
