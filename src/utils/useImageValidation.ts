/**
 * Method validateImage extracted from image-validator: https://github.com/henperi/image-validator
 *
 * This method validates a File (input) or an image URL
 * @param src - The image to validate, an input File or a local or remote image url
 * @param config - an optional config object that defines the method behaviour
 * @returns - Returns true for valid images, throws or returns false for invalid images
 */
const validateImage: (
  src: string | File,
  config?:
    | {
        throw: boolean
      }
    | undefined,
) => Promise<boolean | undefined> = (src, config) => {
  if (typeof window === 'undefined') {
    throw new Error(
      'Cannot use this utility method in a non browser environment',
    )
  }

  let url = ''

  if (typeof src === 'string') {
    url = src
  } else {
    var binaryData = []
    binaryData.push(src)

    url = URL.createObjectURL(new Blob(binaryData))
  }

  const image = new Image()
  image.src = url

  return new Promise((resolve, reject) => {
    image.addEventListener('error', () =>
      (config === null || config === void 0 ? void 0 : config.throw)
        ? reject('The media resource is either invalid, corrupt or unsuitable')
        : resolve(false),
    )

    image.addEventListener('load', () => resolve(true), false)
  })
}

const useImageValidation = async (url: string) => {
  const isValidImage = await validateImage(url)
  return isValidImage
}

export default useImageValidation
