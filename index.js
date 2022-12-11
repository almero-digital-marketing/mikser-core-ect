import ECT from 'ect'

export function render({ entity, runtime, options }) {
    const renderer = ECT({ root: options.layoutsFolder, cache: true, ext: '.ect' })
    return renderer.render(entity.layout.name, runtime)
}