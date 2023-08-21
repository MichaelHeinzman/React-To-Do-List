import List from "./components/List/List";
import ListContainer from "./components/ListContainer/ListContainer";

function App() {
  return (
    <div className="flex min-h-screen w-screen grid-cols-1 bg-[#5a7779] p-4 md:grid-cols-3">
      <div className="invisible w-1/5 md:visible "> </div>
      <div className="w-full flex-col justify-center bg-transparent p-3 align-top md:w-3/5">
        {/* A higher order component or container to reuse, with different List component UI */}
        <ListContainer>{(list) => <List list={list} />}</ListContainer>
      </div>
      <div className="invisible w-1/5 md:visible"></div>
    </div>
  );
}

export default App;
