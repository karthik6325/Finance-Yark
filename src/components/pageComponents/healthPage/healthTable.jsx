import React from 'react';

const HealthTable = ({ investment }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mt-5">Health Insurance</h2>
      <div className="overflow-x-auto"> {/* Container for table overflow */}
        <table className="bg-white border border-gray min-w-full"> {/* Ensure table takes full available width */}
          <thead>
            <tr>
              <th className="py-2 px-4 border-b text-left">Name</th>
              <th className="py-2 px-4 border-b text-left">Age</th>
              <th className="py-2 px-4 border-b text-left">Sum Assured</th>
              <th className="py-2 px-4 border-b text-left">Premium</th>
              <th className="py-2 px-4 border-b text-left">Policy Start Date</th>
              <th className="py-2 px-4 border-b text-left">Company</th>
              <th className="py-2 px-4 border-b text-left">Product</th>
              <th className="py-2 px-4 border-b text-left">Port Date</th>
              <th className="py-2 px-4 border-b text-left">Policy Renewal Start Date</th>
              <th className="py-2 px-4 border-b text-left">Company</th>
              <th className="py-2 px-4 border-b text-left">Product</th>
              <th className="py-2 px-4 border-b text-left">Commulative</th>
              <th className="py-2 px-4 border-b text-left">PED</th>
            </tr>
          </thead>
          <tbody>
            {investment.map((item, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b">{item.Name}</td>
                <td className="py-2 px-4 border-b">{item.Age}</td>
                <td className="py-2 px-4 border-b">{item.SumAssured}</td>
                <td className="py-2 px-4 border-b">{item.Premium}</td>
                <td className="py-2 px-4 border-b">{item.PolicyStartDate}</td>
                <td className="py-2 px-4 border-b">{item.Product}</td>
                <td className="py-2 px-4 border-b">{item.Name}</td>
                {item.PortDate && <td className="py-2 px-4 border-b">{new Date(item.PortDate).toLocaleDateString()}</td>}
                {item.PolicyRenewalStartDate && <td className="py-2 px-4 border-b">{new Date(item.PolicyRenewalStartDate).toLocaleDateString()}</td>}
                {item.Company && <td className="py-2 px-4 border-b">{item.Company}</td>}
                {item.Product && <td className="py-2 px-4 border-b">{item.Product}</td>}
                {item.Commulative && <td className="py-2 px-4 border-b">{item.Commulative}</td>}
                {item.Ped && <td className="py-2 px-4 border-b">{item.Ped}</td>}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HealthTable;
