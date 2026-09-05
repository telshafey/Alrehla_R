import React from 'react';

const InstructorSection: React.FC<{ title: string, subtitle?: string, icon?: React.ReactNode, children: React.ReactNode, action?: React.ReactNode }> = ({ title, subtitle, icon, children, action }) => {
    return (
        <section className="mb-8">
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                    {icon && <div className="text-primary">{icon}</div>}
                    <div>
                        <h2 className="text-xl font-bold">{title}</h2>
                        {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
                    </div>
                </div>
                {action && <div>{action}</div>}
            </div>
            <div>{children}</div>
        </section>
    );
};
export default InstructorSection;
