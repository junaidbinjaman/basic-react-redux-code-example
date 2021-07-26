import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import CakeContainer from "./components/CakeContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import Book from "./components/Book";
import BookContainer from "./components/BookContainer";
import NEwCakeContainer from "./components/NEwCakeContainer";
import ItemContainer from "./components/ItemContainer";
import UserContainer from "./components/UserContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserContainer />
        {/* <CakeContainer />
        <HooksCakeContainer />
        <IceCreamContainer />
        <Book />
        <BookContainer />
        <NEwCakeContainer />
        <ItemContainer cake />
        <ItemContainer /> */}
      </div>
    </Provider>
  );
}

export default App;
