/* eslint-disable jsx-a11y/anchor-is-valid */
import { css } from '@linaria/atomic'
import { Button } from '../ui/Button'
import { Heading } from '../ui/Heading'
import { TextField } from '../ui/TextField'

const rootStyle = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-top: 16px;
  padding-bottom: 16px;
`

const topSectionStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
  text-align: center;
  text-wrap: balance;
`

export const ForgotPasswordForm = () => {
  return (
    <form className={rootStyle}>
      <div className={topSectionStyle}>
        <Heading level="h1">Forgot Password?</Heading>
        <div>
          {
            "No problem! Enter the email for your account. We'll send you a password reset link."
          }
        </div>
      </div>
      <TextField name={'email'} primaryLabel="Email address" />
      <Button type="submit">Send Reset Link</Button>
    </form>
  )
}
ForgotPasswordForm.displayName = 'ForgotPasswordForm'
