import type { Metadata } from 'next'
import { Noto_Sans_JP, Noto_Serif_JP } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
  display: 'swap',
})

const notoSerifJP = Noto_Serif_JP({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-noto-serif-jp',
  display: 'swap',
})

export const metadata: Metadata = {
  title: '葉隠 - HAGAKURE - | 日本酒を、次世代へ。',
  description: '伝統を、モダンに再解釈する。日本酒という洗練された文化を、次世代へ継承する。',
  generator: 'v0.app',
  
  // ▼ 追記：OGP（SNSシェア時の設定） ▼
  openGraph: {
    title: '葉隠 - HAGAKURE - | 日本酒を、次世代へ。',
    description: '伝統を、モダンに再解釈する。日本酒という洗練された文化を、次世代へ継承する。',
    // ※↓本番公開時に、実際のドメイン（例：https://hagakure-sake.com など）に変更してください
    url: 'https://hagakure-hp.vercel.app', 
    siteName: '葉隠 - HAGAKURE -',
    images: [
      {
        url: '/og-image.png', // 先ほどの美しい表紙画像を読み込みます
        width: 1200,
        height: 630,
        alt: '葉隠 - HAGAKURE -',
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image', // 画像をタイムラインで大きく見せるための必須設定
    title: '葉隠 - HAGAKURE - | 日本酒を、次世代へ。',
    description: '伝統を、モダンに再解釈する。日本酒という洗練された文化を、次世代へ継承する。',
    images: ['/og-image.png'],
  },
  // ▲ ここまで ▲

  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.variable} ${notoSerifJP.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
