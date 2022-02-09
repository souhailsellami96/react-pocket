import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";
import "./scss/style.scss";
import {Routes,Route} from "react-router-dom";
import Buy from './components/Buy';
import Send from "./components/Send";
import Transactions_History from "./components/Transactions_History";
import Deposit from "./components/Deposit";
import Settings from './components/Settings';
import Account from "./components/Account";
import Profile from "./components/Profile";




function App() {
  return (
    <>
    <div className="dashboard">
    <Sidebar />
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/buy" element={<Buy />} />
      <Route path="/sendmoney" element={<Send />} />
      <Route path="/transactions_history" element={<Transactions_History />} />
      <Route path="/deposit" element={<Deposit />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/account" element={<Account />} />
    </Routes>  
    </div>
    </>
  );
}

export default App;
