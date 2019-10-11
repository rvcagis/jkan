export default (data) => (
`<dataset>
  <h4><a href="${data.url}">${data.title}</a></h4>
  <big>${data.lastUpdate}</big>
  ${data.notes || ''}
</dataset>`
)
