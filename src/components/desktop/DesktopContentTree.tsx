import {downArrow} from "../../../public/assets/icons/icons";

interface Props {

}

export function DesktopContentTree({}: Props) {
    return (
        <ul className={"text-sm text-dark-100 capitalize"}>
            <li>
                <div className={"flex items-center gap-2"}>
                    <i>{downArrow}</i>
                    <span>group title</span>
                </div>
                <ul className={"pl-4"}>
                    <li className={"my-2"}>
                        <div className={"flex items-center gap-2"}>
                            <i>{downArrow}</i>
                            <span>option</span>
                        </div>
                    </li>
                    <li className={"my-2"}>
                        <div className={"flex items-center gap-2"}>
                            <i>{downArrow}</i>
                            <span>option</span>
                        </div>
                        <ul className={"pl-6"}>
                            <li className={"my-2"}>
                                <div className={"flex items-center gap-2"}>
                                    <i>{downArrow}</i>
                                    <span>item</span>
                                </div>
                            </li>
                            <li className={"my-2"}>
                                <div className={"flex items-center gap-2"}>
                                    <i>{downArrow}</i>
                                    <span>item</span>
                                </div>
                            </li>
                            <li className={"my-2"}>
                                <div className={"flex items-center gap-2"}>
                                    <i>{downArrow}</i>
                                    <span>item</span>
                                </div>
                            </li>
                            <li className={"my-2"}>
                                <div className={"flex items-center gap-2"}>
                                    <i>{downArrow}</i>
                                    <span>item</span>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>
    );
}