import * as yup from "yup";

const FILE_SIZE = 70 * 70;
const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg"];

export const UserSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, "too short")
    .max(60, "too long")
    .required("required field"),
  email: yup
    .string()
    .matches(
      /^(?("")("".+?""@)|(([0-9a-zA-Z]((\.(?!\.))|[-!#\$%&'\*\+/=\?\^`\{\}\|~\w])*)(?<=[0-9a-zA-Z])@))(?(\[)(\[(\d{1,3}\.){3}\d{1,3}\])|(([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,6}))$/,
      "invalid email"
    )
    .required("required field"),
  phone: yup
    .string()
    .matches(/^\+380\d{9}$/, "invalid number")
    .required("required field"),
  position_id: yup.boolean().required("required field").oneOf([1, 2, 3, 4]),
  photo: yup
    .mixed()
    .required("A photo is required")
    .test(
      "fileSize",
      "File too large",
      (value) => value && value.size <= FILE_SIZE
    )
    .test(
      "fileFormat",
      "Unsupported Format",
      (value) => value && SUPPORTED_FORMATS.includes(value.type)
    ),
});
