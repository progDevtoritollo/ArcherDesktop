import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import toast from 'react-hot-toast';

import { LineChart, PieChart, BarChart } from 'features/charts/index.js';
import userService from 'shared/api/user/userService';
import { PersonalSevenDaysAvgShots } from 'app/utils/lineChartParsingData';

const UserStatistic = () => {
	const [dataCharts, setDataCharts] = useState({ last10ChecksShotsRange: null });

	const [lineChartByMonthAvgShot, setLineChartByMonthAvgShot] = useState<{
		labels: string[];
		datasets: {
			label: string;
			data: any;
			backgroundColor: string[];
			borderWidth: number;
		}[];
	} | null>(null);

	const { data } = useQuery(
		'get-user-statistic',
		async () => {
			return await userService.getUserStatistic();
		},
		{
			retry: 2,
			onSuccess: res => {
				setDataCharts(res.data);
				setLineChartByMonthAvgShot(PersonalSevenDaysAvgShots(res.data.avgTotalByMonth));
			},
			onError: (err: any) => {
				toast.error('Error... Data did not loaded ');
			},
		},
	);

	return (
		<div className=' user-statistic'>
			<h1>UserStatistic </h1>
			{/* <span>
        Графики показывающие сравнение с предыдущей неделей, с топ 1 лучником на
        данный момент в категории пользователя, Повысилачсь ли активность и на
        сколько, зайти в графики и глянуть какие можно еще придумать
      </span> */}
			<br />
			{lineChartByMonthAvgShot ? (
				<>
					<LineChart
						chart={lineChartByMonthAvgShot}
						titleDisplay={true}
						titleText='Средние показатели выстрелов'
					/>
				</>
			) : (
				<>
					<h5> LineChart Empty</h5>
				</>
			)}
			<hr />
			{dataCharts.last10ChecksShotsRange ? <BarChart data={dataCharts.last10ChecksShotsRange} /> : <h5> BarChart Empty</h5>}
			<hr />
			{dataCharts.last10ChecksShotsRange ? <PieChart data={dataCharts.last10ChecksShotsRange} /> : <h5> PieChart Empty</h5>}
			<hr />

			{/* <PolarChart /> */}
		</div>
	);
};

export default UserStatistic;
