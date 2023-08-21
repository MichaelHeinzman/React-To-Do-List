import List from "./components/List/List";
import ListContainer from "./components/ListContainer/ListContainer";

function App() {
  return (
    <div className="flex min-h-screen w-screen flex-col bg-[#5a7779]">
      <nav className="relative flex w-full items-center justify-between bg-white p-4 text-black">
        <div className="">TODO</div>
      </nav>
      <section className="flex h-full w-full grid-cols-1 p-4 md:grid-cols-3">
        <div className="invisible md:visible md:w-1/5 "> </div>
        <div className="w-full flex-col justify-center bg-transparent align-top md:w-3/5 md:p-3">
          {/* A higher order component or container to reuse, with different List component UI */}
          <ListContainer>{(list) => <List list={list} />}</ListContainer>
        </div>
        <div className="invisible md:visible md:w-1/5"></div>
      </section>
    </div>
  );
}

export default App;
