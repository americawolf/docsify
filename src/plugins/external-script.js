function handleExternalScript () {
  const container = Docsify.dom.getNode('#main')
  const scripts = Docsify.dom.findAll(container, 'script')

  for (let i = scripts.length; i--;) {
    const script = scripts[i]

    if (script && script.src) {
      const newScript = document.createElement('script')

      ;['src', 'async', 'defer'].forEach(attribute => {
        newScript[attribute] = script[attribute]
      })

      script.parentNode.insertBefore(newScript, script)
      script.parentNode.removeChild(script)
    }
  }
}

const install = function (hook) {
  hook.doneEach(handleExternalScript)
}

window.$docsify.plugins = [].concat(install, window.$docsify.plugins)
