import { useEffect, useRef, useState } from 'react'
import { Cover } from '@/components/CoverCard'
import CarouselButton from '@/components/CarouselButton'
import {
  StyledPerspectiveCarousel,
  PCMain,
  PCControl,
  PCCarousel,
  PCCarouselContainer,
  PCCoverFlow,
  PCItem,
  PCActiveItemTextArea,
  PCActiveItemContent,
  PCActiveItemTitle,
  PCActiveItemText,
} from './styled-perspective-carousel'

type CarouselData = {
  src: string
  title: string
  text?: string
  coverType: 'bd' | 'dvd' | 'collection'
}

interface PropsPerspectiveCarousel {
  data: CarouselData[]
  startIndex?: number
}

function PerspectiveCarousel({
  data,
  startIndex = 0,
}: PropsPerspectiveCarousel) {
  const [active, setActive] = useState(startIndex)
  const [coverHeight, setCoverHeight] = useState(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const coverRef = useRef<HTMLDivElement | null>(null)

  const minIndexPossible = 0
  const maxIndexPossible = data.length - 1

  useEffect(() => {
    if (coverRef.current !== null) {
      setCoverHeight(coverRef.current.clientHeight)
    }
  }, [])

  const prev = () => {
    const getPrev =
      active - 1 >= minIndexPossible ? active - 1 : minIndexPossible
    setActive(getPrev)
  }

  const pressingPrev = () => {
    if (intervalRef.current) return
    intervalRef.current = setInterval(() => {
      // setActive((prevIndex) => (prevIndex - 1 >= minIndexPossible ? prevIndex - 1 : minIndexPossible))
    }, 50)
  }

  const next = () => {
    const getNext =
      active + 1 <= maxIndexPossible ? active + 1 : maxIndexPossible
    setActive(getNext)
  }

  const pressingNext = () => {
    if (intervalRef.current) return
    intervalRef.current = setInterval(() => {
      // setActive((prevIndex) =>
      //   prevIndex + 1 <= maxIndexPossible ? prevIndex + 1 : maxIndexPossible,
      // )
    }, 50)
  }

  const stopPressing = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }

  const OFFSET = 70
  const ROTATION = 50
  const BASE_ZINDEX = 10
  const MAX_ZINDEX = 42

  return (
    <StyledPerspectiveCarousel>
      <PCControl>
        <CarouselButton
          direction="prev"
          size="medium"
          onClick={prev}
          onMouseDown={pressingPrev}
          onMouseUp={stopPressing}
        />
      </PCControl>

      <PCMain>
        <PCCarousel
          style={{
            minHeight: coverHeight + OFFSET + ROTATION * 2,
          }}
        >
          <PCCarouselContainer
            style={{
              minHeight: coverHeight + OFFSET,
            }}
          >
            <PCCoverFlow>
              {data.map((item, index) => {
                const isActive = index === active

                const transform =
                  index < active
                    ? 'translateX( -' +
                      OFFSET * (active - index) +
                      '% ) rotateY( ' +
                      ROTATION +
                      'deg )'
                    : index === active
                      ? 'rotateY( 0deg ) translateZ( 140px )'
                      : 'translateX( ' +
                        OFFSET * (index - active) +
                        '% ) rotateY( -' +
                        ROTATION +
                        'deg )'

                const zIndex =
                  index < active
                    ? BASE_ZINDEX + index
                    : index === active
                      ? MAX_ZINDEX
                      : BASE_ZINDEX + (data.length - index)

                return (
                  <PCItem
                    key={index}
                    ref={coverRef}
                    style={{
                      transform,
                      zIndex,
                    }}
                    onClick={() => {
                      setActive(index)
                    }}
                  >
                    <Cover
                      disabled={!isActive}
                      type={item.coverType}
                      src={item.src}
                      alt={item.title}
                    />
                  </PCItem>
                )
              })}
            </PCCoverFlow>
          </PCCarouselContainer>
        </PCCarousel>

        <PCActiveItemTextArea>
          <PCActiveItemContent>
            <PCActiveItemTitle>{data[active].title}</PCActiveItemTitle>

            {data[active].text && (
              <PCActiveItemText>{data[active].text}</PCActiveItemText>
            )}
          </PCActiveItemContent>
        </PCActiveItemTextArea>
      </PCMain>

      <PCControl>
        <CarouselButton
          direction="next"
          size="medium"
          onClick={next}
          onMouseDown={pressingNext}
          onMouseUp={stopPressing}
        />
      </PCControl>
    </StyledPerspectiveCarousel>
  )
}

export type { PropsPerspectiveCarousel }
export default PerspectiveCarousel
