"use client";
import useCountries from "@/app/hooks/useCountries";
import { FC } from "react";
import Select from "react-select";

export type CountrySelectValue = {
  label: string;
  value: string;
  region: string;
  latlang: number[];
  flag: string;
};

interface CountrySelectProps {
  value?: CountrySelectValue;
  onChange: (value: CountrySelectValue) => void;
}

const CountrySelect: FC<CountrySelectProps> = ({ value, onChange }) => {
  const { getAll } = useCountries();
  return (
    <div>
      <Select
        placeholder="Anywhere"
        isClearable
        options={getAll()}
        value={value}
        onChange={(value) => onChange(value as CountrySelectValue)}
        formatOptionLabel={(option: any) => (
          <div className="flex flex-row items-center gap-4">
            <div className="">{option.flag}</div>
            <div className="text-slate-800 font-semibold cursor-pointer">
              {option.label}{" "}
              <span className="text-neutral-500 ml-1 font-medium">
                {option.region}
              </span>
            </div>
          </div>
        )}
        classNames={{
          control: () => "p-3 border-2",
          input: () => "text-lg",
          option: () => "text-lg",
        }}
        theme={(theme) => ({
          ...theme,
          borderRadius: 6,
          colors: {
            ...theme.colors,
            primary: "#C026D3",
            primary25: "#F0ABFC",
          },
        })}
      />
    </div>
  );
};

export default CountrySelect;
