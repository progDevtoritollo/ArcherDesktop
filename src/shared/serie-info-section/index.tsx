import React, { useState } from 'react';

import './index.scss';

interface SerieInfoSectionProps {
	InfoNumber: number;
}

const SerieInfoSection = ({ InfoNumber }: SerieInfoSectionProps) => {
	return <div className='box'>{InfoNumber}</div>;
};

export default SerieInfoSection;
