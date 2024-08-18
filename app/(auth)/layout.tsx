import Image from 'next/image'

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<main className="flex min-h-screen w-full justify-between font-inter">
			{children}
			<div className="auth-asset">
				<div>
					<Image
						src="/icons/main-bg.png"
						height={950}
						width={500}
						alt="bg image"
					/>
				</div>
			</div>
		</main>
	)
}
