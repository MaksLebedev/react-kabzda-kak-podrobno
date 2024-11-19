import { useEffect, useState } from "react";

export default {
  title: "useEffect demo",
};

export const SimpleExample = () => {
  const [fake, setFake] = useState(1);
  const [counter, setCounter] = useState(1);
  console.log("SimpleExample");

  // useEffect срабатывает, когда уже произошла отрисовка

  //   useEffect(() => {
  //     console.log("useEffect");
  //     // sideeffect:
  //     // api.getUsers().then('') - запрос на сервер
  //     // setInteval - асинхронная функция
  //     // indexedDB - хранилище данных
  //     // documment.getElementById - поиск элемента
  //     // document.title = 'User '
  //   });

  useEffect(() => {
    console.log("useEffect every render");
    document.title = counter.toString();
  });

  useEffect(() => {
    console.log("useEffect only first render");
    document.title = counter.toString();
  }, []);

  useEffect(() => {
    console.log("useEffect first render and every counter change");
    document.title = counter.toString();
  }, [counter]);

  return (
    <>
      Hello, {counter}
      {fake}
      <button onClick={() => setFake(fake + 1)}>fake+</button>
      <button onClick={() => setCounter(counter + 1)}>counter+</button>
    </>
  );
};

export const SetIntervalExample = () => {
  const [fake, setFake] = useState(1);
  const [counter, setCounter] = useState(1);
  console.log("SetIntervalExample");

  // асинхронные функции запускаем внутри useEffect

  // useEffect(() => {
  //   setInterval(() => {
  //     console.log("tick:" + counter);
  //     setCounter((state) => state + 1);
  //   }, 1000);
  // }, []);

  
  const currentDate = new Date();
  console.log(currentDate.getHours());
   

  return (
    <>
      Hello, counter: {counter} - fake: {fake}
      {/* <button onClick={() => setFake(fake + 1)}>fake+</button>
      <button onClick={() => setCounter(counter + 1)}>counter+</button> */}
      <div>
      ClockByMakson: {currentDate.getHours()}:{currentDate.getMinutes()}:{currentDate.getSeconds()}
      </div>
      
    </>
  );
};
