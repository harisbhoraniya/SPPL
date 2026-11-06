import { cn } from "@/lib/utils";

export const BodyCopyText = ({ children, className, ...props }) => {
	return (
		<div
			className={cn("text-gray-700 leading-normal text-[14px] normal-case", className)}
			{...props}
		>
			{children}
		</div>
	);
};
