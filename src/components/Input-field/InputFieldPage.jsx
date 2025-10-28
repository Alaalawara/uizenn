import { useEffect, useState } from 'react';
import CodeLayout from '../../componentLayout/CodeLayout';
import { useToc } from '../../contexts/TocContext';

export default function InputFieldPage() {
    const { setItems } = useToc();

    const hasTextInput = true;
    const hasFileInput = true;
    const hasColorInput = true;
    const hasDateInput = true;
    const hasRangeInput = true;


    useEffect(() => {
        const list = [
            { id: "textInput", label: "Text Input" },
            { id: "fileInput", label: "File Input" },
            { id: "colorInput", label: "Color Input" },
            { id: "dateInput", label: "Date Input" },
            { id: "rangeInput", label: "Range Input" },
        ]
            .filter((s) =>
                (s.id === "textInput" && hasTextInput) ||
                (s.id === "fileInput" && hasTextInput) ||
                (s.id === "colorInput" && hasTextInput) ||
                (s.id === "dateInput" && hasTextInput) ||
                (s.id === "rangeInput" && hasTextInput)
      );
        setItems?.(list);
        return () => setItems?.([]);
    }, [setItems, hasTextInput, hasFileInput, hasColorInput, hasDateInput, hasRangeInput]);


    return (
        <div className="flex flex-col gap-10">
            <div id='textInput' className="flex flex-col gap-4 items-start justify-between scroll-mt-24">
                <h2 className="font-bold tracking-tight">Input Field</h2>
                <p className="text-foreground">
                    Displays a form input field or a component that looks like an input field.
                </p>
            </div>

            <CodeLayout filename='InputField.jsx' code={Code1}>
                <InputField />
            </CodeLayout>


            <div id="fileInput" className="flex flex-col gap-4 items-start scroll-mt-24">
                <h3 className="font-medium tracking-tight text-xl">File</h3>
            </div>

            <CodeLayout filename='FileInput.jsx' code={Code2}>
                <FileInput />
            </CodeLayout>

            <div id="colorInput" className="flex flex-col gap-4 items-start scroll-mt-24">
                <h3 className="font-medium tracking-tight text-xl">Color Input</h3>
            </div>

            <CodeLayout filename='ColorInput.jsx' code={Code3}>
                <ColorInput />
            </CodeLayout>

            <div id="dateInput" className="flex flex-col gap-4 items-start scroll-mt-24">
                <h3 className="font-medium tracking-tight text-xl">Date Input</h3>
            </div>

            <CodeLayout filename='DateInput.jsx' code={Code4}>
                <DateInput />
            </CodeLayout>
            <div id="rangeInput" className="flex flex-col gap-4 items-start scroll-mt-24">
                <h3 className="font-medium tracking-tight text-xl">Range Input</h3>
            </div>

            <CodeLayout filename='RangeInput.jsx' code={Code5}>
                <RangeInput />
            </CodeLayout>

        </div>
    );
}

const Code1 = `function InputField() {
    return (
        <div className='flex flex-col gap-2 items-start justify-center'>
            <p className='text-black'>Email</p>
            <input className='border-2 border-gray-300 rounded-lg px-2 py-1' placeholder='abc@email.com' type="email"/>
        </div>
    );
}
`;

const Code2 = `function FileInput() {
    return (
        <div className='flex flex-col gap-2 items-start justify-center'>
            <p className='text-black'>upload file</p>
            <input className='border-2 border-gray-300 rounded-lg px-2 py-1 text-black' type="file"/>
        </div>
    );
}
`;

const Code3 = `function ColorInput() {
     const [color, setColor] = useState("#000000");
    return (
        <div className='flex flex-col gap-2 items-start justify-center'>
            <p style={{ color }}>Choose Color</p>
            <input className='border-2 border-gray-300 rounded-xl px-2 py-2 w-25 h-10 text-black' type="color"
            value={color} onChange={(e)=> setColor(e.target.value)}/>
        </div>
    );
}
`;

const Code4 = `function DateInput() {
    return (
        <div className='flex flex-col gap-2 items-start justify-center'>
            <p>Select date</p>
            <input className='border-2 border-gray-300 rounded-lg px-2 py-1 text-black bg-gray-300' type="date"/>
        </div>
    );
}`;

const Code5 = `function RangeInput() {
    return (
        <div className='flex flex-col gap-2 items-start justify-center'>
            <p>Range</p>
            <input className='px-2 py-1 accent-gray-400' type="range"/>
        </div>
    );
}`;

function InputField() {
    return (
        <div className='flex flex-col gap-2 items-start justify-center'>
            <p className='text-black'>Email</p>
            <input className='border-2 border-gray-300 rounded-lg px-2 py-1' placeholder='abc@email.com' type="email" />
        </div>
    );
}

function FileInput() {
    return (
        <div className='flex flex-col gap-2 items-start justify-center'>
            <p className='text-black'>upload file</p>
            <input className='border-2 border-gray-300 rounded-lg px-2 py-1 text-black' type="file" />
        </div>
    );
}

function ColorInput() {
    const [color, setColor] = useState("grey");
    return (
        <div className='flex flex-col gap-2 items-start justify-center'>
            <p style={{ color }}>Choose Color</p>
            <input className='border-2 border-gray-300 rounded-xl px-2 py-2 w-25 h-10 text-black' type="color"
                value={color} onChange={(e) => setColor(e.target.value)} />
        </div>
    );
}

function DateInput() {
    return (
        <div className='flex flex-col gap-2 items-start justify-center'>
            <p>Select date</p>
            <input className='border-2 border-gray-300 rounded-lg px-2 py-1 text-black bg-gray-300' type="date" />
        </div>
    );
}

function RangeInput() {
    return (
        <div className='flex flex-col gap-2 items-start justify-center'>
            <p>Range</p>
            <input className='px-2 py-1 accent-gray-400' type="range" />
        </div>
    );
}