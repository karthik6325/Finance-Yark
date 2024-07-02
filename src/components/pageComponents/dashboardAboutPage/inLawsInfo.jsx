import React from 'react';

const InLawsInfo = ({ title, members }) => {
  return (
    <div className="w-full bg-white p-4 rounded-sm border border-gray-200 flex flex-col mt-4">
      <strong className="text-gray-700 font-medium mb-2 font-bold">{title}</strong>
          <div className="mb-2">
                <div className="text-gray-700 mb-1">
                  <strong>Father in Law's Name:</strong> {members[0].fatherInLawName}
                </div>
                <div className="text-gray-700 mb-1">
                  <strong>Father in Law's DOB:</strong> {new Date(members[0].fatherInLawDOB).toLocaleDateString()}
                </div>
                <div className="text-gray-700 mb-1">
                  <strong>Mother in Law's Name:</strong> {members[0].motherInLawName}
                </div>
                <div className="text-gray-700 mb-1">
                  <strong>Mother in Law's DOB:</strong> {new Date(members[0].motherInLawDOB).toLocaleDateString()}
                </div>
          </div>
    </div>
  );
};

export default InLawsInfo;