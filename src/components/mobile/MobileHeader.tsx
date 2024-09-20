interface Props {

}

export function MobileHeader({}: Props) {
    return (
        <ul className={"w-full grid grid-cols-3 items-center"}>
            <li className={"py-2 text-center hover:cursor-pointer px-8 text-sm text-dark-100 border-b-2 border-active font-semibold"}>Tab 1</li>
            <li className={"py-2 text-center hover:cursor-pointer px-8 text-sm text-dark-100 border-b-2 "}>Tab 2</li>
            <li className={"py-2 text-center hover:cursor-pointer px-8 text-sm text-dark-100 border-b-2 "}>Tab 3</li>
        </ul>
    );
}