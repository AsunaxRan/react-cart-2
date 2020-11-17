import Counter from './components/Counter';
import SearchInput from './components/SearchInput';
import Pagination from './components/Pagination/index';
function App() {
  return <div className="App">
    <Counter style={{ marginBottom: "10px" }} />
    <SearchInput style={{ marginBottom: "10px" }} />
    <Pagination />
  </div>;
}

export default App;
