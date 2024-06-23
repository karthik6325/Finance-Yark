import React from 'react';

const FamilyMemberInfo = ({ title, members }) => {
  return (
    <div className="w-full bg-white p-4 rounded-sm border border-gray-200 flex flex-col mt-4">
      <strong className="text-gray-700 font-medium mb-2">{title}</strong>
      {members && members.length === 0 ? (
        <div className="text-gray-700">No {title.toLowerCase()} available</div>
      ) : (
        members.map((member, index) => (
          <div key={index} className="mb-2">
            <div className="text-gray-700 mb-1">
              <strong>Name:</strong> {member.name}
            </div>
            <div className="text-gray-700 mb-1">
              <strong>Date of Birth:</strong> {new Date(member.dob).toLocaleDateString()}
            </div>
            {member.gender && (
              <div className="text-gray-700">
                <strong>Gender:</strong> {member.gender}
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default FamilyMemberInfo;
