'use client'

/**
 * Vertical Contact Card
 */
export const RoleCard = ({
    name,
    role,
    email,
    phone,
    avatar
}) => {
    return (
        <div
            className="
                x:flex x:flex-col x:overflow-hidden x:rounded-xl
                x:border x:border-gray-200 x:dark:border-neutral-800
                x:bg-white x:dark:bg-neutral-900
                x:shadow-sm" >
            {/* Avatar (full-width) */}
            {avatar && (
                <div className="x:aspect-[4/3] x:w-full x:overflow-hidden">
                    <img
                        src={avatar}
                        alt={name}
                        className="x:h-full x:w-full x:object-cover"
                    />
                </div>
            )}

            {/* Content */}
            <div className="x:flex x:flex-col x:gap-3 x:p-4">
                {/* Name / Role */}
                <div className="x:flex x:flex-col">
                    <span className="x:text-lg x:font-semibold x:text-gray-900 x:dark:text-white">
                        {name}
                    </span>
                    {role && (
                        <span className="x:text-sm x:text-gray-500 x:dark:text-neutral-400">
                            {role}
                        </span>
                    )}
                </div>


            </div>
        </div>
    )
}

/**
 * Contact Cards Container
 */
export const ContactCards = ({ children, cols = 3 }) => {
    return (
        <div
            className="x:grid x:gap-4 not-prose"
            style={{
                gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`
            }}
        >
            {children}
        </div>
    )
}