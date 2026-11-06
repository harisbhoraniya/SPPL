import { cn } from "@/lib/utils";

export const HeaderText = ({ children, className }) => {
	return (
		<div className={cn(`text-lg sm:text-xl md:text-2xl lg:text-[28px]  font-semibold text-center leading-tight text-[#20335C]`, className)}>
			{children}
		</div>
	);
};