"use client";
import { Icon, Library, Navigation, Showcase, SiteHeader } from "@/components";
import { useEffect, useState } from "react";
import CuztomIconz from "../icons/optimized-icons";


const getAllIconNames = () => {
	const iconArray = [];
	for (let name in CuztomIconz) {
		iconArray.push(name)
	}
	return iconArray;
}

const genIconShowcase = (nameArray: string[]) => {
	const newArray = [];
	for (let iconName in nameArray) {
		console.log(iconName);
		newArray.push(<Icon name={iconName} />)
	}
	return newArray;
}

// Function to filter out search from array
const fiterArray = (filterString: string, dataSet: string[]) => {
	const parsedFilterString = filterString.replace(' ', '');

	if (parsedFilterString === '') return dataSet;
	return dataSet.filter(item => item.includes(parsedFilterString));
};


export default function Home() {

	// Stateful variable declarations for search
	const [searchValue, setSearchValue] = useState('');
	const [iconNames, setIconNames] = useState<string[]>([]);
	const [icons, setIcons] = useState<any[]>([])

	useEffect(() => {
		setIconNames(getAllIconNames);
		const filteredNames = fiterArray(searchValue, iconNames);
		setIcons(genIconShowcase(filteredNames));
	}, [searchValue, iconNames])

  return (
    <>
			<SiteHeader icons={iconNames} />
      <Navigation />
      <Library>
				{icons}
      </Library>
    </>
  );
}
