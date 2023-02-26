import { Icon } from "../Icon";
import "./styles.scss";


// TODO: Replace "any" declarations
export const Search = (handleSearchString: any) => {

	return (
		<div>
			<Icon name="search" fontSize={1.25}/>
			<input placeholder="Search" onKeyUp={(e) => handleSearchString(e.target.value)} />
		</div>
	)
};
