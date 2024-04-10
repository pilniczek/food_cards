"use client";
import ActionCard, { type ActionCardProps } from "@/components/Card/ActionCard";
import { useRouter } from "@/navigation";

interface ActionCardLinkProps extends Omit<ActionCardProps, "onClick"> {
	route: string;
}

const ActionCardLink = ({ route, ...rest }: ActionCardLinkProps) => {
	const router = useRouter();
	return <ActionCard onClick={() => router.push(route)} {...rest} />;
};

export default ActionCardLink;
