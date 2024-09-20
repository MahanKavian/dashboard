import {MobileApp} from "@/components/mobile/MobileApp";
import {DesktopApp} from "@/components/desktop/DesktopApp";


export default function Home() {
  return (
    <>
      {/*MOBILE*/}
        <>
            <MobileApp/>
        </>
        <>
            <DesktopApp/>
        </>
    </>
  );
}
