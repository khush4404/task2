import React from "react";
import { Button } from "../utils/Button";

export const Pagination = ({
	totalPages,
	currentPage,
	setCurrentPage,
	className = "",
}) => {
	const goToPage = (page) => {
		if (page >= 1 && page <= totalPages) {
			setCurrentPage(page);
		}
	};

	const generatePageNumbers = () => {
		const pages = [];

		if (totalPages <= 5) {
			for (let i = 1; i <= totalPages; i++) pages.push(i);
		} else {
			if (currentPage <= 3) {
				pages.push(1, 2, 3, 4, "...", totalPages);
			} else if (currentPage >= totalPages - 2) {
				pages.push(
					1,
					"...",
					totalPages - 3,
					totalPages - 2,
					totalPages - 1,
					totalPages
				);
			} else {
				pages.push(
					1,
					"...",
					currentPage - 1,
					currentPage,
					currentPage + 1,
					"...",
					totalPages
				);
			}
		}

		return pages;
	};

	const pageNumbers = generatePageNumbers();

	return (
		<div className={`flex items-center gap-1 sm:gap-2 ${className}`}>
			<Button
				onClick={() => goToPage(currentPage - 1)}
				text="Prev"
				className="!px-1 sm:!px-3 !w-fit text-sm"
			/>
			<Button
				onClick={() => goToPage(1)}
				text="First"
				className="!px-1 sm:!px-3 !w-fit text-sm"
			/>
			{pageNumbers.map((item) =>
				item === "..." ? (
					<>
						<Button
							disabled={true}
							text="..."
							className="!px-1 sm:!px-3 !py-0.5 sm:!py-1 !w-fit"
						/>
					</>
				) : (
					<Button
						key={item}
						onClick={() => goToPage(item)}
						text={String(item)}
						className={`!px-2 sm:!px-4 !py-1 sm:!py-2 font-semibold rounded-lg shadow-lg transition-colors duration-300 ${currentPage === item
							? "text-lg ring-2 ring-ring"
							: ""
							}`}
					/>
				)
			)}
			<Button
				onClick={() => goToPage(totalPages)}
				text="Last"
				className="!px-1 sm:!px-3 !w-fit text-sm"
			/>
			<Button
				onClick={() => goToPage(currentPage + 1)}
				text="Next"
				className="!px-1 sm:!px-3 !w-fit text-sm"
			/>
		</div>
	);
};
