/* eslint-disable jsx-a11y/anchor-is-valid */
import { css } from '@linaria/atomic'
import { token } from '~/styles/tokens'
import { linkStyle } from '../ui/Link'
import { Heading } from '../ui/Heading'
import { TextField } from '../ui/TextField'
import { PasswordField } from '../ui/PasswordField'
import { Button } from '../ui/Button'

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
`

const bottomSectionStyle = css`
  padding-left: 16px;
  padding-right: 16px;
  text-align: center;
`

export const SignUpForm = () => {
  return (
    <form className={rootStyle}>
      <div className={topSectionStyle}>
        <Heading level="h1">Sign Up</Heading>
        <div>
          <span>{'Already a member? '}</span>
          <a href="#" className={linkStyle}>
            Log In
          </a>
        </div>
      </div>
      <TextField name={'email'} primaryLabel="Email address" />
      <PasswordField name={'password'} primaryLabel="Password" />
      <Button type="submit">Sign Up</Button>
      <div className={bottomSectionStyle}>
        By signing up, you agree to{' '}
        <a href="#" className={linkStyle}>
          Terms of Service
        </a>
        ,{' '}
        <a href="#" className={linkStyle}>
          Privacy Policy
        </a>
        , and{' '}
        <a href="#" className={linkStyle}>
          Cookie Policy
        </a>
        .
      </div>
    </form>
  )
}
SignUpForm.displayName = 'SignUpForm'
