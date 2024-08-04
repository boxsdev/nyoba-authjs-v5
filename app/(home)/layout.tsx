import SiteFooter from "@/components/global/footer/site-footer"
import SiteHeader from "@/components/global/header/site-header"

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col bg-background pb-8">
      <SiteHeader />
      {children}
      <SiteFooter />
    </div>
  )
}
