import './App.css';
import NavBar from './components/NavBar';
import AddUsers from './components/AddUsers';
import AllUsers from './components/AllUsers';
import CodeforInterview from './components/CodeforInterview';
import EditUser from './components/EditUser';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path="/" element={<CodeforInterview />} />
      <Route path="/all" element={<AllUsers />} />
      <Route path="/add" element={<AddUsers />} />
      <Route path="/edit/:id" element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
