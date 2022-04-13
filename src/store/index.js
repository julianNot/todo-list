import { createStore } from 'vuex'

import taskStore from './task'

export default createStore({

  modules : {
    task : taskStore
  }

})
