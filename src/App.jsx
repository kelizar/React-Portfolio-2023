import Header from './components/Header/Header';
import Hero from './components/hero/Hero';
import css from './styles/app.module.scss';
import Expertise from './components/Expertise/Expertise';

const App = () => {
  return <div className={`bg-primary ${css.container}`}>
    <Header/>
    <Hero/>
    <Expertise/>
  </div>
};

export default App;
