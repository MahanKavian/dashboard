import {ReactNode} from "react";

interface Props {
    icon: ReactNode;
    text: string;
    boxIconClass?: string;
}

export function IconBox({icon, text, boxIconClass}: Props) {
    return (
        <div className={`flex flex-col gap-1 hover:cursor-pointer items-center text-sm ${boxIconClass}`}>
            <i>{icon}</i>
            <span className={"capitalize"}>{text}</span>
        </div>
    );
}