

export interface Certificate {
    title: string;
    issuer: string;
    date: string;
    link?: string;
    description?: string;
}

interface CertificateCardProps {
    certificate: Certificate;
}

const CertificateCard: React.FC<CertificateCardProps> = ({ certificate }) => (
    <div className="relative bg-gradient-to-br from-slate-800/40 via-gray-800/30 to-slate-900/60 border border-gray-600/30 rounded-2xl p-6 transition-all duration-700 hover:shadow-2xl hover:shadow-cyan-500/20 overflow-hidden group">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600"></div>
        <div className="flex items-center gap-3 mb-2">
            <h4 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                {certificate.title}
            </h4>
        </div>
        <p className="text-gray-300 mb-1">
            <span className="font-semibold text-cyan-300">{certificate.issuer}</span> &middot; <span className="text-sm">{certificate.date}</span>
        </p>
        {certificate.description && (
            <p className="text-gray-400 text-sm mb-2">{certificate.description}</p>
        )}
        {certificate.link && (
            <a
                href={certificate.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 px-5 py-2 rounded-lg bg-transparent text-cyan-300 font-semibold text-base border border-cyan-400/60 hover:border-purple-400/80 hover:text-purple-300 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 shadow-none"
                style={{ minWidth: 170, justifyContent: 'center', letterSpacing: '0.02em', backdropFilter: 'blur(2px)' }}
            >
                <span className="text-lg">🔗</span> View Certificate
            </a>
        )}
    </div>
);

export default CertificateCard;
