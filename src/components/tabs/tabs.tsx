import React from 'react'
import css from './tabs.module.less'
import clsx from 'clsx'

type TabProps = {
  tabs: { title: string; content: React.ReactNode }[]
  activeTab: number
  setActiveTab: (i: number) => void,
}

const Tabs: React.FC<TabProps> = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <div>
      <div className={css.tabs}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={clsx(css.tab, {
              [css.activeTab]: index === activeTab,
            })}
            onClick={() => setActiveTab(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className={css.tabContent}>{tabs[activeTab].content}</div>
    </div>
  )
}

export default Tabs
