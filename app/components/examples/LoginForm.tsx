/* eslint-disable jsx-a11y/anchor-is-valid */
import { css } from '@linaria/atomic'
import { TextField } from '../ui/TextField'
import { PasswordField } from '../ui/PasswordField'
import { Heading } from '../ui/Heading'
import { Button } from '../ui/Button'
import { linkStyle } from '../ui/Link'
import { Checkbox } from '../ui/Checkbox'

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

export const LoginForm = () => {
  const forgotPasswordLink = (
    <a href="#" className={linkStyle}>
      Forgot Password
    </a>
  )

  return (
    <form className={rootStyle}>
      <div className={topSectionStyle}>
        <Heading level="h1">Log In</Heading>
        <div>
          <span>{'Not a member yet? '}</span>
          <a href="#" className={linkStyle}>
            Sign Up
          </a>
        </div>
      </div>

      <TextField name={'email'} primaryLabel="Email address" />
      <PasswordField
        name={'password'}
        primaryLabel="Password"
        tertiaryLabel={forgotPasswordLink}
      />
      <Checkbox name="rememberMe" label="Keep me signed in"></Checkbox>
      <Button type="submit">Log In</Button>
    </form>
  )
}
LoginForm.displayName = 'LoginForm'
