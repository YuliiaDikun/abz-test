import * as yup from "yup";

const FILE_SIZE = 5000000;
const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg"];

export const userSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, "too short")
    .max(60, "too long")
    .required("required field"),
  email: yup
    .string()
    .matches(
      // eslint-disable-next-line
      /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/,
      "invalid email"
    )
    .required("required field"),
  phone: yup
    .string()
    .matches(
      // eslint-disable-next-line
      /^[\+]{0,1}380([0-9]{9})$/,
      "invalid number"
    )
    .required("required field"),
  position_id: yup.number().required("required field").oneOf([1, 2, 3, 4]),
  photo: yup
    .mixed()
    .required("required field")
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
