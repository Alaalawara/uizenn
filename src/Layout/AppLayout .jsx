import Header from "../components/Header";

export default function AppShell({ children }) {
return (
<main className="w-full px-15">
<Header />
<main>{children}</main>
</main>
);
}