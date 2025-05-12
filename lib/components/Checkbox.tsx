import { Tick } from "../icons";
import { cn } from "../utils/func";

export const Checkbox = ({ checked = false, onChecked }: { checked: boolean, onChecked: (checked: boolean) => void }) => {
    const handleChange = () => {
        onChecked(!checked)
    }

    return <div className="inline-flex items-center">
        <label className="flex items-center cursor-pointer relative">
            <input type="checkbox" checked={checked} onChange={handleChange} className={cn("peer h-5 w-5 cursor-pointer transition-all duration-300 appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-green-800 checked:border-green-800", checked && '')} id="check4" />
            <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Tick />
            </span>
        </label>
    </div>;
};

export default Checkbox;
