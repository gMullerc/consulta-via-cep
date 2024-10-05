type Props = {
    label: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: () => void;
    name?: string;
    error?: string;
    disabled?: boolean;
};

export const TextField = (props: Props) => {
    return <>
        <label className="block text-sm font-medium leading-6 text-gray-900">
            {props.label}
        </label>
        <input
            disabled={props.disabled}
            type="text"
            name={props.name}
            value={props.value}
            onChange={props.onChange}
            onBlur={props.onBlur}
            placeholder={props.placeholder}
            className={`placeholder:italic placeholder:text-slate-400 pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${props.error ? 'ring-red-500' : ''}`}
        /> 
    </>
}