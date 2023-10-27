import { useCallback, useEffect, useMemo, useState } from 'react'
import Modal, { ModalProps } from '../Modal'
import styles from './index.less'

const Preview = (props: ModalProps & { value: string[] | string }) => {
  const { value, ...nextProps } = props 

  const [ currentIndex, setCurrentIndex ] = useState(0)

  const arrayValue = useMemo(() => {
    return (Array.isArray(value) ? value : [value]).filter(Boolean)
  }, [value])

  const valueLength = arrayValue.length

  const handleChange = useCallback((cal: number) => {
    setCurrentIndex(prev => {
      let newValue = (prev + cal)
      if(newValue < 0) newValue = valueLength - 1 
      newValue %= valueLength
      return newValue
    })
  }, [valueLength])

  useEffect(() => {
    setCurrentIndex(0)
  }, [value])

  return (
    <Modal
      {...nextProps}
    >
      <div className={styles['preview-modal']}>
        {value.length > 1 && <div onClick={handleChange.bind(null, -1)} className={styles['preview-modal-prev']} />}
        {
          arrayValue.map((item, index) => {
            return (
              <img 
                src={item} 
                key={item} 
                style={{
                  opacity: currentIndex === index ? 1 : 0,
                  position: currentIndex === index ? 'relative' : 'absolute'
                }}
              />
            )
          })
        }
        {value.length > 1 && <div onClick={handleChange.bind(null, 1)} className={styles['preview-modal-next']} />}
      </div>
    </Modal>
  )
}

export default Preview