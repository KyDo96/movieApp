import {BrowserRouter,Route,Switch} from 'react-router-dom';
import PageNotFound from './containers/PageNotFound'
import {routesHome} from './routes'
import NavbarHome from './Layout/NavbarHome'
import ListRap from './components/HomePage/ListRap';
function App() {
  const showHomeTemplate=()=>{
    return routesHome.map((item,index)=>{
      const {Component}=item
      return <Route 
              path={item.path}
              key={index}
              exact={item.exact}
              render={(propsOfRoute)=>(
                <>
                <NavbarHome/>
                <Component route={propsOfRoute}/>
                </>
              )}
      />
    })
  }
  return (
    <BrowserRouter>
      <Switch>
        {showHomeTemplate()}
        <Route path='' component={PageNotFound}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
