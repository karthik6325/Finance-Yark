import React from 'react'

const UserProfileInfo = ({ name, email, location, dob, phoneNumber, username, verified }) => {
	return (
		<div className="w-full bg-white p-4 rounded-sm border border-gray-200 flex flex-col">
			<strong className="text-gray-700 font-medium mb-2">User Profile</strong>
			<div className="text-gray-700 mb-1">
				<strong>Name:</strong> {name}
			</div>
			<div className="text-gray-700 mb-1">
				<strong>Email:</strong> {email}
			</div>
			<div className="text-gray-700 mb-1">
				<strong>Location:</strong> {location}
			</div>
			<div className="text-gray-700 mb-1">
				<strong>Date of Birth:</strong> {dob}
			</div>
			<div className="text-gray-700 mb-1">
				<strong>Phone Number:</strong> {phoneNumber}
			</div>
			<div className="text-gray-700 mb-1">
				<strong>Username:</strong> {username}
			</div>
			<div className="text-gray-700">
				<strong>Verified:</strong> {verified ? 'Yes' : 'No'}
			</div>
		</div>
	)
}

export default UserProfileInfo
