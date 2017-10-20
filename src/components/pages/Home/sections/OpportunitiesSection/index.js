import React from 'react'
import A_Title from 'A_Title_H'
import SectionCounter from '../common/SectionCounter/index.js'
import InfoColumns from '../common/InfoColumns'
import './styles.scss'
import {cssClassName} from 'utils'

const cn = cssClassName('SE_Home_Opportunities');

const SE_Home_Opportunities = ({mix}) => (
  <section className={cn([mix])}>
    <div className={cn('content')}>
      <A_Title
        mix={cn('title')}
        type='section'
        theme='dark'
      >
        Extraordinary opportunitites for business
      </A_Title>

      <InfoColumns
        mix={cn('info-columns')}
        columns={infoColumns}
        type='narrow'
      />

    </div>
    <SectionCounter
      sectionNum={7}
      theme='bright'
    />
  </section>
)

export default SE_Home_Opportunities


const infoColumns = [
  {
    imageSrc: 'http://via.placeholder.com/70x74',
    title: 'Based on Etherium blockchain protocol',
    text: 'Guaranteed security against hacking, corruption and loss of information thanks to complete decentralisation'
  },
  {
    imageSrc: 'http://via.placeholder.com/70x74',
    title: 'Independent fund and accelerator',
    text: 'Outside projects and promising ideas can receive expert support and investment for a launch into the Humaniq system'
  },
  {
    imageSrc: 'http://via.placeholder.com/70x74',
    title: 'Open API',
    text: 'Any project can merge into the Humaniq system'
  }
]