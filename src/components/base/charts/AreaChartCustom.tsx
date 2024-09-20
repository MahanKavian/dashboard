import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer, Legend
} from "recharts";
import React, {useEffect, useState} from "react";
import {ChartHeader} from "@/components/base/charts/ChartHeader";

const data = [
    {
        name: "Jan",
        uv: 4000,
        sell: 2400,
        amt: 2400
    },
    {
        name: "Feb",
        uv: 3000,
        sell: 1398,
        amt: 2210
    },
    {
        name: "Mar",
        uv: 2000,
        sell: 7000,
        amt: 2290
    },
    {
        name: "Apr",
        uv: 2780,
        sell: 3908,
        amt: 2000
    },
    {
        name: "May",
        uv: 1890,
        sell: 4800,
        amt: 2181
    },
    {
        name: "Jun",
        uv: 2390,
        sell: 3800,
        amt: 2500
    },

];

export default function AreaChartCustom() {
    const [isClient, setIsClient] = useState<boolean>(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        isClient && <div className={"w-full h-[250px] flex flex-col items-center  gap-3 mb-10 md:mb-8"}>
            <ChartHeader/>
            <ResponsiveContainer>
                <AreaChart
                    data={data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area isAnimationActive={false} type="linear" dataKey="sell" stroke="#8884d8" fill="#637CEF" />
                    <Area isAnimationActive={false} type="linear" dataKey="uv" stroke="#FFF" fill="#00B7C3" />
                    <Legend/>
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}
