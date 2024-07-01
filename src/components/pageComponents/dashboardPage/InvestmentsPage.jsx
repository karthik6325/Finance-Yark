import React from 'react';

export default function Investments() {
    const data = [
        {
            planName: 'Plan A',
            portfolio: 'P123456',
            dueDate: '2024-07-15',
            premium: '$1200',
            value: '$15000',
            maturity: '2025-12-01',
            goal: 'Retirement',
        },
        {
            planName: 'Plan B',
            portfolio: 'P789012',
            dueDate: '2024-08-20',
            premium: '$800',
            value: '$10000',
            maturity: '2026-03-15',
            goal: 'Education',
        },
        // Add more rows as needed
    ];

    return (
        <div className="p-4 bg-white">
            <h2 className="text-2xl font-semibold mb-4">Investments</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b">Plan Name</th>
                            <th className="py-2 px-4 border-b">Portfolio (Policy No)</th>
                            <th className="py-2 px-4 border-b">Due Date</th>
                            <th className="py-2 px-4 border-b">Premium</th>
                            <th className="py-2 px-4 border-b">Value</th>
                            <th className="py-2 px-4 border-b">Maturity</th>
                            <th className="py-2 px-4 border-b">Goal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index}>
                                <td className="py-2 px-4 border-b">{item.planName}</td>
                                <td className="py-2 px-4 border-b">{item.portfolio}</td>
                                <td className="py-2 px-4 border-b">{item.dueDate}</td>
                                <td className="py-2 px-4 border-b">{item.premium}</td>
                                <td className="py-2 px-4 border-b">{item.value}</td>
                                <td className="py-2 px-4 border-b">{item.maturity}</td>
                                <td className="py-2 px-4 border-b">{item.goal}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
