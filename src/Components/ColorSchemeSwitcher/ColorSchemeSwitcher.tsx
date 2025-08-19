import React, { FC, useEffect, useRef, useState } from 'react';
import './ColorSchemeSwitcher.css';
import { getSavedScheme, removeSavedScheme, applyScheme, getSystemScheme } from '../../colorSchemeUtils';
import { Auto } from '../Icons/Auto';
import { Moon } from '../Icons/Moon';
import { Sun } from '../Icons/Sun';
import { DropDown } from '../DropDown/DropDown';

type ColorSchemeSwitcherValues = 'auto' | 'dark' | 'light';

const matchMedia = window.matchMedia('(prefers-color-scheme:dark)');

export const ColorSchemeSwitcher: FC = () => {
  const [dropdownShown, setDropdownSown] = useState(false);
  const targetRef = useRef<HTMLButtonElement>(null);
  const [userScheme, setUserScheme] = React.useState<ColorSchemeSwitcherValues>(getSavedScheme() || 'auto');

  useEffect(() => {
    if (userScheme === 'auto') {
      removeSavedScheme();
      applyScheme(getSystemScheme());
    } else {
      applyScheme(userScheme, true);
    }
  }, [userScheme]);

  useEffect(() => {
    const systemColorSchemeListener = () => {
      if (userScheme === 'auto') {
        applyScheme(getSystemScheme());
      }
    };
    matchMedia.addEventListener('change', systemColorSchemeListener);

    return () => {
      matchMedia.removeEventListener('change', systemColorSchemeListener);
    };
  }, [userScheme]);

  return (
    <div className="color-scheme-switcher">
      <button
        className="color-scheme-switcher__value"
        onClick={() => {
          setDropdownSown(!dropdownShown);
        }}
      >
        {userScheme === 'auto' && <Auto />}
        {userScheme === 'dark' && <Moon />}
        {userScheme === 'light' && <Sun />}
        <DropDown shown={dropdownShown} targetRef={targetRef} onShownChange={setDropdownSown}>
          <button className="color-scheme-switcher__option" onClick={() => setUserScheme('auto')}>
            <Auto />
            <span className="color-scheme-switcher__text">Авто</span>
            {userScheme === 'auto' && (
              <img className="color-scheme-switcher__check" src="../../image/Checkj.svg" alt="check" />
            )}
          </button>
          <button className="color-scheme-switcher__option" onClick={() => setUserScheme('dark')}>
            <Moon />
            <span className="color-scheme-switcher__text">Тёмная</span>
            {userScheme === 'dark' && (
              <img className="color-scheme-switcher__check" src="../../image/Checkj.svg" alt="check" />
            )}
          </button>
          <button className="color-scheme-switcher__option" onClick={() => setUserScheme('light')}>
            <Sun />
            <span className="color-scheme-switcher__text">Светлая</span>
            {userScheme === 'light' && (
              <img className="color-scheme-switcher__check" src="../../image/Checkj.svg" alt="check" />
            )}
          </button>
        </DropDown>
      </button>
    </div>
  );
};
