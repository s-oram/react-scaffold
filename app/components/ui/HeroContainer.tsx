import { css } from '@linaria/atomic'

const rootStyle = css`
  min-height: 90lvh; /* Change value to 100lvh to fill the entire viewport */
  display: flex;
  flex-direction: column;
`

const contentStyle = css`
  min-height: 100;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

const headerWrapperStyle = css``

const childrenWrapperStyle = css`
  flex-grow: 1;
  display: grid;
`

export const HeroContainer = ({
  header,
  children,
}: {
  header?: React.ReactNode
  children?: React.ReactNode
}) => {
  return (
    <div className={rootStyle}>
      <div className={contentStyle}>
        {header && <div className={headerWrapperStyle}>{header}</div>}
        <div className={childrenWrapperStyle}>{children}</div>
      </div>
    </div>
  )
}
HeroContainer.displayName = 'HeroContainer'
