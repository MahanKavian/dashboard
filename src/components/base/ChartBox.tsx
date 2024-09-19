import {menuIcon} from "../../../public/assets/icons/icons";
import {ReactNode} from "react";

interface Props {
    chartName: string;
    chart: ReactNode;
}

export function ChartBox({chartName, chart}: Props) {
    return (
        <div className={"rounded-md border grid grid-cols-1 p-3"}>
            <div className={"w-full justify-between flex items-center mb-6"}>
                <span className={"capitalize text-dark-100 font-semibold text-sm"}>
                    {chartName}
                </span>
                <i>{menuIcon}</i>
            </div>
            <>
                {chart}
            </>
            <div className={"w-full flex justify-end items-center"}>
                <span className={"text-sm text-active font-semibold"}>View details</span>
            </div>
        </div>
    );
}