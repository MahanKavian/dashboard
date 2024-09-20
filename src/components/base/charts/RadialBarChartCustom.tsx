import {
    RadialBarChart,
    RadialBar,
    Legend,
    PolarAngleAxis,
} from "recharts";
import {useEffect, useState} from "react";

const data = [
    {
        name: "+30",
        uv: 18,
        pv: 2400,
        fill: "#555555",
    },
    {
        name: "+30",
        uv: 26,
        pv: 4567,
        fill: "#2563EB",
    },
    {
        name: "+30",
        uv: 31,
        pv: 1398,
        fill: "#3B82F6",
    },
    {
        name: "+30",
        uv: 35.22,
        pv: 9800,
        fill: "#AAAAAA",
    },
    {
        name: "+30",
        uv: 45.63,
        pv: 3908,
        fill: "#60A5FA",
    },
    {
        name: "+30",
        uv: 51.63,
        pv: 4800,
        fill: "#1D4ED8",
    },
    {
        name: "+30",
        uv: 50,
        pv: 4800,
        fill: "#1E3A8A",
    },
    {
        name: "+30",
        uv: 70,
        pv: 4800,
        fill: "#1E3A8A",
    },
];

const style = {
    top: 20,
    left: 200,
    fontsize: "12px",
    lineHeight: "15px",
};

export default function RadialBarChartCustom() {
    const [isClient, setIsClient] = useState<boolean>(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        isClient && <div className={"flex flex-col items-center relative gap-5"}>
            <RadialBarChart
                width={300}
                height={300}
                cx={150}
                cy={150}
                innerRadius={10}
                outerRadius={140}
                barSize={8}
                data={data}
            >
                <RadialBar
                    minAngle={90}
                    isAnimationActive={false}
                    background
                    clockWise={false}
                    dataKey="uv"
                />
                <PolarAngleAxis
                    tick={false}
                    domain={[0, 100]}
                    type="number"
                    axisLine={false}
                    reversed
                />
                <Legend
                    iconSize={10}
                    width={120}
                    height={140}
                    layout="vertical"
                    verticalAlign="top"
                    wrapperStyle={style}
                />
            </RadialBarChart>
        </div>
    );
}
