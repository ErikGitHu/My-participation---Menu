import Title from "../components/Titulo/Title";
import Menu from "../components/Menu/Index";

function Home() {

    return (
      <>
        <Title 
          color="red"
          fontSize="3em"
          >
          Título
        </Title>
        <Menu>
          /*A tag esta sendo manipulada para alojar o codigo 
          que expressa otimamente a logica regular da animacao
          do menu */
        </Menu>
      </>
    );
}

export default Home