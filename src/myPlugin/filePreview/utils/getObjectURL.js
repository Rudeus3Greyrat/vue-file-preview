export function getObjectURL(file) {
  let url = null
  if (window.createObjectURL !== undefined) { // basic
    url = window.createObjectURL(file)
  } else if (window.webkitURL !== undefined) { // webkit or chrome
    try {
      url = window.webkitURL.createObjectURL(file)
    } catch (error) {
      console.log(error)
    }
  } else if (window.URL !== undefined) { // mozilla(firefox)
    try {
      url = window.URL.createObjectURL(file)
    } catch (error) {
      console.log(error)
    }
  }
  return url
}
