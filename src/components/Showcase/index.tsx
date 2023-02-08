import { Icon } from "../Icon";
import "./styles.scss";

import CuztomIconz from "../../icons/optimized-icons";


export const Showcase = ({ name }: any) => {

	const copyToClipboard = (data: string) => navigator.clipboard.writeText(data.toString());

	const svg = CuztomIconz[name];

	return (
    <div className="showcase">
      <div className="showcase-container">
				<div className="container-sample">
					<Icon name={name} fontSize={2} />
				</div>
        <div className="container-overlay">
          <button onClick={() => copyToClipboard(svg)}>copy SVG</button>
					<button onClick={() => copyToClipboard('jsx')}>copy JSX</button>
        </div>
      </div>
      <p className="showcase-title">{name}</p>
    </div>
  );
}