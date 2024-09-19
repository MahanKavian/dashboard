import {IconBox} from "@/components/base/IconBox";
import {
    calendarIcon,
    chatIcon,
    colorfulMenuIcon,
    groupIcon,
    notificationIcon
} from "../../../public/assets/icons/icons";

interface Props {
    
}

export function MobileNavigateBar({}: Props) {
    return (
        <ul className={"w-full fixed flex items-center justify-between p-4 md:px-10 bg-white z-50 border-t bottom-0 right-0"}>
            <li>
                <IconBox icon={notificationIcon} text={"activity"}/>
            </li>
            <li>
                <IconBox icon={chatIcon} text={"chat"}/>
            </li>
            <li>
                <IconBox icon={groupIcon} text={"teams"}/>
            </li>
            <li>
                <IconBox icon={calendarIcon} text={"calendar"}/>
            </li>
            <li>
                <IconBox icon={colorfulMenuIcon} text={"more"} boxIconClass={"text-active"}/>
            </li>

        </ul>
    );
}