import { css } from '@linaria/core'
import { token } from '~/styles/tokens'

const root = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const primaryLabelStyle = css`
  font-weight: 600;
`

const secondaryLabelStyle = css`
  margin-left: 0.5ch;
  color: ${token('color-detail-400')};
`

export const FieldLabel = ({
  htmlFor,
  primaryLabel,
  secondaryLabel,
  tertiaryLabel,
}: {
  htmlFor: string
  primaryLabel: string
  secondaryLabel?: string
  tertiaryLabel?: React.ReactNode
}) => {
  return (
    <div className={root}>
      <label htmlFor={htmlFor}>
        <span className={primaryLabelStyle}>{primaryLabel}</span>
        {secondaryLabel && (
          <span className={secondaryLabelStyle}>{secondaryLabel}</span>
        )}
      </label>
      {tertiaryLabel && <span>{tertiaryLabel}</span>}
    </div>
  )
}
FieldLabel.displayName = 'FieldLabel'
