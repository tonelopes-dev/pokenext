import Image from "next/image";
import styles from "../styles/About.module.css";

export default function About() {
  return (
    <div className={styles.about}>
      <h1>Sobre o Projeto</h1>
      <Image
        src="/images/charizard.png"
        width={300}
        height={300}
        alt="Charizard"
      />
      <p>
        O projeto que desenvolvi é um site que utiliza a <strong>API do Pokemon</strong> para
        mostrar informações sobre os Pokemons. <strong>
          Ele foi criado com a tecnologia
          Next.js no React.js
        </strong>, seguindo o curso do <strong>
          professor Matheus Batisti do
          canal "Hora de Codar" no YouTube.
        </strong>
      </p>
      <p>
        O site apresenta uma lista de todos <strong>
          os Pokemons disponíveis na API, com
          suas respectivas imagens, nomes e tipos.
        </strong>
      </p>
      <p>
        Ao clicar em um Pokemon, o usuário é direcionado para uma página com
        informações mais detalhadas sobre ele, <strong>
          incluindo sua descrição,
          habilidades, estatísticas e evoluções
        </strong>. Também é possível ver outras
        informações relacionadas, como quais Pokemons podem ser encontrados na
        mesma região.
      </p>
      
      <p>
        O site é responsivo e foi desenvolvido seguindo <strong>
          boas práticas de
          programação, com um código limpo e bem estruturado.
        </strong>
      </p>
      <p>
        Foi uma ótima oportunidade para <strong>aprender sobre Next.js e React.</strong>js, além
        de aprimorar minhas habilidades em <strong>Desenvolvimento Web</strong>.
      </p>
    </div>
  );
}
