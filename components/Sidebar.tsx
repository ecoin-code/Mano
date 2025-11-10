
import React, { useState } from 'react';
import { 
    ChevronDownIcon, 
    ChevronUpIcon, 
    KeyIcon, 
    FolderIcon, 
    BillingIcon, 
    ChangelogIcon, 
    ExternalLinkIcon,
    InfoIcon,
    SettingsIcon
} from './Icons';

const NavItem: React.FC<{
    icon: React.ReactNode;
    label: string;
    href?: string;
    isActive?: boolean;
    hasExternalLink?: boolean;
}> = ({ icon, label, href = "#", isActive = false, hasExternalLink = false }) => (
    <li>
        <a href={href} className={`flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-zinc-700/50 text-white' : 'hover:bg-zinc-700/50'}`}>
            {icon}
            <span className="flex-1">{label}</span>
            {hasExternalLink && <ExternalLinkIcon className="w-4 h-4 text-gray-400" />}
        </a>
    </li>
);

const AccordionItem: React.FC<{
    icon: React.ReactNode;
    label: string;
    children: React.ReactNode;
    isOpen: boolean;
    onClick: () => void;
}> = ({ icon, label, children, isOpen, onClick }) => (
    <li>
        <button onClick={onClick} className="w-full flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium hover:bg-zinc-700/50">
            {icon}
            <span className="flex-1 text-left">{label}</span>
            {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </button>
        {isOpen && (
            <ul className="pl-6 mt-1 space-y-1">
                {children}
            </ul>
        )}
    </li>
);

const Sidebar: React.FC = () => {
    const [dashboardOpen, setDashboardOpen] = useState(true);
    const [studioOpen, setStudioOpen] = useState(false);

    return (
        <aside className="w-64 h-full bg-[#1e1f20] flex flex-col p-4 border-r border-zinc-700/50">
            <div className="flex items-center space-x-2.5 p-3 mb-5">
                 <div className="w-8 h-8 rounded-full border border-zinc-600 flex items-center justify-center">
                    <svg className="w-5 h-5 text-zinc-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 6H20M4 12H20M4 18H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                 </div>
            </div>

            <nav className="flex-1">
                <ul className="space-y-1">
                    <AccordionItem 
                        icon={<span className="font-semibold text-sm">S</span>} 
                        label="Studio"
                        isOpen={studioOpen}
                        onClick={() => setStudioOpen(!studioOpen)}
                    >
                        {/* Add Studio sub-items here if any */}
                    </AccordionItem>
                    <AccordionItem 
                        icon={<span className="font-semibold text-sm">D</span>} 
                        label="Dashboard"
                        isOpen={dashboardOpen}
                        onClick={() => setDashboardOpen(!dashboardOpen)}
                    >
                        <NavItem icon={<KeyIcon />} label="API keys" isActive={true} />
                        <NavItem icon={<FolderIcon />} label="Projects" />
                    </AccordionItem>
                     <li>
                        <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium hover:bg-zinc-700/50">
                           <BillingIcon />
                           <span className="flex-1">Usage & Billing</span>
                        </a>
                    </li>
                    <li>
                         <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium hover:bg-zinc-700/50">
                           <ChangelogIcon />
                           <span className="flex-1">Changelog</span>
                           <ExternalLinkIcon className="w-4 h-4 text-gray-400" />
                        </a>
                    </li>
                </ul>
            </nav>
            <div className="mt-auto">
                 <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium hover:bg-zinc-700/50 mb-4">
                    <ChangelogIcon />
                    <span className="flex-1">Documentation</span>
                    <ExternalLinkIcon className="w-4 h-4 text-gray-400" />
                 </a>

                <div className="space-y-2 border-t border-zinc-700/50 pt-4">
                    <button className="w-full flex items-center justify-center space-x-2 py-2 px-4 rounded-full border border-zinc-600 text-sm hover:bg-zinc-700/50 transition-colors">
                        <KeyIcon />
                        <span>Get API key</span>
                    </button>
                    <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium hover:bg-zinc-700/50">
                        <InfoIcon />
                        <span>View status</span>
                    </a>
                    <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium hover:bg-zinc-700/50">
                        <SettingsIcon />
                        <span>Settings</span>
                    </a>
                    <div className="flex items-center space-x-2 pt-2">
                        <img className="w-8 h-8 rounded-full" src="https://picsum.photos/32/32" alt="User Avatar" />
                        <span className="text-sm">emailguicampos...</span>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
