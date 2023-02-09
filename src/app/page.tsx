import { Icon, Library, Navigation, Showcase, SiteHeader } from "@/components";
import CuztomIconz from "../icons/optimized-icons";

const genIconShowcase = () => {
	
	const iconArray = [];
	for (let icon in CuztomIconz) {
		iconArray.push(<Showcase name={icon} />)
	}
	return iconArray;
}

export default function Home() {

	const iconArray = genIconShowcase();

  return (
    <>
      <SiteHeader icons={iconArray} />
      <Navigation />
      <Library>
				{iconArray}
      </Library>
    </>
  );
}
