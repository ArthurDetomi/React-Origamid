import React from "react";

const set1 = new Set();
const set2 = new Set();

const UseCallBackAula = () => {
  const [nada, setNada] = React.useState(null);
  const func1 = () => {
    console.log("teste 1");
    setNada("asdas");
  };

  const func2 = React.useCallback(() => {
    console.log("teste 2");
    setNada("ashdjasghd");
  }, []);

  set1.add(func1);
  set2.add(func2);

  console.log("set 1 : ", set1.size);
  console.log("set 2 :", set2.size);

  return (
    <div>
      <button onClick={() => func1()}>button 1</button>
      <button onClick={() => func2()}>button 2</button>
    </div>
  );
};

export default UseCallBackAula;
