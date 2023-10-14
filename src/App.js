import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Header from './components/Header'
import Clients from './components/Clients';
import {ApolloProvider,ApolloClient,InMemoryCache} from '@apollo/client'
import AddClientModal from './components/AddClientModal';
import Projects from './components/Projects';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Project from './pages/Project';

const client = new ApolloClient({
  uri:"http://localhost:5000/graphql",
  cache:new InMemoryCache()
})

function App() {
  return (
    <>
    <ApolloProvider client={client}>
      <Router>
         <Header/>
    <div className="container">
      <Routes>
       <Route path='/' element={<Home/>}></Route>
         <Route path='*' element={<NotFound/>}></Route>
           <Route path='/projects/:id' element={<Project/>}></Route>
      </Routes>
    </div>
      </Router>
    </ApolloProvider>
    </>
    
  );
}

export default App;
