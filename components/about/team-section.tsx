import React from 'react';
import { teamMembers, TeamMember } from '../../data/about/team';
import Image from 'next/image';

interface TeamCardProps {
  member: TeamMember;
}

const TeamCard: React.FC<TeamCardProps> = ({ member }) => {
  return (
    <div id="team" className="group bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
      {/* Image Container - Using object-contain to prevent cropping */}
      <div className="relative h-64 w-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center overflow-hidden">
        <Image
          src={member.imageUrl}
          alt={`${member.name} - ${member.role}`}
          fill
          className="object-contain group-hover:scale-105 transition-transform duration-300 p-2"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={false}
        />
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-200">
          {member.name}
        </h3>
        <p className="text-sm font-medium text-blue-600 mb-2">
          {member.role}
        </p>
        {member.bio && (
          <p className="text-sm text-gray-600 line-clamp-3">
            {member.bio}
          </p>
        )}
      </div>
    </div>
  );
};

// Alternative version with flexible image sizing
const TeamCardFlexible: React.FC<TeamCardProps> = ({ member }) => {
  return (
    <div className="group bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
      {/* Flexible Image Container */}
      <div className="relative min-h-48 max-h-72 w-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="relative w-full h-full">
          <Image
            src={member.imageUrl}
            alt={`${member.name} - ${member.role}`}
            fill
            className="object-contain group-hover:scale-105 transition-transform duration-300 p-4"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority={false}
          />
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-200">
          {member.name}
        </h3>
        <p className="text-sm font-medium text-blue-600 mb-2">
          {member.role}
        </p>
        {member.bio && (
          <p className="text-sm text-gray-600 line-clamp-3">
            {member.bio}
          </p>
        )}
      </div>
    </div>
  );
};

// Version with circular image for profile photos
const TeamCardCircular: React.FC<TeamCardProps> = ({ member }) => {
  return (
    <div className="group bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 text-center">
      {/* Circular Image */}
      <div className="relative w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <Image
          src={member.imageUrl}
          alt={`${member.name} - ${member.role}`}
          fill
          className="object-contain group-hover:scale-110 transition-transform duration-300 p-2"
          sizes="128px"
          priority={false}
        />
      </div>
      
      {/* Content */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-200">
          {member.name}
        </h3>
        <p className="text-sm font-medium text-blue-600 mb-3">
          {member.role}
        </p>
        {member.bio && (
          <p className="text-sm text-gray-600 line-clamp-4">
            {member.bio}
          </p>
        )}
      </div>
    </div>
  );
};

interface TeamSectionProps {
  title?: string;
  subtitle?: string;
  className?: string;
  cardStyle?: 'default' | 'flexible' | 'circular';
}

const TeamSection: React.FC<TeamSectionProps> = ({ 
  title = "Meet Our Team",
  subtitle = "The talented people behind our success",
  className = "",
  cardStyle = 'default'
}) => {
  const CardComponent = cardStyle === 'circular' ? TeamCardCircular 
                       : cardStyle === 'flexible' ? TeamCardFlexible 
                       : TeamCard;

  return (
    <section className={`py-16 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {teamMembers.map((member) => (
            <CardComponent key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;