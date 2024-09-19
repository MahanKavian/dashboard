import Image from "next/image";
import {botIcon, menuIcon} from "../../../public/assets/icons/icons";
import {MobileHeader} from "@/components/mobile/MobileHeader";

interface Props {

}

export function MobileNavbar({}: Props) {
    return (
        <nav className={"w-full bg-white"}>
            <div className={"w-full bg-white flex justify-between items-center p-3"}>
                <div className={"flex items-center gap-3"}>
                    <Image src={'/assets/images/avatar.png'} alt={"Avatar"} width={32} height={32}/>
                    <h1 className={"text-xl text-dark-100 font-semibold"}>
                        Van Arsdel
                    </h1>
                </div>
                <div className={"flex items-center gap-3"}>
                    <i className={"hover:cursor-pointer"}>{botIcon}</i>
                    <i className={"hover:cursor-pointer"}>{menuIcon}</i>
                </div>
            </div>
            <>
                <>
                    <MobileHeader/>
                </>
            </>
        </nav>
    );
}