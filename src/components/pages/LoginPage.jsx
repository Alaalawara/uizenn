import { useEffect } from "react";
import CodeLayout from "../../componentLayout/CodeLayout";
import { useToc } from "../../contexts/TocContext";
import { TriangleAnimation } from "../animation/ShapeAnimtionPage";

export default function LoginPage() {
    const { setItems } = useToc();

    const hasInstallation = true;
    const hasUsage = true;
    const hasExamples = true;

    useEffect(() => {
        const list = [
            { id: "usage", label: "Usage" },
            { id: "examples", label: "Examples" }
        ]
            .filter((s) =>
                (s.id === "usage" && hasUsage) ||
                (s.id === "examples" && hasExamples)
            );
        setItems?.(list);
        return () => setItems?.([]);
    }, [setItems, hasInstallation, hasUsage, hasExamples]);

    return (
        <div className="flex flex-col gap-10">
            <div id="usage" className="flex flex-col gap-4 items-start scroll-mt-24">
                <h2 className="font-bold tracking-tight text-2xl">Login Page</h2>
                <p className="text-foreground">Login page ui for your application.</p>
            </div>

            <CodeLayout filename="SimpleSignUp.jsx" code={Code1}>
                <SimpleLogin />
            </CodeLayout>

            <div className="flex flex-col gap-4 items-start scroll-mt-24">
                <h3 className="font-medium tracking-tight text-xl">Login Box</h3>
            </div>

            <CodeLayout filename="Example1.jsx" code={Code2}>
                <Example1 />
            </CodeLayout>

            <div id="examples" className="flex flex-col gap-4 items-start scroll-mt-24">
                <h3 className="font-medium tracking-tight text-xl">Login Page with Google OAuth</h3>
            </div>

            <CodeLayout filename="Example2.jsx" code={Code3}>
                <Example2 />
            </CodeLayout>

        </div>
    );
}

function SimpleLogin() {
    return (
        <div className="flex flex-col gap-2">
            <p>Login</p>
            <input
                type="text"
                placeholder="full name"
                class="px-2 py-1 border-2 rounded-lg border-neutral-400 focus:border-[var(--fg)] focus:outline focus:outline-[var(--fg)] disabled:border-gray-200 disabled:bg-neutal-50 disabled:text-neutral-500 disabled:shadow-none"
            />
            <input
                type="email"
                placeholder="email"
                class="px-2 py-1 border-2 rounded-lg border-neutral-400 invalid:border-red-500 invalid:text-red-600 focus:border-[var(--fg)] focus:outline focus:outline-[var(--fg)] focus:invalid:border-red-500 focus:invalid:outline-red-500 disabled:border-gray-200 disabled:bg-neutal-50 disabled:text-neutral-500 disabled:shadow-none"
            />
            <input
                type="password"
                placeholder="password"
                class="px-2 py-1 border-2 rounded-lg border-neutral-400 invalid:border-red-500 invalid:text-red-600 focus:border-[var(--fg)] focus:outline focus:outline-[var(--fg)] disabled:shadow-none"
            />
            <button className="bg-neutral-400 hover:bg-neutral-300 rounded-lg px-2 py-1 mt-2 font-semibold cursor-pointer">Login</button>
        </div>
    );
}

function Example1() {
    return (
        <div className="flex flex-col border-2 border-neutral-300 rounded-lg items-center">
            <span className="w-full h-full py-4 px-4 rounded-t-sm bg-neutral-300">
                <p className="font-semibold text-[var(--fg)] text-center">Login</p>
            </span>
            <span className="flex flex-col px-4 py-4">
                <input
                    type="text"
                    placeholder="full name"
                    class="px-1 mt-6 py-1 border-b-2 border-b-neutral-400 focus:border-b-black focus:outline-none disabled:shadow-none"
                />
                <input
                    type="email"
                    placeholder="email"
                    class="px-1 py-1 border-b-2 border-b-neutral-400 invalid:border-red-500 invalid:text-red-600 focus:border-[var(--fg)] focus:outline-none focus:invalid:border-red-500 focus:invalid:outline-red-500 disabled:border-gray-200 disabled:bg-neutal-50 disabled:text-neutral-500 disabled:shadow-none"
                />
                <input
                    type="password"
                    placeholder="password"
                    class="px-1 py-1 border-b-2 border-b-neutral-400 focus:border-b-[var(--fg)] focus:outline-none disabled:shadow-none"
                />
                <button className="bg-neutral-400 w-full hover:bg-neutral-300 rounded-lg px-2 py-1 mt-8 font-semibold cursor-pointer">Login</button>
            </span>
        </div>
    );
}

function Example2() {
    return (
        <div className="grid grid-cols-2 border-2 border-neutral-300 rounded-lg items-center">
            <span className="w-full h-full flex items-center justify-center rounded-l-sm bg-neutral-300">
                <TriangleAnimation />
            </span>
            <span className="flex flex-col px-4 py-16 gap-4">
                <button className="bg-neutral-400 w-full hover:bg-neutral-300 rounded-lg px-2 py-1 font-semibold cursor-pointer">Login with Google</button>
                <p className="text-center">or</p>
                <input
                    type="email"
                    placeholder="email"
                    class="px-2 py-1 border-2 rounded-lg border-neutral-400 invalid:border-red-500 invalid:text-red-600 focus:border-[var(--fg)] focus:outline focus:outline-[var(--fg)] focus:invalid:border-red-500 focus:invalid:outline-red-500 disabled:border-gray-200 disabled:bg-neutal-50 disabled:text-neutral-500 disabled:shadow-none"
                />
                <button className="bg-neutral-400 w-full hover:bg-neutral-300 rounded-lg px-2 py-1 font-semibold cursor-pointer">Continue</button>
            </span>
        </div>
    );
}

const Code1 = `function SignUp() {
    return (
        <div className="flex flex-col gap-2">
            <p> Sign Up</p>
            <input
                type="text"
                placeholder="full name"
                class="px-2 py-1 border-2 rounded-lg border-neutral-400 focus:border-black focus:outline focus:outline-black disabled:border-gray-200 disabled:bg-neutal-50 disabled:text-neutral-500 disabled:shadow-none"
            />
            <input
                type="email"
                placeholder="email"
                class="px-2 py-1 border-2 rounded-lg border-neutral-400 invalid:border-red-500 invalid:text-red-600 focus:border-black focus:outline focus:outline-black focus:invalid:border-red-500 focus:invalid:outline-red-500 disabled:border-gray-200 disabled:bg-neutal-50 disabled:text-neutral-500 disabled:shadow-none"
            />
             <input
                type="password"
                placeholder="password"
                class="px-2 py-1 border-2 rounded-lg border-neutral-400 invalid:border-red-500 invalid:text-red-600 focus:border-black focus:outline focus:outline-black disabled:shadow-none"
            />
            <button className="bg-neutral-400 hover:bg-neutral-300 rounded-lg px-2 py-1 mt-2 font-semibold cursor-pointer">SignUp</button>
        </div>
    );
}
`

const Code2 = `function Example1() {
    return (
        <div className="flex flex-col border-2 border-neutral-300 rounded-lg items-center">
            <span className="w-full h-full py-4 px-4 rounded-t-sm bg-neutral-300">
                <p className="font-semibold text-black text-center">Sign Up</p>
            </span>
            <span className="flex flex-col px-4 py-4">
                <input
                    type="text"
                    placeholder="full name"
                    class="px-1 mt-6 py-1 border-b-2 border-b-neutral-400 focus:border-b-black focus:outline-none disabled:shadow-none"
                />
                <input
                    type="email"
                    placeholder="email"
                    class="px-1 py-1 border-b-2 border-b-neutral-400 invalid:border-red-500 invalid:text-red-600 focus:border-black focus:outline-none focus:invalid:border-red-500 focus:invalid:outline-red-500 disabled:border-gray-200 disabled:bg-neutal-50 disabled:text-neutral-500 disabled:shadow-none"
                />
                <input
                    type="password"
                    placeholder="password"
                    class="px-1 py-1 border-b-2 border-b-neutral-400 focus:border-b-black focus:outline-none disabled:shadow-none"
                />
                <button className="bg-neutral-400 w-full hover:bg-neutral-300 rounded-lg px-2 py-1 mt-8 font-semibold cursor-pointer">SignUp</button>
            </span>
        </div>
    );
}
`;

const Code3 = `function Example2() {
    return (
        <div className="grid grid-cols-2 border-2 border-neutral-300 rounded-lg items-center">
            <span className="w-full h-full flex items-center justify-center rounded-l-sm bg-neutral-300">
                <CircleAnimation />
            </span>
            <span className="flex flex-col px-4 py-16 gap-4">
                <button className="bg-neutral-400 w-full hover:bg-neutral-300 rounded-lg px-2 py-1 font-semibold cursor-pointer">Sign Up with Google</button>
                <p className="text-center">or</p>
                <input
                    type="email"
                    placeholder="email"
                    class="px-2 py-1 border-2 rounded-lg border-neutral-400 invalid:border-red-500 invalid:text-red-600 focus:border-black focus:outline focus:outline-black focus:invalid:border-red-500 focus:invalid:outline-red-500 disabled:border-gray-200 disabled:bg-neutal-50 disabled:text-neutral-500 disabled:shadow-none"
                />
                <button className="bg-neutral-400 w-full hover:bg-neutral-300 rounded-lg px-2 py-1 font-semibold cursor-pointer">Continue</button>
            </span>
        </div>
    );
}
`;