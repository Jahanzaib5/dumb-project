export const updateOnject = (oldObject, updateProperties) => {
    return {
        ...oldObject,
        ...updateProperties
    }
}