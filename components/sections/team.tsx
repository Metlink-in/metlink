'use client';

import { Github, Linkedin, Mail } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  specialty: string;
  image: string;
}

const team: TeamMember[] = [
  {
    id: 1,
    name: 'Alex Johnson',
    role: 'Founder & CEO',
    specialty: 'Full-Stack Development',
    image: '👨‍💼',
  },
  {
    id: 2,
    name: 'Sarah Chen',
    role: 'CTO & Lead Architect',
    specialty: 'System Design',
    image: '👩‍💻',
  },
  {
    id: 3,
    name: 'Mike Rodriguez',
    role: 'Head of Engineering',
    specialty: 'Backend Systems',
    image: '👨‍🔧',
  },
  {
    id: 4,
    name: 'Emma Wilson',
    role: 'Lead Designer',
    specialty: 'UI/UX Design',
    image: '👩‍🎨',
  },
  {
    id: 5,
    name: 'David Park',
    role: 'AI/ML Engineer',
    specialty: 'Machine Learning',
    image: '👨‍🚀',
  },
  {
    id: 6,
    name: 'Lisa Anderson',
    role: 'DevOps Lead',
    specialty: 'Cloud Infrastructure',
    image: '👩‍🔬',
  },
];

export function Team() {
  return (
    <section className="w-full py-24 bg-background relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-600 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Meet Our Team
          </h2>
          <p className="text-lg text-muted-foreground">
            Talented professionals dedicated to delivering exceptional software solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={member.id}
              className="group relative"
              style={{
                animation: `slideInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative p-8 rounded-2xl border border-foreground/10 bg-card hover:border-blue-500/50 transition-all duration-300 overflow-hidden">
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10">
                  {/* Member image placeholder */}
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-6xl shadow-lg shadow-blue-600/20 group-hover:shadow-blue-600/40 transition-shadow">
                    {member.image}
                  </div>

                  {/* Info */}
                  <h3 className="text-xl font-bold text-center text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-center text-blue-500 font-medium mb-1">
                    {member.role}
                  </p>
                  <p className="text-center text-sm text-muted-foreground mb-6">
                    {member.specialty}
                  </p>

                  {/* Social links */}
                  <div className="flex justify-center gap-3">
                    <a
                      href="#"
                      className="p-2 rounded-lg bg-foreground/5 hover:bg-blue-600/10 transition-colors group/link"
                    >
                      <Linkedin className="w-4 h-4 text-foreground group-hover/link:text-blue-500 transition-colors" />
                    </a>
                    <a
                      href="#"
                      className="p-2 rounded-lg bg-foreground/5 hover:bg-blue-600/10 transition-colors group/link"
                    >
                      <Github className="w-4 h-4 text-foreground group-hover/link:text-blue-500 transition-colors" />
                    </a>
                    <a
                      href="#"
                      className="p-2 rounded-lg bg-foreground/5 hover:bg-blue-600/10 transition-colors group/link"
                    >
                      <Mail className="w-4 h-4 text-foreground group-hover/link:text-blue-500 transition-colors" />
                    </a>
                  </div>
                </div>

                {/* Accent blob */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-blue-600/5 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
