import React from "react";

interface Props {
    isDoubleBarChart?: boolean;
}

export function ChartHeader({isDoubleBarChart}: Props) {
    return (
        <div className={"flex gap-10 text-sm"}>
            <div className={"text-dark-100 font-semibold cursor-pointer pb-1 border-b-2 border-lightBlue"}>{isDoubleBarChart ? "First tab" : "7 days"}</div>
            <div className={"text-neutral-100 font-semibold cursor-pointer pb-1 border-b-2 border-transparent"}>{isDoubleBarChart ? "Second tab" : "30 days"}</div>
            <div className={"text-neutral-100 font-semibold cursor-pointer pb-1 border-b-2 border-transparent"}>{isDoubleBarChart ? "Third tab" : "60 days"}</div>
        </div>
    );
}