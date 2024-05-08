import { ImagesSquare } from '@phosphor-icons/react'
import { ImageEmptyContent, StyledImage } from './styled-image'
import { useEffect, useState } from 'react'
import useImageValidation from '@/utils/useImageValidation'
import { SvgSpinner } from '@/icons'

interface PropsImage {
  alt: string
  ratio?: '1/1' | '3/2' | '4/3' | '16/9' | 'auto'
  src: string
}

function Image({ alt, ratio, src }: PropsImage) {
  const [loading, setLoading] = useState(false)
  const [validation, setValidation] = useState<boolean | undefined>(false)

  useEffect(() => {
    setLoading(true)

    async function validateImage() {
      const validationResult = await useImageValidation(src)
      setValidation(validationResult)
      setLoading(false)
    }
    validateImage()
  }, [src])

  return (
    <StyledImage $ratio={ratio}>
      {loading || !validation ? (
        <ImageEmptyContent>
          {loading && <SvgSpinner />}

          {!loading && !validation && <ImagesSquare weight="fill" />}
        </ImageEmptyContent>
      ) : (
        <></>
      )}

      <img src={src} alt={alt} loading="lazy" />
    </StyledImage>
  )
}

export type { PropsImage }
export default Image
