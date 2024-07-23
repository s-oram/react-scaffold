import { cx, css } from '@linaria/core'
import { useState } from 'react'
import { token } from '~/styles/tokens'

const rootStyle = css``

const listStyle = css`
  &[data-depth='0'] {
  }

  &[data-depth='1'] {
    margin-left: 24px;
  }
`

const listItemStyle = css`
  position: relative;

  &[data-depth='0'] {
    font-size: 1.5rem;
  }

  &[data-depth='1'] {
    font-size: 1.25rem;
  }
`

const hoverItemStyle = css`
  &:hover {
    text-decoration: underline;
  }
`

const commonItemStyle = css`
  display: inline-block;
  padding-top: 8px;
  padding-bottom: 8px;
`

const buttonItemStyle = css`
  &:after {
    position: absolute;
    content: '';
    top: 0;
    right: 0;
    width: 24px;
    height: 100%;
    background-image: ${token('icon-chevron-down')};
    background-size: 24px 24px;
    background-repeat: no-repeat;
    background-position: center center;
    transform: rotate(-90deg);
    transition-property: transform;
    transition-duration: 0.075s;
  }
  &[data-is-expanded='true']:after {
    transform: rotate(0deg);
  }
`

/**
 * The disabled style is not intended for end users. We
 * have it here as a indicator for developers and content editors
 * that the menu item doesn't do anything (doesn't have a href or children).
 */
const disabledItemStyle = css`
  color: ${token('color-gray-300')};
  cursor: not-allowed;
`

const List = ({
  children,
  depth,
}: {
  children?: React.ReactNode
  depth: number
}) => {
  return (
    <ul className={listStyle} data-depth={depth}>
      {children}
    </ul>
  )
}

const ListItem = ({
  item,
  depth,
}: {
  item: TreeMenu.MenuItem
  depth: number
}) => {
  const [isExpanded, setExpanded] = useState(!!item.initExpanded)
  const listItemType =
    item.children && item.children.length
      ? 'button'
      : item.href
        ? 'link'
        : 'label'

  return (
    <li>
      <div className={listItemStyle} data-depth={depth}>
        {listItemType === 'button' && (
          <button
            className={cx(commonItemStyle, hoverItemStyle, buttonItemStyle)}
            data-is-expanded={isExpanded}
            onClick={() => setExpanded(!isExpanded)}
          >
            {item.label}
          </button>
        )}
        {listItemType === 'link' && (
          <a href={item.href} className={cx(commonItemStyle, hoverItemStyle)}>
            {item.label}
          </a>
        )}
        {listItemType === 'label' && (
          <div className={cx(commonItemStyle, disabledItemStyle)}>
            {item.label}
          </div>
        )}
      </div>
      {isExpanded && item.children && item.children.length > 0 && (
        <List depth={depth + 1}>
          {item.children.map(childItem => (
            <ListItem
              key={`${depth + 1}--${childItem.label}`}
              item={childItem}
              depth={depth + 1}
            />
          ))}
        </List>
      )}
    </li>
  )
}

namespace TreeMenu {
  export type MenuItem = {
    label: string
    href?: string
    children?: MenuItem[]
    initExpanded?: boolean // is the menu item expanded to begin with?
  }
  export type Props = {
    items?: MenuItem[]
  }
}

const TreeMenu = ({ items }: TreeMenu.Props) => {
  const depth = 0
  return (
    <div className={rootStyle}>
      {items && items.length > 0 && (
        <List depth={depth}>
          {items.map(item => (
            <ListItem
              key={`${depth}--${item.label}`}
              depth={depth}
              item={item}
            />
          ))}
        </List>
      )}
    </div>
  )
}
TreeMenu.displayName = 'TreeMenu'

export { TreeMenu }
