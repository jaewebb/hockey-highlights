export default function ErrorAlert({ error }: { error: string }) {
  return <div data-testid="error-alert">{error}</div>
}
