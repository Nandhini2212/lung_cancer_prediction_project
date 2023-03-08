import logo from './logo.svg';
import './App.css';
import PostValues from './components/cppost';
import GetValues from './components/cpget';
import Main from './components/cpget';
import Delete from './components/cpdel';
import UpdateValues from './components/cpput';

function App() {
  return (
    <div className="App">
      {/* <GetValues/> */}
      {/* <PostValues/> */}
      {/* <UpdateValues/> */}
      <Delete/>
    </div>
  );
}

export default App;
