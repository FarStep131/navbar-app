import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Gaming from './components/Gaming'
import Learning from './components/Learning'
import Live from './components/Live'
import Movies from './components/Movies'
import Music from './components/Music'
import News from './components/News'
import Sports from './components/Sports'
import Trending from './components/Trending'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center w-screen h-screen">
        <div className="w-11/12 h-5/6 md:w-9/12">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/gaming" component={Gaming} />
            <Route path="/learning" component={Learning} />
            <Route path="/live" component={Live} />
            <Route path="/movies" component={Movies} />
            <Route path="/music" component={Music} />
            <Route path="/news" component={News} />
            <Route path="/sports" component={Sports} />
            <Route path="/trending" component={Trending} />
          </Switch>
        </div>
      </div>
    </>
  );
}

export default App;
