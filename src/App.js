import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer"
import HomePage from "./components/Pages/HomePage";

function App() {
  return (
    <div>
    <div id="wrapper">
      <Header />
      <main>
        <HomePage />

      </main>
    </div>
    <Footer/>
    </div>
  );
}

export default App;
