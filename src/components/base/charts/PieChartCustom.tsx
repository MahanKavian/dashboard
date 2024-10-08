import React, {useEffect, useState} from 'react';
import {PieChart, Pie, Cell, Legend} from 'recharts';
import {ChartHeader} from "@/components/base/charts/ChartHeader";

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
            <div className={"flex flex-col items-center relative gap-5"}>
                <ChartHeader/>
                <PieChart width={150} height={250}>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        innerRadius={50}
                        outerRadius={70}
                        startAngle={180}
                        endAngle={0}
                        paddingAngle={2}
                        isAnimationActive={false}
                        dataKey="value"
                    >
                        {data.map((entry:PieChartData, index: number) => (
                            <Cell key={index.toString()} fill={COLORS[index % COLORS.length]}/>
                        ))}
                    </Pie>
                    <Legend content={PiChartLegend}/>
                </PieChart>
                <div
                    className={"absolute text-3xl font-semibold text-dark-100 top-[52%] xl:top-[49%] left-[50%] -translate-1/2"}
                    style={{
                        transform: 'translate(-50%, -50%)',
                    }}
                >
                    {percentage}%
                </div>
                <div className={"w-[190px] justify-between mx-auto text-xs font-semibold text-dark-100-100 bottom-[120px] xl:bottom-[135px] absolute flex items-center"}>
                    <div className={"text-center"}>0</div>
                    <div className={"text-center"}>100</div>
                </div>

            </div>
    );
};

