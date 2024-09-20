import {Container} from "@/components/base/layout/Container";
import {ChartBox} from "@/components/base/charts/ChartBox";
import PieChartCustom from "@/components/base/charts/PieChartCustom";
import BarChartCustom from "@/components/base/charts/BarChartCustom";
import AreaChartCustom from "@/components/base/charts/AreaChartCustom";
import RadialBarChartCustom from "@/components/base/charts/RadialBarChartCustom";
import PieChartWithAngleCustom from "@/components/base/charts/PieChartWithAngleCustom";
import DoubleBarChart from "@/components/base/charts/DoubleBarChart";

interface Props {

}

export function MobileContent({}: Props) {
    return (
        <Container>
            <div className={"w-full flex flex-col gap-4 mb-20"}>
                <ChartBox chartName={"chart 1"} chart={<PieChartCustom percentage={72} />}/>
                <ChartBox chartName={"chart 2"} chart={<BarChartCustom/>}/>
                <ChartBox chartName={"chart 3"} chart={<AreaChartCustom/>}/>
                <ChartBox chartName={"chart 4"} chart={<RadialBarChartCustom/>}/>
                <ChartBox chartName={"chart 5"} chart={<PieChartWithAngleCustom/>} />
                <ChartBox chartName={"chart 5"} chart={<DoubleBarChart/>} />
            </div>
        </Container>
    );
}