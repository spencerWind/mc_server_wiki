import React, { ReactNode } from "react";

interface FullWidthSectionProps {
    children: ReactNode;
    color: string;
}

const FullWidthSection: React.FC<FullWidthSectionProps> = ({ children, color }) => {
    return (
        <section className={`w-screen absolute left-0 border ${color}`}>
            <div className="max-w-[1440px] mx-auto">{children}</div>
        </section>
    );
};

export default FullWidthSection;
