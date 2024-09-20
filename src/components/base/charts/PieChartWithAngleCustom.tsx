import { PieChart, Pie, Cell } from "recharts";
import {ChartHeader} from "@/components/base/charts/ChartHeader";
import {useEffect, useState} from "react";

const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
    { name: "Group E", value: 200 }
];
const COLORS = ["#A6E9ED", "#00666D", "#005B70", "#00B7C3", "#F5F5F5"];

export default function PieChartWithAngleCustom() {
    const [isClient, setIsClient] = useState<boolean>(false);

    useEffect(() => {
        setIsClient(true);
    }, [])

    return (
        isClient && <div className={"flex relative flex-col gap-3 items-center"}>
            <ChartHeader/>
            <PieChart width={250} height={250}>
                <Pie
                    data={data}
                    cx={120}
                    cy={110}
                    isAnimationActive={false}
                    innerRadius={80}
                    outerRadius={110}
                    fill="#8884d8"
                    paddingAngle={2}
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>
            <div className={"absolute top-[135px] text-2xl text-dark-100"}>
                1000
            </div>
        </div>

    );
}
