import { PostgrestError } from "@supabase/supabase-js";

import { type Database } from "@/types/supabase";

export type Data = Database["public"]["Tables"]["food"]["Row"][];

type Error = PostgrestError | null | undefined;

export type State =
	| {
			foodList?: Data | undefined;
			foodListError: Error;
	  }
	| {
			foodList: Data;
			foodListError?: Error | undefined;
	  }
	| {
			foodList: undefined;
			foodListError: undefined;
	  };

export type Action = {
	type: "SET_DATA" | "SET_ERROR" | "SET_DEFAULT";
	data?: Data;
	error?: Error;
};

export const initialState = {
	foodList: undefined,
	foodListError: undefined,
};

export const reducer = (state: State, action: Action): State => {
	switch (action.type) {
		case "SET_DATA":
			return {
				foodList: action.data,
				foodListError: undefined,
			};
		case "SET_ERROR":
			return {
				foodList: undefined,
				foodListError: action.error,
			};
		case "SET_DEFAULT":
			return initialState;
		default:
			return state;
	}
};
