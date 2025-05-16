import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";

const App = () => {
  return (
    <div className="container mx-auto px-4 h-screen flex flex-col">
      <header>
        <Navbar />
      </header>
      <main className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 flex-grow">
        <Sidebar />
      </main>
    </div>
  );
};

export default App;
