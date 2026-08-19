import Layout from '@/components/layout/Layout'
import ConsultationCta from '@/components/sections/home/ConsultationCta'
import Hero from '@/components/sections/home/Hero'
import InsightsPreview from '@/components/sections/home/InsightsPreview'
import Positioning from '@/components/sections/home/Positioning'
import Process from '@/components/sections/home/Process'
import ServicesGrid from '@/components/sections/home/ServicesGrid'
import Testimonials from '@/components/sections/home/Testimonials'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Chartered Accountants in Harare',
  description:
    'Audit, ZIMRA tax compliance, bookkeeping and advisory from a Harare practice serving businesses, NGOs and public-sector entities across Zimbabwe.',
  path: '',
})

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <ServicesGrid />
      <Positioning />
      <Process />
      <Testimonials />
      <InsightsPreview />
      <ConsultationCta />
    </Layout>
  )
}
