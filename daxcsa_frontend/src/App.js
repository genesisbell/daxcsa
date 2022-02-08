

//Styles
import './app.css'

//Custom Components
import RouteManagement from './components/CustomComponents/RouteManagement';




function App() {
  return (
    <div className="App" id="app">

      <div id='header'>
      </div>

      <div id='content-wrap'>
        <RouteManagement />

      </div>
      <div id='footer'>
      </div>

    </div>
  );
}

export default App;
