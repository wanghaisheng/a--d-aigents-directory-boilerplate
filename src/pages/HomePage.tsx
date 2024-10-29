import { useState } from 'react';
import { Header } from '../components/Header';
import { AgentCard } from '../components/AgentCard';
import { agents, categories } from '../data/agents';

export function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredAgents = agents.filter(agent => {
    const matchesCategory = !selectedCategory || agent.category.includes(selectedCategory);
    const matchesSearch = !searchTerm || 
      agent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      agent.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <Header onSearch={setSearchTerm} />
      
      <main className="max-w-7xl mx-auto py-8">
        <div className="text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Discover Amazing AI Agents
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore our curated collection of AI agents and tools to enhance your workflow.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex gap-2 overflow-x-auto py-4 px-4 sm:px-6 lg:px-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category === selectedCategory ? null : category)}
              className={`
                px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors
                ${selectedCategory === category 
                  ? 'bg-black dark:bg-white text-white dark:text-black' 
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'}
              `}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-6 px-4 sm:px-6 lg:px-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredAgents.map((agent) => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
        </div>
      </main>
    </div>
  );
}