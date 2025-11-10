
import React from 'react';
import ApiKeyTable from './ApiKeyTable';
import { DocsIcon, KeyIcon, ChevronDownIcon } from './Icons';

const MainContent: React.FC = () => {
  return (
    <main className="flex-1 overflow-y-auto p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div className="flex items-center space-x-4">
                <button className="md:hidden p-2 rounded-full border border-zinc-700 hover:bg-zinc-800">
                    <svg className="w-6 h-6 text-zinc-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 6H20M4 12H20M4 18H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
                <h1 className="text-3xl font-semibold text-white">Chaves de API</h1>
            </div>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <button className="flex items-center space-x-2 py-2 px-4 rounded-full text-sm hover:bg-zinc-800 transition-colors">
              <DocsIcon className="w-5 h-5 text-zinc-400" />
              <span>Guia de início rápido da API</span>
            </button>
            <button className="flex items-center space-x-2 py-2 px-4 rounded-full border border-zinc-600 bg-zinc-800/50 text-sm hover:bg-zinc-700/50 transition-colors">
              <KeyIcon className="w-5 h-5" />
              <span>Criar chave de API</span>
            </button>
          </div>
        </header>

        {/* Filters */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-zinc-400">Agrupar por</span>
            <div className="flex items-center bg-zinc-800 rounded-full p-0.5">
              <button className="py-1 px-4 text-sm bg-zinc-600 rounded-full">Chave de API</button>
              <button className="py-1 px-4 text-sm text-zinc-400 hover:text-white">Projeto</button>
            </div>
          </div>
          <div className="flex items-center space-x-2 mt-4 md:mt-0">
            <span className="text-sm text-zinc-400">Filtrar por</span>
            <div className="relative">
                <select className="bg-zinc-800 border border-zinc-700 rounded-full py-1.5 pl-4 pr-10 appearance-none text-sm focus:outline-none focus:ring-1 focus:ring-blue-500">
                    <option>Todos os projetos</option>
                </select>
                <ChevronDownIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" />
            </div>
          </div>
        </div>
        
        {/* Info text */}
        <p className="text-sm text-zinc-400 mb-6 max-w-3xl">
          Only API Keys for imported projects appear here. If you don't see your API keys, you can import projects on the projects page. Learn more.
        </p>

        {/* API Key Table */}
        <ApiKeyTable />
      </div>
    </main>
  );
};

export default MainContent;
