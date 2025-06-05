import './App.css'
import Dashboard from './components/dashboard'
import { ThemeProvider } from './contexts/ThemeContext';
import { StateManager } from './utlis/StateManager';

function App() {

  return (
    <>
     <div>
       <ThemeProvider>
        <StateManager >
          <Dashboard />
        </StateManager>
       </ThemeProvider>
     </div>
    </>
  )
}

export default App
