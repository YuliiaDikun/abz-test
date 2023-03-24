import { useState, useEffect } from "react";
import { getUsers } from "./services/abzAPI";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Loader from './components/loader/Loader';
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Users from "./components/users/Users";
import Form from "./components/form/Form";
function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
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
      } finally { 
        setIsLoading(false);
      }
    };   
   fetchUsers();  
  }, []);

  useEffect(() => {
    setIsLoading(true);
    const fetchUsersinNextPage = async () => {
      try {
        const res = await getUsers(page);
        const nextPage = res.links.next_url;
        const users = res.users;
        setUsers(prev=> [...prev, ...users]);
        nextPage ? setIsNextPageExists(true) : setIsNextPageExists(false);
      } catch (error) {
       toast.error(error.message);
      } finally { 
        setIsLoading(false);
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
      { isLoading && <Loader/>}
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
