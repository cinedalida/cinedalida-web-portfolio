import LandingPage from "./pages/LandingPage";
import "./css/landingPage.css";
import ThemeToggle from "./components/ThemeToggle.jsx";

function App() {
  return (
    <>
      <ThemeToggle />
      <LandingPage />
    </>
  );
}

export default App;
