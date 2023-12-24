export const defaultAspectRatios = ref<AspectRatioAttr[]>([
    {
        disable: true,
        name: 'Square',
        value: '1:1',
    },
    {
        disable: true,
        name: 'Photo',
        value: '4:3',
    },
    {
        disable: true,
        name: 'Portrait',
        value: '3:4',
    },
    {
        disable: true,
        name: 'Landscape',
        value: '4:3',
    },
])

export const defaultStyles = ref<StyleAttr[]>([
    {
        name: 'default',
    },
    {
        name: 'pure',
    },
])
