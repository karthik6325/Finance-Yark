import React from 'react';

const GoalTracker = () => {
  // Dummy data for users
  const users = [
    {
      _id: 'user1',
      name: 'John Doe',
      dob: '1980-01-01',
      parents: [
        { fatherName: 'John Sr.', fatherDOB: '1950-01-01' },
        { motherName: 'Jane Sr.', motherDOB: '1952-02-01' }
      ],
      children: [
        { name: 'Alice Doe', dob: '2010-05-01' },
        { name: 'Bob Doe', dob: '2012-08-12' }
      ],
    },
    {
      _id: 'user2',
      name: 'Jane Smith',
      dob: '1985-03-15',
      parents: [
        { fatherName: 'Robert Smith', fatherDOB: '1955-04-15' },
        { motherName: 'Mary Smith', motherDOB: '1957-07-20' }
      ],
      children: [
        { name: 'Eve Smith', dob: '2015-11-11' }
      ],
    },
  ];

  // Dummy data for investments
  const investments = [
    {
      userId: 'user1',
      lifeInsurance: [
        {
          Number: 'LI12345',
          PolicyStartDate: '2020-01-01',
          ProductName: 'LifeSecure',
          Value: 50000,
          PremiumPayingTerm: 5,
        },
        {
          Number: 'LI67890',
          PolicyStartDate: '2021-06-01',
          ProductName: 'SafeGuard',
          Value: 75000,
          PremiumPayingTerm: 10,
        },
      ]
    },
    {
      userId: 'user2',
      lifeInsurance: [
        {
          Number: 'LI54321',
          PolicyStartDate: '2019-02-01',
          ProductName: 'FamilyCover',
          Value: 60000,
          PremiumPayingTerm: 7,
        },
      ]
    },
  ];

  // Helper function to calculate age
  const calculateAge = (dob, year) => {
    const birthYear = new Date(dob).getFullYear();
    return year - birthYear;
  };

  // Extract the earliest start year and latest end year
  let minYear = Number.MAX_SAFE_INTEGER;
  let maxYear = Number.MIN_SAFE_INTEGER;

  investments.forEach(investment => {
    investment.lifeInsurance.forEach(policy => {
      const startYear = new Date(policy.PolicyStartDate).getFullYear();
      const endYear = startYear + policy.PremiumPayingTerm;
      if (startYear < minYear) minYear = startYear;
      if (endYear > maxYear) maxYear = endYear;
    });
  });

  // Generate table rows for each year
  const rows = [];
  for (let year = minYear; year <= maxYear; year++) {
    users.forEach(user => {
      const parents = user.parents || [];
      const children = user.children || [];
      const lifeInsurance = investments.find(inv => inv.userId === user._id)?.lifeInsurance || [];

      // Calculate ages
      const parentAges = parents.map(parent => calculateAge(parent.fatherDOB || parent.motherDOB, year));
      const childAges = children.map(child => calculateAge(child.dob, year));

      // Calculate total expenses for life insurance
      const totalExpenses = lifeInsurance.reduce((sum, policy) => {
        const startYear = new Date(policy.PolicyStartDate).getFullYear();
        const endYear = startYear + policy.PremiumPayingTerm;
        if (year >= startYear && year <= endYear) {
          return sum + (policy.Value || 0);
        }
        return sum;
      }, 0);

      rows.push(
        <tr key={`${user._id}-${year}`}>
          <td>{year}</td>
          <td>{parents.map((parent, index) => (
            <div key={index}>{parent.fatherName || parent.motherName}</div>
          ))}</td>
          <td>{parentAges.join(', ')}</td>
          <td>{children.map((child, index) => (
            <div key={index}>{child.name}</div>
          ))}</td>
          <td>{childAges.join(', ')}</td>
          {lifeInsurance.map((policy, index) => (
            <td key={index}>{policy.ProductName || 'N/A'}</td>
          ))}
          <td>{totalExpenses}</td>
        </tr>
      );
    });
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Year</th>
          <th>Parents</th>
          <th>Parent Age</th>
          <th>Children</th>
          <th>Child Age</th>
          <th>Life Insurance</th>
          <th>Total Expenses</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  );
};

export default GoalTracker;