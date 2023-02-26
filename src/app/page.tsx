"use client";
import { Library, Navigation, Showcase, SiteHeader } from "@/components";
import { useEffect, useState } from "react";
import CuztomIconz from "../icons/optimized-icons";


// Returns an array of all optimized icons
const getAllIconNames = () => {
	const iconArray: string[] = [];
	Object.keys(CuztomIconz).forEach((name) => {
		iconArray.push(name)
	});
	return iconArray;
}

// Function generates array of showcase components given a list of icon names
const genIconShowcase = (nameArray: string[]) => {
	const newArray: any[] = [];
	nameArray.map((iconName) => {
		newArray.push(
			<Showcase name={iconName} />
		);
	});
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
	const [iconNames, setIconNames] = useState<string[]>(getAllIconNames());
	const [icons, setIcons] = useState<any[]>([])

	useEffect(() => {
		const filteredNames = fiterArray(searchValue, iconNames);
		setIcons(genIconShowcase(filteredNames));
	}, [searchValue, iconNames])

  return (
    <>
			<SiteHeader icons={iconNames} />
			<Navigation handleSearch={setSearchValue} />
      <Library>
				{icons}
      </Library>
    </>
  );
}
