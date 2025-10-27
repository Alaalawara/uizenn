import { forwardRef, useEffect } from 'react';
import CodeLayout from '../../componentLayout/CodeLayout';
import { useToc } from '../../contexts/TocContext';

const code = `import React from 'react';

export default function Example() {
  return (
    <button
      className='inline-flex cursor-pointer items-center justify-center rounded-md bg-black px-4 py-2 text-white text-lg font-semibold shadow-sm hover:bg-black/80'
    >
      Button
    </button>
  );
}
`;

export default function ButtonPage() {
     const { setItems } = useToc();

  const hasUsage = true;

  useEffect(() => {
    const list = [
      { id: "usage", label: "Usage" },
    ]
      .filter((s) =>
        (s.id === "usage" && hasUsage)
      );
    setItems?.(list);
    return () => setItems?.([]);
  }, [setItems, hasUsage]);


    return (
        <div className="flex flex-col gap-10">
            <div id='usage' className="flex flex-col gap-4 items-start justify-between scroll-mt-24">
                <h2 className="font-bold tracking-tight">Simple Button</h2>
                <p className="text-foreground">
                    Displays a button or a component that looks like a button.
                </p>
            </div>

            <CodeLayout filename='button.jsx' code={code}>
                <Button>Button</Button>
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