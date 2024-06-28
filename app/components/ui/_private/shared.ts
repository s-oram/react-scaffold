import { css } from '@linaria/core'
import { token } from '~/styles/tokens'

/*
Action tones are used on interactive elements (buttons, toggles, etc) to adjust the
element's visual appearance.
*/
export type ActionTone = 'primary' | 'secondary' | 'danger'

/*
Feedback tones are used on messages shown to the user (form field errors, toast notifications).
*/
export type FeedbackTone = 'neutral' | 'success' | 'error'

/* Provides focus and border styles for form inputs. */
export const inputStyle = css`
  outline: none;
  border: 1px solid ${token('color-detail-500')};
  border-radius: 4px;
  padding: 8px 12px;

  &[data-tone='success']:focus {
    border-color: ${token('color-green-700')};
  }

  &:invalid:not(:placeholder-shown),
  &[data-tone='error'] {
    border-color: ${token('color-red-500')};
  }
`
