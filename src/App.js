import './App.css';
import Login from './Pages/LogIn/Login';
import Dashboard from './Pages/Dashboard/Dashboard';
import { useContextCustom } from './Context/Context';

function App() {
  const [state,] = useContextCustom();
  console.log(state); 

  return state.user ? <Dashboard /> : <Login />
    // // just in the actionType===SUCCESS(in file Reducer.js) state.user has value(TRUE)
}

export default App;
