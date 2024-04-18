import { object } from "yup";

import { coreFood } from "../validation";

export const validationFood = () => object().shape(coreFood);
