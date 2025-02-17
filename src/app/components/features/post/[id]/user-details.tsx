import Link from 'next/link';
import { User } from '@/app/application/core/models/user';

interface UserDetailsProps {
    user: User;
}

export default function UserDetails({ user }: UserDetailsProps) {

    if (!user) {
        return <div>User not found</div>;
    }

    return (
        <div className="flex flex-col gap-5 justify-between bg-white rounded-lg shadow-md p-6 w-full">
            <div className="flex justify-between w-full">
                <h2 className="text-xl font-semibold text-gray-800">
                    {user.name}
                </h2>
                <p className="text-gray-500">@{user.username}</p>
            </div>
            <div className="flex items-center">
                <svg
                    className="w-5 h-5 text-gray-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                </svg>
                <a
                    href={`mailto:${user.email}`}
                    className="text-blue-600 hover:underline"
                >
                    {user.email}
                </a>
            </div>
            <div className="flex items-center">
                <svg
                    className="w-5 h-5 text-gray-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                </svg>
                <a
                    href={`tel:${user.phone}`}
                    className="text-blue-600 hover:underline"
                >
                    {user.phone}
                </a>
            </div>
            <div className="flex items-center">
                <svg
                    className="w-5 h-5 text-gray-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                </svg>
                <Link
                    href={`https://${user.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                >
                    {user.website}
                </Link>
            </div>
        </div>
    );
}
