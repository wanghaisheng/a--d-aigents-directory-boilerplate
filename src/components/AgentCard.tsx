import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Agent } from '../types/agent';

interface AgentCardProps {
  agent: Agent;
}

export function AgentCard({ agent }: AgentCardProps) {
  return (
    <div className="p-6 rounded-lg border border-gray-200 hover:border-gray-300 transition-all bg-white">
      <div className="flex items-start justify-between mb-4">
        <img
          src={agent.logo}
          alt={`${agent.name} logo`}
          className="w-12 h-12 rounded-lg object-cover"
        />
        <div className="flex gap-2">
          {agent.website && (
            <a
              href={agent.website}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <ExternalLink className="h-4 w-4 text-gray-600" />
            </a>
          )}
          {agent.gitRepo && (
            <a
              href={agent.gitRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Github className="h-4 w-4 text-gray-600" />
            </a>
          )}
        </div>
      </div>

      <Link to={`/agent/${agent.id}`}>
        <h3 className="text-xl font-semibold mb-2">{agent.name}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{agent.description}</p>
      </Link>

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
  );
}