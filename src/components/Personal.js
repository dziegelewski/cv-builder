import React from 'react';
import Section from './Utils/Section';
import { styled, offset, enlight } from './Styles';

const PersonalLabel = styled.td`
	${enlight()};
	width: ${offset.leftLabel * 1.5}px;
`;

const Photo = styled.img`
	height: 100%;
	position: absolute;
	right: ${offset.pageSide}px;
	bottom: 0;
`;

const Personal = ({ personal, photo }) => {
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
				<PersonalLabel>
					{row.label}:
				</PersonalLabel>
				<td>
					{row.value}
				</td>
			</tr>
		)

    return (
        <Section mainTitle={name}>
						<table>
							<tbody>
								{rows.map(renderRow)}
							</tbody>
						</table>
						{photo && (
							<Photo src={photo} />
						)}
				</Section>
    )
};

export default Personal;