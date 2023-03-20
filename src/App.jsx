import { useState, useEffect } from "react";
import { getUsers } from "./services/abzAPI";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Users from "./components/Users/Users";

function App() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [isNextPageExists, setIsNextPageExists] = useState(true);

 useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await getUsers();       
        const users = res.users;
        setUsers(users);
        
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await getUsers(page);
        const nextPage = res.links.next_url;
        const users = res.users;
        setUsers(prev=> [...prev, ...users]);
        nextPage ? setIsNextPageExists(true) : setIsNextPageExists(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, [page]);
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Users users={users} isBtnActive={isNextPageExists} setPage={setPage} />
      </main>
    </>
  );
}

export default App;
