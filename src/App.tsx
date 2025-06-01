import { useState } from 'react'
import ConfigTab from './components/config-tab/config-tab'
import Tabs from './components/tabs/tabs'
import ResultTab from './components/result-tab/result-tab'
import { ValidatedForm } from './types/form'
import css from './App.module.less'
import { sampleJson } from './const/sample-json'

function App() {
  const [parsedJson, setParsedJson] = useState<ValidatedForm>({ items: [] })
  const [activeTab, setActiveTab] = useState<number>(0)
  const [wholeJson, setWholeJson] = useState<string>(
    JSON.stringify(sampleJson, null, 2)
  )

  const tabData = [
    {
      title: 'Config',
      content: (
        <ConfigTab
          onValidSchema={setParsedJson}
          setActiveTab={setActiveTab}
          wholeJson={wholeJson}
          setWholeJson={setWholeJson}
        />
      ),
    },
    {
      title: 'Result',
      content: (
        <ResultTab
          items={parsedJson.items}
          heading={parsedJson.heading}
          buttons={parsedJson.buttons}
        />
      ),
    },
  ]

  return (
    <div>
      <h1 className={css.title}>Veeam Task</h1>
      <Tabs tabs={tabData} activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  )
}

export default App
