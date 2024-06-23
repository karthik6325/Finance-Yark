import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserProfileInfo from '../components/pageComponents/dashboardAboutPage/userProfile';
import FamilyMemberInfo from '../components/pageComponents/dashboardAboutPage/familyMemberInfo';
import { useLogin } from '../context/loginContext';

const host = "http://localhost:3001"; // Update with your actual host URL

const ProfileDashboard = () => {
  const [user, setUser] = useState(null); // State to hold user data, initialized as null
  const { userToken } = useLogin();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${host}/api/v1/getdetails`, {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        });
        setUser(response.data);
      } catch (err) {
        console.error('Error fetching user data:', err);
      }
    };

    fetchUserData();
  }, [userToken]); // useEffect now depends on userToken

  if (!user) {
    return <div>Loading...</div>; // Display loading indicator while fetching data
  }

  return (
    <div className="flex flex-col gap-4 bg-gray-100 p-4">
      <UserProfileInfo
        name={user.name}
        email={user.email}
        location={user.location}
        dob={new Date(user.dob).toLocaleDateString()}
        phoneNumber={user.phoneNumber}
        username={user.username}
        verified={user.verified}
      />
      {user.children && user.children.length > 0 && (
        <FamilyMemberInfo title="Children" members={user.children} />
      )}
      {user.spouse && (
        <FamilyMemberInfo title="Spouse" members={[user.spouse]} />
      )}
      {user.parents && user.parents.length > 0 && (
        <FamilyMemberInfo
          title="Parents"
          members={user.parents.map(parent => ({
            name: parent.fatherName, 
            dob: parent.fatherDOB,   
            gender: 'male'          
          })).concat(user.parents.map(parent => ({
            name: parent.motherName, 
            dob: parent.motherDOB,   
            gender: 'female'         
          })))}
        />
      )}
      {user.siblings && user.siblings.length > 0 && (
        <FamilyMemberInfo title="Siblings" members={user.siblings} />
      )}
    </div>
  );
};

export default ProfileDashboard;
