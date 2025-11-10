
import React from 'react';
import { API_KEYS_DATA } from '../constants';
import { ApiKey } from '../types';
import { 
    CopyIcon, 
    DollarIcon, 
    AnalyticsIcon,
    MoreIcon,
    ChevronDownIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
} from './Icons';

const ApiKeyTableRow: React.FC<{ apiKey: ApiKey }> = ({ apiKey }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center py-4 border-b border-zinc-800 text-sm">
            <div className="md:col-span-3">
                <div className="font-mono text-white">{apiKey.key}</div>
                <div className="text-zinc-400">{apiKey.description}</div>
            </div>
            <div className="md:col-span-3">
                <div className="text-white">{apiKey.projectName}</div>
                <div className="text-zinc-400 font-mono">{apiKey.projectId}</div>
            </div>
            <div className="md:col-span-2 text-zinc-300">{apiKey.createdDate}</div>
            <div className="md:col-span-2 text-zinc-300">{apiKey.quotaLevel}</div>
            <div className="md:col-span-2">
                <div className="flex items-center space-x-4 text-zinc-400">
                    <button className="hover:text-white"><CopyIcon className="w-5 h-5"/></button>
                    <button className="hover:text-white"><DollarIcon className="w-5 h-5"/></button>
                    <button className="hover:text-white"><AnalyticsIcon className="w-5 h-5"/></button>
                    <button className="hover:text-white"><MoreIcon className="w-5 h-5"/></button>
                </div>
            </div>
        </div>
    );
};


const ApiKeyTable: React.FC = () => {
  return (
    <div className="bg-[#1e1f20] rounded-lg">
        <div className="px-6">
            {/* Table Header */}
            <div className="hidden md:grid grid-cols-12 gap-4 py-4 border-b border-zinc-800 text-xs text-zinc-500 font-semibold uppercase tracking-wider">
                <div className="col-span-3">Chave</div>
                <div className="col-span-3">Projeto</div>
                <div className="col-span-2">Criado em</div>
                <div className="col-span-2">Nível da cota</div>
                <div className="col-span-2"></div>
            </div>

            {/* Table Body */}
            <div>
                {API_KEYS_DATA.map(key => <ApiKeyTableRow key={key.id} apiKey={key} />)}
            </div>
        </div>

        {/* Table Footer / Pagination */}
        <div className="flex flex-col md:flex-row items-center justify-end space-y-4 md:space-y-0 md:space-x-6 px-6 py-4 text-sm text-zinc-400">
            <div className="flex items-center space-x-2">
                <span>Items per page:</span>
                <div className="relative">
                    <select className="bg-zinc-800 border border-zinc-700 rounded-full py-1 pl-3 pr-8 appearance-none text-sm focus:outline-none focus:ring-1 focus:ring-blue-500">
                        <option>10</option>
                        <option>20</option>
                        <option>50</option>
                    </select>
                    <ChevronDownIcon className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" />
                </div>
            </div>
            <span>1–3 of 3</span>
            <div className="flex items-center space-x-2">
                <button className="p-1 rounded-full hover:bg-zinc-700/50 opacity-50 cursor-not-allowed" disabled>
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
                    </svg>
                </button>
                <button className="p-1 rounded-full hover:bg-zinc-700/50 opacity-50 cursor-not-allowed" disabled>
                    <ChevronLeftIcon />
                </button>
                <button className="p-1 rounded-full hover:bg-zinc-700/50 opacity-50 cursor-not-allowed" disabled>
                    <ChevronRightIcon />
                </button>
                <button className="p-1 rounded-full hover:bg-zinc-700/50 opacity-50 cursor-not-allowed" disabled>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
  );
};

export default ApiKeyTable;
