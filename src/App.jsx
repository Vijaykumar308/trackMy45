import './App.css'
import Dashboard from './components/dashboard'
import { StateManager } from './utlis/StateManager';

function App() {

  return (
    <>
     <div>
      <StateManager >
        <Dashboard />
      </StateManager>
     </div>
    </>
  )
}

export default App
