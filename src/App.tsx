import { Select } from './components/Select';
import { GlobalStyle } from './style/globalStyle'
import { Option } from './interfaces'
import { useState } from 'react';
import { P, SpanP } from './components/Select/style';

const options: Option[] = [
  {
    label: "Audi",
    value: "audi"
  },
  {
    label: "Ferrari",
    value: "ferrari"
  },
  {
    label: "Mercedes Benz",
    value: "mercedes"
  },
  {
    label: "BMW",
    value: "bmw"
  },
  {
    label: "Tesla",
    value: "tesla"
  }
]

function App() {
  const [selectedItem, setSelecteditem] = useState<Option | null>(null)

  return (
    <>
      <GlobalStyle />
      <div>
        <Select
          placeholder="Select a Car"
          selected={selectedItem}
          options={options}
          onChange={(selection: Option) => setSelecteditem(selection)}
        />
        <P>Hello, my selection is <SpanP>{selectedItem?.label}</SpanP></P>
      </div>
    </>
  );
}

export default App;
