import { IIcon } from "@/types"
import CuztomIconz from "../../icons/optimized-icons";


export const Icon = ({ name, fontSize = 1, color = 'black' }: IIcon) => {
	return (<span style={{ fontSize: `${fontSize}rem`, color: color }} dangerouslySetInnerHTML={{ __html: CuztomIconz[name as keyof typeof CuztomIconz].svg }} /> );
}