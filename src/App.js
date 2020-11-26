import {BrowserRouter,Route,Switch} from 'react-router-dom';
import PageNotFound from './containers/PageNotFound'
import {routesHome} from './routes'
import NavbarHome from './Layout/NavbarHome'
import FooterHome from './Layout/FooterHome';
function App() {
  const showHomeTemplate=()=>{
    return routesHome.map((item,index)=>{
      const {Component}=item
      return <Route 
              path={item.path}
              key={index}
              exact={item.exact}
              render={(propsOfRoute)=>(
                <div>
                <NavbarHome/>
                <Component route={propsOfRoute}/>
                <FooterHome/>
                </div>
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
