import { useState, useEffect } from "react";
import { getUsers } from "./services/abzAPI";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
 import 'react-toastify/dist/ReactToastify.css';
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Users from "./components/Users/Users";
import Form from "./components/form/Form";
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
        toast.error(error.message);
      }
    };   
   fetchUsers();  
  }, []);

  useEffect(() => {
    const fetchUsersinNextPage = async () => {
      try {
        const res = await getUsers(page);
        const nextPage = res.links.next_url;
        const users = res.users;
        setUsers(prev=> [...prev, ...users]);
        nextPage ? setIsNextPageExists(true) : setIsNextPageExists(false);
      } catch (error) {
       toast.error(error.message);
      }
    };
   page > 1 && fetchUsersinNextPage();
  }, [page]);

  const updateUsers = (users) => { 
    setUsers(users);
    setPage(1);
  }
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Users users={users} isBtnActive={isNextPageExists} setPage={setPage} />
        <Form updateUsers={updateUsers } />
      </main>
      <ToastContainer
          autoClose={2000}
          hideProgressBar={true}
          position="top-right"
        />
    </>
  );
}

export default App;
