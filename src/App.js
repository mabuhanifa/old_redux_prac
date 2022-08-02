import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { todoActions } from "./redux/actions/todoActions";

function App() {
  const dispatch = useDispatch();
  const { todo } = useSelector((state) => state);
  useEffect(() => {
    dispatch(todoActions());
  }, [dispatch]);
  console.log(todo);
  return (
    <div>
      <div>home</div>
    </div>
  );
}

export default App;
