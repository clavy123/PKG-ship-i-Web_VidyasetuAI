import { Controller } from "react-hook-form";

export const FormInput = ({
  label,
  name,
  control,
  placeholder,
  type = "text",
  rules,
  ...rest
}) => (
  <Controller
    name={name}
    control={control}
    rules={rules}
    render={({ field, fieldState }) => (
      <div className="mb-4 w-full">
        {label && (
          <label className="block mb-1 text-sm text-gray-300">{label}</label>
        )}
        <input
          {...field}
          type={type}
          placeholder={placeholder}
          className={`w-full px-3 py-2 rounded bg-gray-900 border ${
            fieldState.error ? "border-red-500" : "border-indigo-500"
          } focus:outline-none focus:ring-2 focus:ring-indigo-400 text-base text-gray-200`}
          {...rest}
        />
        {fieldState.error && (
          <span className="text-xs text-red-400">
            {fieldState.error.message}
          </span>
        )}
      </div>
    )}
  />
);
