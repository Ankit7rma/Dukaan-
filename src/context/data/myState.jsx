import MyContext from "./myContext";

const MyState = (props) => {
  const state = {
    name: "Ankit",
    fame: "Frontend",
  };
  const color = "red";
  return (
    <MyContext.Provider value={{ state, color }}>
      {props.children}
    </MyContext.Provider>
  );
};

export default MyState;
