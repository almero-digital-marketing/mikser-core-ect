import ECT from 'ect'

export function load({ runtime, options }) {
    const renderer = ECT({ root: options.layoutsFolder, cache: true, ext: '.ect' })
    runtime.ect = renderer.render
}

export function render({ entity, runtime }) {
    const result = runtime.ect(entity.layout.name, runtime)
    return result
}