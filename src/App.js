import './App.css';
import Landing from './screens/Landing';
import Searched from './screens/Searched'
import NotFound from './screens/NotFound';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>

      <div class="App">

        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/recipe/:term" element={<Searched/>}/>
          <Route path="*" element={<NotFound/>}/>

        </Routes>

      </div>

    </Router>

  );
}

export default App;
