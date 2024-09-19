import React, {useEffect, useState} from 'react';
import { PieChart, Pie, Cell } from 'recharts';

interface Props {
    percentage: number;
}

interface PieChartData {
    name: string;
    value: number;
}


export default function PieChartCustom({ percentage } : Props) {
    const [isClient, setIsClient] = useState<boolean>(false);

    useEffect(() => {
        setIsClient(true);
    }, [])

    const data: PieChartData[] = [
        { name: 'Progress', value: percentage },
        { name: 'Remaining', value: 100 - percentage },
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
                <PieChart width={150} height={150}>
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
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
                        ))}
                    </Pie>
                </PieChart>
                <div
                    className={"absolute text-3xl font-semibold text-dark-100 top-[60%] left-[50%] -translate-1/2"}
                    style={{
                        transform: 'translate(-50%, -50%)',
                    }}
                >
                    {percentage}%
                </div>
                <div className={"w-[190px] justify-between mx-auto text-xs font-semibold text-dark-100-100 bottom-[155px] absolute flex items-center"}>
                    <div className={"text-center"}>0</div>
                    <div className={"text-center"}>100</div>
                </div>
            </div>
    );
};

