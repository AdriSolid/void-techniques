import * as React from "react";
import "./style.scss";

type Component = {
  id: string,
  [tab: string]: any
};

type Tabs = {
    id: string,
    name: string,
    selected: boolean
};

type State = {
  id: Tabs
};

const Tabs: React.FC<{ type: 'tabs', componentInfo: Component[] }> = ({ componentInfo }): any => {

  const [selected, setSelected] = React.useState<State | {}>({});

  React.useEffect((): void => {
    let tabsElements = {};

    for (const info of componentInfo) {
      if (info && info.tab) {
        tabsElements = {
          ...tabsElements,
          [info.tab.id]: {
            id: info.tab.id,
            name: info.tab.name,
            selected: info.tab.selected
          }
        } as State;
      }
    }

    setSelected(tabsElements);
  }, []);

  const switchTab = (id: string): void => {
    let tabsElementsCopy = {};

    for (const tab of Object.values(selected)) {
      tabsElementsCopy = {
        ...tabsElementsCopy,
        [tab.id]: {
          id: tab.id,
          name: tab.name,
          selected: tab.id === id ? true : false
        }
      } as State;
    }

    setSelected(tabsElementsCopy);
  };

  return selected && (
    Object.values(selected).map((tab: Tabs): JSX.Element =>
      <div
        key={tab.id}
        className={`tab ${tab.selected ? 'tab--selected' : ''}`}
        onClick={() => switchTab(tab.id)}
      >
        <a
          href={`#${tab.id.replace('-tab', '')}`}
        >
          {tab.name}
        </a>
      </div>
    )
  ) as JSX.Element[]
};

export default Tabs;
