import { css } from '@linaria/core'
import { token } from '~/styles/tokens'

const rootStyle = css`
  background-color: ${token('color-gray-100')};
  padding: 16px;
  text-align: center;
  border: 2px solid ${token('color-gray-200')};
  border-radius: 4px;
  color: ${token('color-gray-400')};

  &[data-tall='true'] {
    padding-top: 48px;
    padding-bottom: 48px;
  }
`

/**
 * A panel of representing some placeholder content.
 */
export const PlaceholderContent = ({
  children,
  tall,
}: {
  children?: React.ReactNode
  tall?: boolean
}) => {
  return (
    <div className={rootStyle} data-tall={tall}>
      {children}
    </div>
  )
}
PlaceholderContent.displayName = 'PlaceholderContent'
