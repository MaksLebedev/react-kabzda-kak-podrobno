import { memo, useCallback, useMemo, useState } from "react";

export default {
  title: "useMemo",
};

export const DifficultCoutingExample = () => {
  const [a, setA] = useState<number>(5);
  const [b, setB] = useState<number>(5);

  let resultA = 1;
  let resultB = 1;

  resultA = useMemo(() => {
    let tempResultA = 1;
    for (let i = 1; i <= a; i++) {
      let fake = 0;
      while (fake < 100000000) {
        fake++;
        const fakeValue = Math.random();
      }
      tempResultA = tempResultA * i;
    }
    return tempResultA;
  }, [a]);

  for (let i = 1; i <= b; i++) {
    resultB = resultB * i;
  }

  return (
    <>
      {/* инпут дает всегда строковое значение, поэтому приводим к строке (2 разных способа) */}
      <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))} />
      <input value={b} onChange={(e) => setB(+e.currentTarget.value)} />
      <hr />
      <div>Result for a: {resultA}</div>
      <div>Result for b: {resultB}</div>
    </>
  );
};

const UsersSecret = (props: { users: Array<string> }) => {
  console.log("USERS SECRET");

  return (
    <div>
      {props.users.map((u, index) => (
        <div key={index}>{u}</div>
      ))}
    </div>
  );
};

const Users = memo(UsersSecret);

export const HelpsToReactMemo = () => {
  console.log("HelpsToReactMemo");

  const [counter, setCounter] = useState(0);
  const [users, setUsers] = useState(["Dimych", "Valera", "Artem", "Katya"]);

  const newArray = useMemo(() => {
    return users.filter((el) => el.toLowerCase().indexOf("a") > -1);
  }, [users]);

  const addUser = () => {
    const newUsers = [...users, "Sveta" + new Date().getTime()];
    setUsers(newUsers);
  };

  return (
    <>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={addUser}>add user</button>

      {counter}
      <Users users={newArray} />
    </>
  );
};

export const LikeUseCallback = () => {
  console.log("LikeUseCallback");

  const [counter, setCounter] = useState(0);
  const [books, setBooks] = useState(["React", "JS", "CSS", "HTML"]);

  const memoizedAddBook = useMemo(() => {
    return () => {
      const newBooks = [...books, "Angular" + new Date().getTime()];
      setBooks(newBooks);
    };
  }, [books]);

  const memoizedAddBook2 = useCallback(() => {
    console.log(books);
    
    const newBooks = [...books, "Angular" + new Date().getTime()];
    setBooks(newBooks);
  }, [books]);

  return (
    <>
      <button onClick={() => setCounter(counter + 1)}>+</button>

      {counter}
      <Book addBook={memoizedAddBook2} />
    </>
  );
};

type BookSecretPropsType = {
  addBook: () => void;
};

const BooksSecret = ({ addBook }: BookSecretPropsType) => {
  console.log("BooksSecret");

  return (
    <div>
      <button onClick={addBook}>add book</button>
    </div>
  );
};

const Book = memo(BooksSecret);
