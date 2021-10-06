
if (window.alt === undefined) {
  window.alt = {
    emit: () => { },
    on: (name, callBack) => {
      switch (name) {
        case 'openChat':
          document.addEventListener('keydown', (e) => {
            switch (e.key) {
              case 'l':
                console.log(name)
                callBack()
                break
            }
          })
          break

        case 'closeChat':
          document.addEventListener('keydown', (e) => {
            switch (e.key) {
              case 'k':
                console.log(name)
                callBack()
                break
            }
          })
          break
        default:
          break
      }
    }
  }
}
