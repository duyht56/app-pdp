import React, { useEffect } from 'react';
import { useState } from 'react';
import styles from '@/styles/modules/DetailProps.module.scss';

const Tabs = props => {
  const [tabs, setTabs] = useState(React.Children.toArray(props.children));
  const selectTab = index => {
    const newTabs = [];
    tabs.forEach((tab, i) => {
      newTabs.push(React.cloneElement(tab, { isActive: i === index }));
    });
    setTabs(newTabs);
  };
  const [selectedIndex, setSelectedIndex] = useState(0);
  const updateSelectedIndex = index => {
    setSelectedIndex(() => {
      return index;
    });
    selectTab(index);
  };
  useEffect(() => {
    selectTab(0);
  }, []);
  return (
    <>
      <div className={styles['tech-specs__navigation']}>
        <div className={styles['tech-specs__tabs']}>
          <div
            className={`swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events ${styles['tech-specs__tabs-list']}`}
          >
            <ul className={styles['swiper-wrapper']}>
              {tabs &&
                tabs.map((tab, index) => (
                  <li
                    key={index}
                    className={`${styles['tech-specs__tab']} ${styles['swiper-slide']} ${
                      index === selectedIndex ? styles['swiper-slide-active'] : ''
                    } `}
                    style={{ width: '205.75px' }}
                  >
                    <button
                      onClick={() => updateSelectedIndex(index)}
                      type="button"
                      className={`${styles['tech-specs__tab-link']} ${
                        styles['tech-specs__tab-link']
                      } ${
                        index === selectedIndex
                          ? styles['tech-specs__tab-link--active']
                          : ''
                      }`}
                    >
                      {tab.props.title}
                    </button>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
      {tabs}
    </>
  );
};

export default Tabs;
