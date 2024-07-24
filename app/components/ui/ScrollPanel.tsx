import { css } from '@linaria/core'

const scrollPanelStyle = css`
  height: 100%;
  overflow-y: auto;

  scrollbar-color: #888 #f0f0f0;

  &::-webkit-scrollbar {
    width: 16px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    background-color: #f0f0f0;
  }
`

export const ScrollPanel = ({ children }: { children?: React.ReactNode }) => {
  return <div className={scrollPanelStyle}>{children}</div>
}
ScrollPanel.displayName = 'ScrollPanel'
