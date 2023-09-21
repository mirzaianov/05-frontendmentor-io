import Stat from './components/stat/Stat';

import './App.scss';
import imageDesktop from '/image-header-desktop.jpg';
import imageMobile from '/image-header-mobile.jpg';

function App() {
  return (
    <div className="app container">
      <div className="wrapper">
        <div className="app__image">
          <picture>
            <source
              className="app__image--mobile"
              media="(min-width: 816px)"
              srcSet={imageDesktop}
              alt="People in a meeting"
            />
            <img
              className="app__image--mobile"
              src={imageMobile}
              alt="People in a meeting"
            />
          </picture>

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
