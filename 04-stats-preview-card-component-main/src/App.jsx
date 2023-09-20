import Stat from './components/stat/Stat';

import './App.scss';
import imageMobile from '/image-header-mobile.jpg';

function App() {
  return (
    <div className="app">
      <div className="wrapper container">
        <div className="app__image">
          <img
            src={imageMobile}
            alt="People in a meeting"
          />
          <div className="app__image--accent" />
        </div>

        <div className="app__content">
          <h1 className="app__heading">
            Get
            <span className="app__text--accent"> insights </span>
            that help your business grow.
          </h1>
          <p className="app__description">
            Discover the benefits of data analytics and make better decisions
            regarding revenue, customer experience, and overall efficiency.
          </p>
          <div className="app__stats">
            <Stat
              quantity="10k+"
              description="companies"
            />
            <Stat
              quantity="314"
              description="templates"
            />
            <Stat
              quantity="12M+"
              description="queries"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
