import $ from 'jquery'
import 'select3'

export default class {
  constructor (opts) {
    const elements = {
      select3: $('.select3', opts.el)
    }

    // Initialize select2 plugin
    elements.select3.select3()
  }
}
