"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

import HiddenIdInput from "@/components/Form/HiddenIdInput";
import FormProvider from "@/components/Form/Provider";
import { useRouter } from "@/navigation";
import supabase from "@/supabase";

import Form from "../";
import { type Error } from "../types";
import { type Data } from "./types";
import { validationFood } from "./validation";

const EditFood = ({ translate }: { translate: { submit: string } }) => {
	const router = useRouter();
	const [error, setError] = useState<Error | undefined>();
	const searchParams = useSearchParams();

	const methodsParams = {
		defaultValues: {
			id: searchParams.get("id") ?? "",
			name: searchParams.get("name") ?? "",
			type: searchParams.get("type") ?? "",
			content: searchParams.get("content") ?? "",
		},
		resolver: yupResolver(validationFood()),
	};

	const handleUpdate = async (formData: Data) => {
		if (formData.id != null) {
			const { error, status } = await supabase
				.from("food")
				.update(formData)
				.eq("id", formData.id)
				.select();
			if (status === 404) {
				setError({ message: "endpoint not found" });
			} else if (error != null) {
				setError(error);
			} else {
				router.back();
			}
		} else {
			setError({ message: "missing food id" });
		}
	};

	return (
		<FormProvider methodsParams={methodsParams} onSubmit={handleUpdate}>
			<Form translate={translate} error={error}>
				<HiddenIdInput name="id" label="id" />
			</Form>
		</FormProvider>
	);
};

export default EditFood;
