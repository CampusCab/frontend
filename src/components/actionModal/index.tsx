import './index.scss'

import { ReactNode } from 'react'

type ActionModalProps = {
  header?: ReactNode
  children?: ReactNode
  actions?: ReactNode[]
  show?: boolean
}

const ActionModal = ({ header, children, actions, show }: ActionModalProps) => {
  return (
    <>
      {show && (
        <section className='modal__bg'>
          <div className='modal'>
            <div className='modal__header'>{header}</div>
            <div className='modal__body'>{children}</div>
            <div className='modal__actions'>{actions}</div>
          </div>
        </section>
      )}
    </>
  )
}

export default ActionModal
