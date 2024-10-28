import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Twitter, Calendar } from 'lucide-react';
import { agents } from '../data/agents';

export function AgentDetailPage() {
  const { id } = useParams();
  const agent = agents.find((a) => a.id === id);

  if (!agent) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Agent not found</h1>
          <Link to="/" className="text-blue-500 hover:underline">
            Return to directory
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to directory
        </Link>

        <div className="bg-white rounded-lg border border-gray-200 p-8">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-6">
              {typeof agent.logo === 'string' ? (
                <img
                  src={agent.logo}
                  alt={`${agent.name} logo`}
                  className="w-20 h-20 rounded-lg object-cover"
                />
              ) : agent.logo && (
                <div
                  className="w-20 h-20 rounded-lg flex items-center justify-center text-2xl font-bold"
                  style={{ backgroundColor: agent.logo.color }}
                >
                  {agent.logo.initials}
                </div>
              )}
              <div>
                <h1 className="text-3xl font-bold mb-2">{agent.name}</h1>
                <div className="flex flex-wrap gap-2">
                  {agent.category.map((cat) => (
                    <span
                      key={cat}
                      className="px-3 py-1 rounded-full bg-gray-100 text-sm text-gray-600"
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
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors"
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
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors"
                >
                  <Github className="h-4 w-4" />
                  View Source
                </a>
              )}
            </div>
          </div>

          <p className="text-gray-600 mb-8">{agent.description}</p>

          <div className="flex flex-wrap gap-4 mb-8">
            {agent.twitter && (
              <a
                href={`https://twitter.com/${agent.twitter}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-500"
              >
                <Twitter className="h-4 w-4" />
                @{agent.twitter}
              </a>
            )}
          </div>

          <div className="flex items-center gap-4 text-sm text-gray-500">
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