import Editor from '@/components/studio/Editor'

export const metadata = { title: { absolute: 'Edit insight · Praxis Studio' } }

export default function EditInsight({ params }) {
  return <Editor id={params.id} />
}
