export default (data) => (
`<dataset>
  <h1><a href="${data.url}">${data.title}</a></h1>
  <h4>${data.lastUpdate}</h4>
  <small>${data.notes || ''}</small>
</dataset>`
)
