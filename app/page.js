import Layout from '@/components/layout/Layout'
import ConsultationCta from '@/components/sections/home/ConsultationCta'
import Hero from '@/components/sections/home/Hero'
import InsightsPreview from '@/components/sections/home/InsightsPreview'
import Positioning from '@/components/sections/home/Positioning'
import Process from '@/components/sections/home/Process'
import ServicesGrid from '@/components/sections/home/ServicesGrid'
import Testimonials from '@/components/sections/home/Testimonials'

export const metadata = {
  title: 'Chartered Accountants in Harare | Audit, Tax & Advisory',
  description:
    'Praxis Chartered Accountants provides audit, ZIMRA tax compliance, bookkeeping and financial advisory services to businesses, NGOs and public-sector entities in Zimbabwe. Practising in Harare since 2012.',
  alternates: { canonical: '/' },
}

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
