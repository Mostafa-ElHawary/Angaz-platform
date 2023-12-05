import React from 'react'

export default function SignupLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
  <>
    <div>
      <main>{children}</main>
    </div>
    </>
  )
}
