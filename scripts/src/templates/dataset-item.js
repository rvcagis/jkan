export default (data) => (
`<dataset>
  <h4><a href="${data.url}">${data.title}</a></h4>
  <h4>${data.lastUpdate}</h4>
  <h5>${data.notes || ''}</h5>
</dataset>`
)
