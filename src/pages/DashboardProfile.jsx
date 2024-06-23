import React from 'react'
import UserProfileInfo from '../components/pageComponents/dashboardAboutPage/userProfile'
import FamilyMemberInfo from '../components/pageComponents/dashboardAboutPage/familyMemberInfo'

// Mock user data
const user = {
	name: 'John Doe',
	email: 'john.doe@example.com',
	location: 'New York, USA',
	dob: '1980-01-01',
	phoneNumber: '123-456-7890',
	username: 'johndoe',
	verified: true,
	children: [
		{ name: 'Child One', dob: '2010-05-01', gender: 'Male' },
		{ name: 'Child Two', dob: '2012-07-15', gender: 'Female' }
	],
	spouse: { name: 'Jane Doe', dob: '1982-03-25', gender: 'Female' },
	parents: [
		{ name: 'Parent One', dob: '1955-05-20', gender: 'Male' },
		{ name: 'Parent Two', dob: '1958-09-10', gender: 'Female' }
	],
	siblings: [
		{ name: 'Sibling One', dob: '1985-02-20', gender: 'Female' },
		{ name: 'Sibling Two', dob: '1988-06-30', gender: 'Male' }
	]
}

export default function ProfileDashboard() {
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
			<FamilyMemberInfo title="Children" members={user.children} />
			<FamilyMemberInfo title="Spouse" members={[user.spouse]} />
			<FamilyMemberInfo title="Parents" members={user.parents} />
			<FamilyMemberInfo title="Siblings" members={user.siblings} />
		</div>
	)
}
