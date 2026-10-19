'use client'

import Link from 'next/link'

/**
 * Single Tile (Card)
 */
export const Tile = ({ icon, title, subtitle, href, newWindow = false }) => {
  const classes =
    'x:group x:flex x:flex-col x:justify-start x:overflow-hidden x:rounded-lg ' +
    'x:border x:border-gray-200 x:dark:border-neutral-800 ' +
    'x:text-current x:no-underline x:transition-all x:duration-200 ' +
    'x:shadow-sm x:shadow-gray-100 x:dark:shadow-none ' +
    'x:hover:shadow-md x:hover:shadow-gray-100 x:dark:hover:shadow-none ' +
    'x:bg-transparent x:hover:bg-slate-50 x:dark:hover:bg-neutral-900 ' +
    'x:focus-visible:nextra-focus'

  const contentClasses =
    'x:flex x:flex-col x:gap-1 x:p-4 ' +
    'x:text-gray-700 x:group-hover:text-gray-900 ' +
    'x:dark:text-neutral-200 x:dark:group-hover:text-neutral-50'

  const content = (
    <>
      {/* Title row */}
      <span className="x:flex x:items-center x:gap-2 x:font-semibold">
        {icon && (
          <span className="x:text-gray-500 x:dark:text-gray-400">
            {icon}
          </span>
        )}
        <span className="_truncate">{title}</span>
      </span>

      {/* Subtitle */}
      {subtitle && (
        <span className="x:text-sm x:font-normal x:text-gray-500 x:dark:text-neutral-400 x:leading-snug">
          {subtitle}
        </span>
      )}
    </>
  )

  if (!href) {
    return (
      <div className={classes}>
        <span className={contentClasses} title={title}>
          {content}
        </span>
      </div>
    )
  }

  return (
    <Link href={href} className={classes} target={newWindow ? '_blank' : '_self' }>
      <span className={contentClasses} title={title}>
        {content}
      </span>
    </Link>
  )
}

/**
 * Tiles container (Nextra-style Cards grid)
 */
export const Tiles = ({ children, cols = 3 }) => {
  return (
    <div
      className="nextra-cards x:mt-4 x:gap-4 x:grid not-prose"
      cols={cols}
      style={cols !== 'auto' ? { '--cols': cols } : undefined}
    >
      {children}
    </div>
  )
}