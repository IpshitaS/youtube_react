import './App.css';
import Body from './components/Body';
import Head from './components/Head';
import Footer from './components/Footer';
import { Provider } from 'react-redux';
import store from './utils/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchContiner from './components/WatchContiner';


const appRouter = createBrowserRouter([{
  path: "/",
  element: <Body />,
  children: [
    {
      path: "/",
      element: <MainContainer />
    },
    {
      path: "/watch",
      element: <WatchContiner />
    },
  ]
}])

function App() {
  return (
    <Provider store={store}> 
    <div className="App">
      <Head />
      <RouterProvider router={appRouter} />
      <Footer />
    </div>
    </Provider>
  );
}

export default App;
