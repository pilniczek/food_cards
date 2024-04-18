"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";

import FormProvider from "@/components/Form/Provider";
import { useRouter } from "@/navigation";
import supabase from "@/supabase";

import Form from "../";
import { type Error } from "../types";
import { type Data } from "./types";
import { validationFood } from "./validation";

const CreateFood = ({ translate }: { translate: { submit: string } }) => {
	const router = useRouter();
	const [error, setError] = useState<Error | undefined>();

	const methodsParams = {
		defaultValues: {
			name: "",
			type: "",
			content: "",
		},
		resolver: yupResolver(validationFood()),
	};

	const handleCreate = async (formData: Data) => {
		const { error, status } = await supabase.from("food").insert(formData).select();
		if (status === 404) {
			setError({ message: "endpoint not found" });
		} else if (error != null) {
			setError(error);
		} else {
			router.back();
		}
	};

	return (
		<FormProvider methodsParams={methodsParams} onSubmit={handleCreate}>
			<Form translate={translate} error={error} />
		</FormProvider>
	);
};

export default CreateFood;
