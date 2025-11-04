//Renders mobile subtree below md, desktop subtree at md and above.
export default function ResponsiveSwitch({ mobile, desktop, className = "" }) {
    return (
        <div className={className}>
            <div className="block md:hidden">
                {mobile}
            </div>
            <div className="hidden md:block">
                {desktop}
            </div>
        </div>
    );
}

