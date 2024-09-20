import {DesktopContentTree} from "@/components/desktop/DesktopContentTree";
import {ChartBox} from "@/components/base/charts/ChartBox";
import PieChartCustom from "@/components/base/charts/PieChartCustom";
import BarChartCustom from "@/components/base/charts/BarChartCustom";
import AreaChartCustom from "@/components/base/charts/AreaChartCustom";
import RadialBarChartCustom from "@/components/base/charts/RadialBarChartCustom";
import PieChartWithAngleCustom from "@/components/base/charts/PieChartWithAngleCustom";
import DoubleBarChart from "@/components/base/charts/DoubleBarChart";

interface Props {
    
}

export function DesktopContent({}: Props) {
    return (
        <>
            <div className={"container mx-auto"}>
                <div className={"w-full flex gap-5"}>
                    <div className={"w-[13%]  py-8 px-2 border-r bg-white "}>
                        <DesktopContentTree/>
                    </div>
                    <div className={"flex-grow py-8 px-5 grid grid-cols-2 xl:grid-cols-3 gap-4"}>
                        <ChartBox chartName={"chart 1"} chart={<PieChartCustom percentage={72} />}/>
                        <ChartBox chartName={"chart 2"} chart={<BarChartCustom/>}/>
                        <ChartBox chartName={"chart 3"} chart={<AreaChartCustom/>}/>
                        <ChartBox chartName={"chart 4"} chart={<RadialBarChartCustom/>}/>
                        <ChartBox chartName={"chart 5"} chart={<PieChartWithAngleCustom/>} />
                        <ChartBox chartName={"chart 5"} chart={<DoubleBarChart/>} />
                    </div>
                </div>
            </div>
        </>
    );
}