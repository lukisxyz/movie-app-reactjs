import { useState } from "react";

export default function Dropdown({ callback, data }: { callback: (s: any) => void, data: Array<{ value: string, label: string }> }) {

    const [open, setOpen] = useState<boolean>(false);
    return (
        <div className="hs-dropdown relative inline-flex">
            <button onClick={() => setOpen(true)} id="hs-dropdown-default" type="button" className="hs-dropdown-toggle py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800">
                Actions
                <svg className="hs-dropdown-open:rotate-180 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
            </button>

{
    open &&  <div className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg p-2 mt-2 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full" aria-labelledby="hs-dropdown-default">
        {
            (data || []).map(v => (
        
                <button name={v.label} type="button" onClick={() => {
                    callback(v.value);
                    setOpen(false);
                }} className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100">
                    {v.label}
                </button>
            ))
        }
    </div>
}
        </div>
    )
}