import React, { useContext } from 'react';

import { styled, offset, highlight, Row } from '../styles';
import CVContext from './CVContext';
import Section from './Utils/Section';

const PersonalLabels = styled.div`
	margin-top: 20px;
`;

const PersonalLabel = styled.div`
	${highlight()};
	width: ${offset.leftLabel * 1.5}px;
`;

const Photo = styled.img`
	height: 100%;
	position: absolute;
	right: ${offset.pageSide}px;
	bottom: 0;
`;


const Personal = ({ personal, photo }) => {
  const { enablePhoto, enableBlind } = useContext(CVContext);

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
			<Row key={index}>
				<PersonalLabel>
					{row.label}:
				</PersonalLabel>
				<div>
					{row.value}
				</div>
			</Row>
		)

		if (enableBlind) {
			return null;
		}

    return (
			<Section broad mainTitle={name}>
					<PersonalLabels>
						{rows.map(renderRow)}
					</PersonalLabels>
					{(enablePhoto && photo) && (
						<Photo src={photo} />
					)}
			</Section>
    )
};

export default Personal;