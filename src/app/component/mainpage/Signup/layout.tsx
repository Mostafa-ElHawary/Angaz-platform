import React from 'react'
import "./style.css"
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
