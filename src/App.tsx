import { useReducer } from "react";
import LoginStatus from "./state-management/LoginStatus";
import tasksReducer from "./state-management/reducers/taskReducer";

function App() {
  const [tasks, dispatch] = useReducer(tasksReducer, []);

  return <><NavBar /> <Homepage /></>
}

export default App;
