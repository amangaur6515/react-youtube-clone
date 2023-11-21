import { Provider } from 'react-redux';
import Body from './Components/Body';
import Head from './Components/Head'
import store from './Utils/store';


function App() {
  return (
    <div className='' >
      <Provider store={store}>
        <Head/>
        <Body/>
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