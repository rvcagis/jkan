export default (data) => (
`<dataset>
  <h3><a href="${data.url}">${data.title}</a></h3>
  ${data.last}
  ${data.notes || ''}
</dataset>`
)
