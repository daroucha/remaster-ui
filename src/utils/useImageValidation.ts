import { validateImage } from 'image-validator'

const useImageValidation = async (url: string) => {
  const isValidImage = await validateImage(url)
  return isValidImage
}

export default useImageValidation
