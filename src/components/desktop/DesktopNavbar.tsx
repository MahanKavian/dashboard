import Image from "next/image";
import {exportIcon, menuIcon} from "../../../public/assets/icons/icons";
import {Container} from "@/components/base/layout/Container";

interface Props {
    
}

export function DesktopNavbar({}: Props) {
    return (
        <nav className={"w-full bg-white border-b py-3 px-5 "}>
            <Container>
                <div className={"w-full flex items-center justify-between"}>
                        <ul className={"flex items-center gap-8 text-sm text-dark-100"}>
                            <li className={"flex gap-2 items-center text-xl font-semibold text-dark-100"}>
                                <Image src={"/assets/images/desktop-avatar.png"} alt={"Van Ardsel"} width={32} height={32}/>
                                <span className={"capitalize"}>
                            van ardsel
                        </span>
                            </li>
                            <li className={"is-active"}>Home</li>
                            <li className={"is-active"}>Timeline</li>
                            <li className={"is-active"}>Chat</li>
                            <li className={"is-active"}>Assigned to you</li>
                        </ul>
                        <ul className={"flex items-center gap-3"}>
                            <li>
                                <i>{exportIcon}</i>
                            </li>
                            <li>
                                <i>{menuIcon}</i>
                            </li>
                        </ul>
                </div>
            </Container>
        </nav>
    );
}