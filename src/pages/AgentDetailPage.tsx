import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Twitter, Calendar } from 'lucide-react';
import { agents } from '../data/agents';
import { Header } from '../components/Header';

export function AgentDetailPage() {
  const { id } = useParams();
  const agent = agents.find((a) => a.id === id);

  if (!agent) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Agent not found</h1>
          <Link to="/" className="text-blue-500 dark:text-blue-400 hover:underline">
            Return to directory
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <Header onSearch={() => {}} />
      <div className="container mx-auto px-4 py-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to directory
        </Link>

        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-8">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-6">
              {typeof agent.logo === 'string' ? (
                <div className="w-20 h-20 rounded-lg overflow-hidden flex items-center justify-center bg-gray-100 dark:bg-gray-700">
                  <img
                    src={agent.logo}
                    alt={`${agent.name} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
              ) : (
                <div
                  className="w-20 h-20 rounded-lg flex items-center justify-center text-2xl font-bold text-white"
                  style={{ backgroundColor: agent.logo?.color || '#4B5563' }}
                >
                  {agent.logo?.initials || agent.name.slice(0, 2).toUpperCase()}
                </div>
              )}
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{agent.name}</h1>
                <div className="flex flex-wrap gap-2">
                  {agent.category.map((cat) => (
                    <span
                      key={cat}
                      className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-sm text-gray-600 dark:text-gray-300"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="flex gap-4">
              {agent.website && (
                <a
                  href={agent.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 text-gray-700 dark:text-gray-300 transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  Visit Website
                </a>
              )}
              {agent.github && (
                <a
                  href={agent.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 text-gray-700 dark:text-gray-300 transition-colors"
                >
                  <Github className="h-4 w-4" />
                  View Source
                </a>
              )}
            </div>
          </div>

          <p className="text-gray-600 dark:text-gray-400 mb-8">{agent.description}</p>

          <div className="flex flex-wrap gap-4 mb-8">
            {agent.twitter && (
              <a
                href={`https://twitter.com/${agent.twitter}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400"
              >
                <Twitter className="h-4 w-4" />
                @{agent.twitter}
              </a>
            )}
          </div>

          <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              Last updated: {new Date(agent.lastUpdated).toLocaleDateString()}
            </div>
            <span>•</span>
            <div>{agent.isOpenSource ? 'Open Source' : 'Closed Source'}</div>
          </div>
        </div>
      </div>
    </div>
  );
}