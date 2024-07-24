import { css } from '@linaria/core'

const rootStyle = css`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  timeline-scope: --page-top-timeline;
`

const contentStyle = css`
  min-height: calc(100% - 16px); /* Push the footer below the fold */
`

const pageTopTimelineStyle = css`
  view-timeline-name: --page-top-timeline;
  height: 20px;
  margin-bottom: -20px;
  pointer-events: none;
  visibility: hidden;
`

/**
 * The Page component offers an easy method to create a predictable layout, ensuring the
 * footer is always at the bottom of the screen and moves down as the page content expands.
 */
export const Page = ({
  header,
  footer,
  children,
}: {
  header?: React.ReactNode
  footer?: React.ReactNode
  children?: React.ReactNode
}) => {
  return (
    <div className={rootStyle}>
      <div className={contentStyle}>
        <div className={pageTopTimelineStyle} />
        {header}
        {children}
      </div>
      {footer && <div>{footer}</div>}
    </div>
  )
}
Page.displayName = 'Page'
