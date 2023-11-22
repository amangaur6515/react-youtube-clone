import { Provider } from 'react-redux';
import Body from './Components/Body';
import Head from './Components/Head'
import store from './Utils/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './Components/MainContainer';
import WatchPage from './Components/WatchPage';


function App() {
  const appRouter=createBrowserRouter([{
    path:"/",
    element:<Body/>,
    children:[
      {
        path:"/",
        element:<MainContainer/>
      },
      {
        path:"watch",
        element:<WatchPage/>
      }
    ]
  }])
  return (

    <div className='' >
     
      <Provider store={store}>
        <Head/>
        <RouterProvider router={appRouter} />
      </Provider>
     
      
      
    </div>
  );
}

export default App;



//Head
//Body
//  Sidebar
//     Menuitems
//  MainContainer
//     ButtonList
//     VideoContainer
//         VideoCard