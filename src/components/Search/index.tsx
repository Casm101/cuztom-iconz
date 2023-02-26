import { Icon } from "../Icon";
import "./styles.scss";


// TODO: Replace "any" declarations
export const Search = ({ setSearchString }: any) => {

	return (
		<div>
			<Icon name="search" fontSize={1.25}/>
			<input placeholder="Search" onKeyUp={(e) => setSearchString(e.target.value)} />
		</div>
	)
};
