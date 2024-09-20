import React, {useEffect, useState} from "react";
import {
    ResponsiveContainer,
    ComposedChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";
import {chartMock} from "../../../../public/assets/mock/chartMock";


const BarChartLegend = (props: any) => {
    const { payload } = props;



    return (
        <ul className={"flex gap-2 text-sm justify-center p-0 m-0"}>
            {payload.map((entry: any, index: number) => (
                <li key={index.toString()} className={"flex my-2 text-dark-100 items-center gap-2"}>
                    <div>{entry.value}</div>
                </li>
            ))}
        </ul>
    );
}

export default function BarChartCustom() {
    const [isClient, setIsClient] = useState<boolean>(false);

    useEffect(() => {
        setIsClient(true);
    }, [])

    return (
        isClient && <div className={"w-full h-[300px]"}>
            <ResponsiveContainer>
                <ComposedChart
                    width={500}
                    height={250}
                    data={chartMock}
                    margin={{
                        right: 30,
                    }}
                >
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis dataKey="name" scale="band" />
                    <YAxis dataKey={"uv"} />
                    <Tooltip />
                    <Legend content={BarChartLegend} />
                    <Bar isAnimationActive={false} dataKey="sell" barSize={30} fill="#00B7C3" />
                </ComposedChart>
            </ResponsiveContainer>
        </div>
    );
}
