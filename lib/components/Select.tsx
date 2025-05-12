import { ChangeEvent } from "react";

interface SelectProps {
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const Select = ({ onChange }: SelectProps) => {
  const handleOnChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange(event);
  };

  return (
    <form className="max-w-sm flex gap-2 items-center">
      <label
        htmlFor="countries"
        className="sm:block hidden text-sm font-medium text-gray-900 dark:text-white"
      >
        Filter
      </label>
      <select
        onChange={handleOnChange}
        id="countries"
        className="bg-gray-50 border h-8 border-gray-300 text-gray-900 text-sm rounded-lg focus-visible:ring-0 focus-visible:border-gray-300 focus:ring-0 focus:border-gray-300 block w-full px-2"
      >
        <option value="All">All</option>
        <option value="Incomplete">Incomplete</option>
        <option value="Complete">Complete</option>
      </select>
    </form>
  );
};

export default Select;
