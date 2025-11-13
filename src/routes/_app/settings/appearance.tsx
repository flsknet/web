import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/settings/appearance')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_app/settings/theme"!</div>
}
