import React, {useEffect, useState} from 'react';
import {PieChart, Pie, Cell, Legend} from 'recharts';

interface Props {
    percentage: number;
}

interface PieChartData {
    name: string;
    value: number;
}

const PiChartLegend = (props: any) => {
    const { payload } = props;

    return (
        <ul className={"flex gap-2 text-sm justify-center p-0 m-0"}>
            {payload.map((entry: any, index: number) => (
                <li key={index.toString()} className={"hidden md:flex  text-dark-100 items-center gap-2"}>
                    <div style={{backgroundColor: `${entry.color }`}} className={`w-[11px] h-[11px]`}> </div>
                    <div>{entry.value}</div>
                </li>
            ))}
        </ul>
    );
}

export default function PieChartCustom({ percentage } : Props) {
    const [isClient, setIsClient] = useState<boolean>(false);

    useEffect(() => {
        setIsClient(true);
    }, [])

    const data: PieChartData[] = [
        { name: 'Label 1', value: percentage },
        { name: 'Label 2', value: 100 - percentage },
    ];

    const COLORS: string[] = ['#00bcd4', '#e0e0e0'];

    return (
        isClient &&
            <div className={"flex flex-col items-center gap-5"}>
                <div className={"flex gap-10 text-sm"}>
                    <div className={"text-dark-100 font-semibold pb-1 border-b-2 border-lightBlue"}>7 days</div>
                    <div className={"text-neutral-100 font-semibold pb-1 border-b-2 border-transparent"}>30 days</div>
                    <div className={"text-neutral-100 font-semibold pb-1 border-b-2 border-transparent"}>60 days</div>
                </div>
                <PieChart width={150} height={190}>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        innerRadius={50}
                        outerRadius={70}
                        startAngle={180}
                        endAngle={0}
                        paddingAngle={2}
                        dataKey="value"
                    >
                        {data.map((entry:PieChartData, index: number) => (
                            <Cell key={index.toString()} fill={COLORS[index % COLORS.length]}/>
                        ))}
                    </Pie>
                    <Legend content={PiChartLegend}/>
                </PieChart>
                <div
                    className={"absolute text-3xl font-semibold text-dark-100 top-[60%] left-[50%] -translate-1/2"}
                    style={{
                        transform: 'translate(-50%, -50%)',
                    }}
                >
                    {percentage}%
                </div>
                <div className={"w-[190px] justify-between mx-auto text-xs font-semibold text-dark-100-100 bottom-[170px] absolute flex items-center"}>
                    <div className={"text-center"}>0</div>
                    <div className={"text-center"}>100</div>
                </div>

            </div>
    );
};

