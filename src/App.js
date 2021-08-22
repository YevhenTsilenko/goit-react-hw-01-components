import './App.css';
import friends from './components/friend-list/friends.json';
import FriendList from './components/friend-list/FriendList';
import user from './components/social-profile/user.json';
import Profile from './components/social-profile/profile';
import statisticalData from './components/statistics/statistical-data.json';
import Statistics from './components/statistics/statistics';
import TransactionHistory from './components/transaction-history/transactions';
import transactions from './components/transaction-history/transactions.json';

function App() {
  return (
    <div className="App">
      <h2 className="title">-------Prifile-------</h2>
      <Profile 
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <h2 className="title">-------Statistics-------</h2>
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />;
      <h2 className="title">-------Friends list-------</h2>
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
