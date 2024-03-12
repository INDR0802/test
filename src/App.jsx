import Bottle from "./components/Bottle";
import BottleData from "./components/BottleData";

function App() {
  return (
    <>
      <div className="max-w-[1200px] mx-auto">
        <h1 className="text-4xl my-10 text-center">Vite + React</h1>
        <BottleData />
      </div>
    </>
  );
}

export default App;
