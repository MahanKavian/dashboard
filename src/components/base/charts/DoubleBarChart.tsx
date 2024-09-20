import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Rectangle,
} from "recharts";
import {ChartHeader} from "@/components/base/charts/ChartHeader";
import {useEffect, useState} from "react";

const data = [
    {
        name: "XS",
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: "S",
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: "M",
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: "L",
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: "XL",
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: "XXL",
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },

];

export default function DoubleBarChart() {
    const [isClient, setIsClient] = useState<boolean>(false);

    useEffect(() => {
        setIsClient(true);
    }, [])

    return (
        isClient && <div className={"flex flex-col items-center gap-6 mb-8"}>
            <ChartHeader isDoubleBarChart={true}/>
            <BarChart
                width={350}
                height={250}
                data={data}
                margin={{
                    right: 35,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Bar
                    dataKey="uv"
                    fill="#93C5FD"
                    activeBar={<Rectangle fill="pink" stroke="blue" />}
                />
                <Bar
                    dataKey="pv"
                    fill="#1D4ED8"
                    activeBar={<Rectangle fill="gold" stroke="purple" />}
                />
            </BarChart>
        </div>

    );
}
