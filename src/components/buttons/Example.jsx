// src/pages/components/ButtonPage.jsx
import { useState } from 'react';
import React, { forwardRef } from 'react';
import CodeLayout from '../../componentLayout/CodeLayout';

const code = `import React from 'react';

export default function Example() {
  return (
    <button
      className='inline-flex curso  r-pointer items-center justify-center rounded-md bg-black px-4 py-2 text-white text-lg font-semibold shadow-sm hover:bg-black/80'
    >
      Button-1
    </button>
  );
}
`;

const code2 = `import React from 'react';

export default function Example() {
  return (
    <button
      className='inline-flex cursor-pointer items-center justify-center rounded-md bg-black px-4 py-2 text-white text-lg font-semibold shadow-sm hover:bg-black/80'
    >
      Button-2
    </button>
  );
}
`;


export default function ExampleButtonPage() {

    return (
        <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4 items-start justify-between">
                <h2 className="font-bold tracking-tight">exampleeeeeeee Button</h2>
                <p className="text-foreground">
                    Displays a button or a component that looks like a button.
                </p>
            </div>

            <CodeLayout  filename='button-1' code={code}>
                <Button>Button-1</Button>
            </CodeLayout>

            <CodeLayout filename='button-2' code={code2} >
                <Button>Button-2</Button>
            </CodeLayout>

        </div>

    );
}


const Button = forwardRef(function Button(
    { as: Comp = 'button', className = '', children = 'Button', ...props },
    ref
) {
    const base = 'inline-flex cursor-pointer items-center justify-center rounded-md px-4 py-2 text-lg font-semibold shadow-sm ' +
        'bg-[var(--btn-bg)] text-[var(--btn-fg)] hover:opacity-90';
    return (
        <Comp ref={ref} className={`${base} ${className}`} {...props}>
            {children}
        </Comp>
    );
});