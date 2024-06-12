import React from 'react';
import AddCraftsmenForm from '../components/AddCraftsmenForm';
import CraftsmenList from '../components/CraftsmenList';


const AdminDashboard = () => {
  return (
    <div>
      <h2>Admin Dashboard</h2>
      <AddCraftsmenForm />
      <CraftsmenList />
    </div>
  );
};

export default AdminDashboard;
