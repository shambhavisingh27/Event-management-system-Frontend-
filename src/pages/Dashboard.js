const Dashboard = ({ user }) => {
    return (
      <div>
        <h2>Dashboard</h2>
        <p>Welcome, {user?.username} ({user?.role})</p>
      </div>
    );
  };
  
  export default Dashboard;
  