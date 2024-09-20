import {burgerMenuIcon, searchIcon} from "../../../public/assets/icons/icons";
import {ReactNode} from "react";
import {FormControlLabel, Radio, RadioGroup} from "@mui/material";
import {Container} from "@/components/base/layout/Container";

interface Props {

}

export function DesktopHeader({}: Props) {
    let liItems: ReactNode[] = [];

    for (let i = 0; i < 8; i++) {
        liItems.push(
            <li key={i.toString()} className={`pr-1 ${i === 2 || i === 5 ? "border-r mr-2" : ""}`}>
                <FormControlLabel
                    value={`text${i}`}
                    control={
                        <Radio
                            sx={{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 18,
                                },
                            }}
                        />
                }
                    label={<span className={"text-sm"}>Text</span>}
                />
            </li>
        )
    }

    return (
        <div className={"w-full border-b"}>
            <Container>
                <div className={"flex items-center justify-between"}>
                     <RadioGroup
                            row
                            aria-labelledby="demo-form-control-label-placement"
                            name="position"
                            defaultValue="top"
                    >
                        <ul className={"flex items-center gap-2"}>
                            <li>
                                <i>{burgerMenuIcon}</i>
                            </li>
                            {
                                liItems.map((liItem: ReactNode,) => {
                                    return (
                                        liItem
                                    )
                                })
                            }
                        </ul>
                    </RadioGroup>
                    <div className={"flex items-center gap-2"}>
                        <span className={"text-dark-100 text-sm"}>Filter</span>
                        <div className={"border px-2 gap-2 flex items-center rounded border-b-dark-100"}>
                            <i>{searchIcon}</i>
                            <input className={"py-1 text-sm text-dark-100 focus:outline-none"} placeholder={"Find"} type="text"/>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}