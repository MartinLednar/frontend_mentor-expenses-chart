import "./App.css";

//////////////Components//////////////
import DaysContainer from "./components/days-container/days-container.component";
//////////////Components//////////////
import daysData from "./data";

function App() {
  return (
    <div className="App">
      <div className="content-wrapper">
        <div className="header-container">
          <div className="title-pair">
            <h3>My balance</h3>
            <h2>$921.48</h2>
          </div>

          <img src="/logo.svg" alt="Bank logo" />
        </div>

        <div className="overview-container">
          <h1>Spending - Last 7 days</h1>

          <DaysContainer daysData={daysData} />

          <div className="footer-container">
            <div className="title-pair">
              <h3>Total this month</h3>
              <h2>$478.33</h2>
            </div>

            <div className="title-pair reverse">
              <h3>from last month</h3>
              <h4>+2.4%</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
