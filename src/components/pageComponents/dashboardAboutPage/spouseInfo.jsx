import React from 'react';

const SpouseInfo = ({ title, member }) => {
  return (
    <div className="w-full bg-white p-4 rounded-sm border border-gray-200 flex flex-col mt-4">
      <strong className="text-gray-700 font-medium mb-2 font-bold">{title}</strong>
        <div className="mb-2">
            <div className="text-gray-700 mb-1">
                <strong>{member.spouseGender === 'female' ? "Wife's Name:" : "Wife's Name:"}</strong> {member.spouseName}
            </div>
            <div className="text-gray-700 mb-1">
                <strong>{member.spouseGender === 'female' ? "Wife's DOB:" : "Husband's DOB:"}</strong> {new Date(member.spouseDOB).toLocaleDateString()}
            </div>
        </div>
    </div>
  );
};

export default SpouseInfo;