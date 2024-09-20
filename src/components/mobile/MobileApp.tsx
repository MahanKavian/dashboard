import {MobileNavbar} from "@/components/mobile/MobileNavbar";
import {MobileNavigateBar} from "@/components/mobile/MobileNavigateBar";
import {MobileContent} from "@/components/mobile/MobileContent";

interface Props {

}

export function MobileApp({}: Props) {
    return (
        <div className={"relative lg:hidden pb-10"}>
            <>
                <MobileNavbar/>
            </>
            <>
                <MobileContent/>
            </>
            <>
                <MobileNavigateBar/>
            </>
        </div>
    );
}