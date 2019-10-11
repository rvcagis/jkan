export default (data) => (
`<dataset>
  <h4><a href="${data.url}">${data.title}</a></h4>
  <h5>${data.lastUpdate}</h5>
  ${data.notes || ''}
</dataset>`
)
