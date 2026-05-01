import './globals.css'

export const metadata = {
  title: 'Will Murphy | Senior Software Engineer',
  description:
    'Personal site for Will Murphy — senior software engineer focused on clinical trial systems, scalable backend architecture, and practical AI-enabled tooling.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
