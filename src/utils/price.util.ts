export function generatePrice(year: string, type: string): string {
	const basePrice: number = 100000; // Base price in Rupiah

	// Adjust price based on the type
	let typeMultiplier: number;
	switch (type.toLowerCase()) {
		case "movie":
			typeMultiplier = 1.5;
			break;
		case "series":
			typeMultiplier = 1.2;
			break;
		case "episode":
			typeMultiplier = 1.0;
			break;
		default:
			typeMultiplier = 1.35;
			break;
	}

	// Adjust price based on the year
	const currentYear: number = new Date().getFullYear();
	const yearNumbers = String(year).substring(0, 4);
	const yearMultiplier: number =
		1 + (currentYear - Number.parseInt(yearNumbers)) * 0.02; // Increase 2% for each year old

	const price: number = basePrice * typeMultiplier * yearMultiplier;

	// Format price in Indonesian Rupiah without fractional part
	const formattedPrice: string = new Intl.NumberFormat("id-ID", {
		style: "currency",
		currency: "IDR",
		minimumFractionDigits: 0,
		maximumFractionDigits: 0,
	}).format(price);

	return formattedPrice;
}
