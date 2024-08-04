import SiteFooter from "@/components/global/footer/site-footer"
import SiteHeader from "@/components/global/header/site-header"

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-full flex-col bg-background">
      <SiteHeader />
      {children}
      <SiteFooter />
    </div>
  )
}
