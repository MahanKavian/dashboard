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
                <div className={"flex flex-col gap-1"}>
                    <span className={"capitalize text-dark-100 font-semibold text-sm"}>
                        {chartName}
                    </span>
                    <span className={"text-xs text-neutral-100 hidden md:block"}>
                        Description
                    </span>
                </div>
                <i>{menuIcon}</i>
            </div>
            <>
                {chart}
            </>
            <div className={"w-full flex justify-end md:justify-start md:mt-2 items-center"}>
                <span className={"text-sm text-active font-semibold"}>View details</span>
            </div>
        </div>
    );
}