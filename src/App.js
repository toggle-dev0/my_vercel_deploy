import "./App.css";
import Header from "./components/Header/Header";
import "./components/Header/Header.css";
import Main from "./components/Main/Main";
import "./components/Main/Main.css";
import Section from "./components/Main/Section/Section";
import "./components/Main/Section/Section.css";
import Footer from "./components/Footer/Footer";
import "./components/Footer/Footer.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Main>
        <Section>
          <div className="Section-image"></div>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium ipsa quisquam optio omnis modi nemo, excepturi necessitatibus molestiae exercitationem est eaque maxime minus nihil maiores tempore ea eligendi quibusdam eum facilis! Dignissimos impedit placeat fugiat.</p>
        </Section>
        <Section>
          <div className="Section-image"></div>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium ipsa quisquam optio omnis modi nemo, excepturi necessitatibus molestiae exercitationem est eaque maxime minus nihil maiores tempore ea eligendi quibusdam eum facilis! Dignissimos impedit placeat fugiat.</p>
        </Section>
        <Section>
          <div className="Section-image"></div>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium ipsa quisquam optio omnis modi nemo, excepturi necessitatibus molestiae exercitationem est eaque maxime minus nihil maiores tempore ea eligendi quibusdam eum facilis! Dignissimos impedit placeat fugiat.</p>
        </Section>
        <Section>
          <div className="Section-image"></div>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium ipsa quisquam optio omnis modi nemo, excepturi necessitatibus molestiae exercitationem est eaque maxime minus nihil maiores tempore ea eligendi quibusdam eum facilis! Dignissimos impedit placeat fugiat.</p>
        </Section>
      </Main>
      <Footer />
    </div>
  );
}

export default App;
