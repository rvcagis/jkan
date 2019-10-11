export default (data) => (
`<dataset>
  <h3><a href="${data.url}">${data.title}</a></h3>
  <h4>${data.lastUpdate}</h4>
  ${data.notes || ''}
</dataset>`
)
