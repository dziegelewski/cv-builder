import React from 'react';

const Personal = ({ personal }) => {
    const {
			name,
			birthDate,
			address,
			phone,
			email
		} = personal;

		const rows = [
			{ label: 'Birth date', value: birthDate },
			{ label: 'Address', value: address },
			{ label: 'Phone', value: phone },
			{ label: 'Email', value: email },
		]

		const renderRow = (row, index) => (
			<tr key={index}>
				<td className="profile-label">
					<b>{row.label}:</b>
				</td>
				<td>
					{row.value}
				</td>
			</tr>
		)

    return (
        <section>
            <h1>{name}</h1>
						<table>
							{rows.map(renderRow)}
						</table>
				</section>
    )
};

export default Personal;