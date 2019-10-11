export default (data) => (
`<dataset>
  <a href="${data.url}">${data.title}</a>
  ${data.lastUpdate}
  ${data.notes || ''}
</dataset>`
)
