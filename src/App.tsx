import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import MessageForm from "./components/crud/MessageForm/MessageForm";
import MessageList from "./components/crud/MessageList/MessageList";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/admin" element={<MessageForm />} />
        <Route path="/list" element={<MessageList />} />
      </Routes>
    </div>
  );
};

export default App;
