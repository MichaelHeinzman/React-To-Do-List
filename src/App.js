import List from "./components/List/List";
import ListContainer from "./components/ListContainer/ListContainer";

function App() {
  return (
    <div className="min-h-screen w-screen bg-[#5a7779] flex grid-cols-1 md:grid-cols-3 p-4">
      <div className="invisible md:visible w-1/5 "></div>
      <div className="w-full md:w-3/5 bg-transparent flex-col justify-center align-top p-3">
        {/* A higher order component or container to reuse, with different List component UI */}
        <ListContainer>{(list) => <List list={list} />}</ListContainer>
      </div>
      <div className="invisible md:visible w-1/5"></div>
    </div>
  );
}

export default App;
