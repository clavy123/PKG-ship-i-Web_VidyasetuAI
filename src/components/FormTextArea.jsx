import React from "react";
import { Controller } from "react-hook-form";

export const FormTextarea = ({
  name,
  control,
  label,
  placeholder,
  rules,
  maxLength,
  rows = 4,
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
        <textarea
          {...field}
          rows={rows}
          maxLength={maxLength}
          placeholder={placeholder}
          className={`w-full px-3 py-2 rounded bg-gray-900 border ${
            fieldState.error ? "border-red-500" : "border-indigo-500"
          } focus:outline-none focus:ring-2 focus:ring-indigo-400 text-base text-gray-200 resize-none`}
          {...rest}
        />
        <div className="flex justify-between">
          {fieldState.error && (
            <span className="text-xs text-red-400">
              {fieldState.error.message}
            </span>
          )}
          {maxLength && (
            <span className="text-xs text-gray-400 ml-auto">
              {field.value?.length || 0}/{maxLength}
            </span>
          )}
        </div>
      </div>
    )}
  />
);
