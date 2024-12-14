import About from './about/page';

function App() {
  return (
    <>
      <div className="min-h-screen bg-slate-800 flex justify-center items-center text-white text-7xl flex-col gap-4">
        OpenCode
        <button className="bg-black rounded-lg text-2xl px-4 py-2 hover:scale-110">
          Click me!
        </button>
      </div>
      <About />
    </>
  );
}

export default App;
