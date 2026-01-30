import Link from 'next/link';
import type { Event } from '@/data/events';

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  const isComingSoon = event.status === 'coming-soon';

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all hover:shadow-md hover:border-gray-200">
      {/* Image placeholder */}
      <div className="aspect-video bg-gradient-to-br from-gray-50 to-gray-100 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="w-14 h-14 mx-auto mb-2 bg-white rounded-2xl shadow-sm flex items-center justify-center">
              <span className="text-amber-500 text-xl font-bold">HP</span>
            </div>
            <p className="text-gray-500 font-medium text-sm">{event.city}</p>
          </div>
        </div>
        <div className="absolute top-3 right-3">
          {isComingSoon ? (
            <span className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1.5 rounded-full">
              Yakında
            </span>
          ) : (
            <span className="bg-green-50 text-green-600 text-xs font-medium px-3 py-1.5 rounded-full">
              Aktif
            </span>
          )}
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-semibold text-lg text-gray-900 mb-1">{event.title}</h3>
        <p className="text-amber-600 font-medium text-sm mb-3">{event.venue}</p>

        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
            </svg>
            {new Date(event.date).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long' })}
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {event.time}
          </span>
        </div>

        <p className="text-gray-500 text-sm mb-5 line-clamp-2">{event.description}</p>

        {!isComingSoon ? (
          <Link
            href="/bilet-al"
            className="block w-full text-center bg-amber-500 hover:bg-amber-600 text-white py-2.5 rounded-xl font-medium transition-colors"
          >
            Bilet Al
          </Link>
        ) : (
          <button
            disabled
            className="block w-full text-center bg-gray-100 text-gray-400 py-2.5 rounded-xl font-medium cursor-not-allowed"
          >
            Yakında
          </button>
        )}
      </div>
    </div>
  );
}
