import {Container} from "@/components/base/Container";
import {ChartBox} from "@/components/base/ChartBox";
import PieChartCustom from "@/components/base/charts/PieChartCustom";

interface Props {

}

export function MobileContent({}: Props) {
    return (
        <Container>
            <div className={"w-full flex flex-col gap-2"}>
                <ChartBox chartName={"chart 1"} chart={<PieChartCustom percentage={72} />}/>
            </div>
        </Container>
    );
}