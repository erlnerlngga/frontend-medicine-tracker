import toast from "react-hot-toast";

export interface ValueTypes {
  name?: string;
  email?: string;
}

function nameVerify(error: ValueTypes = {}, values: ValueTypes) {
  if (!values.name) {
    error.name = toast.error("Name Required....!");
  } else if (!values.name.trim().length) {
    error.name = toast.error("Invalid Name....!");
  }

  return error;
}

function emailVerify(error: ValueTypes = {}, values: ValueTypes) {
  if (!values.email) {
    error.email = toast.error("Email Required....!");
  } else if (!values.email.trim().length) {
    error.email = toast.error("Invalid Email Address....!");
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    error.email = toast.error("Invalid Email Address....!");
  }

  return error;
}

export async function registerValidation(values: ValueTypes) {
  let error = nameVerify({}, values);
  emailVerify(error, values);

  return error;
}

export async function loginValidation(values: ValueTypes) {
  let error = emailVerify({}, values);
  return error;
}
