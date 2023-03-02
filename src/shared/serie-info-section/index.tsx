import React, { useState } from 'react';

import './index.scss';

interface SerieInfoSectionProps {
	InfoNumber: number;
}

const SerieInfoSection = ({ InfoNumber }: SerieInfoSectionProps) => {
	return <div className='box'>{Math.round(InfoNumber)}</div>;
};

export default SerieInfoSection;
