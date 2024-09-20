import {DesktopNavbar} from "@/components/desktop/DesktopNavbar";
import {DesktopHeader} from "@/components/desktop/DesktopHeader";
import {DesktopContent} from "@/components/desktop/DesktopContent";

interface Props {
    
}

export function DesktopApp({}: Props) {
    return (
        <div className={"w-full flex-col hidden lg:flex"}>
            <>
                <DesktopNavbar/>
            </>
            <>
                <DesktopHeader/>
            </>
            <>
                <DesktopContent/>
            </>
        </div>
    );
}