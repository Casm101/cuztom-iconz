import { ILibrary } from "@/types";
import "./styles.scss";


export const Library = ({ children }: ILibrary) => {
	return (
		<div className="library">
			{children}
		</div>
	)
}