import React, { FC, useEffect, useRef } from 'react';
import './ColorSchemeSwitcher.css';
import { getSavedScheme, removeSavedScheme, applyScheme, getSystemScheme } from '../../colorSchemeUtils';
import { Auto } from '../Icons/Auto';
import { Moon } from '../Icons/Moon';
import { Sun } from '../Icons/Sun';
import { DropDown } from '../DropDown/DropDown';

type ColorSchemeSwitcherValues = 'auto' | 'dark' | 'light';

const matchMedia = window.matchMedia('(prefers-color-scheme:dark)');

export const ColorSchemeSwitcher: FC = () => {
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
      <button className="color-scheme-switcher__value">
        {userScheme === 'auto' && <Auto />}
        {userScheme === 'dark' && <Moon />}
        {userScheme === 'light' && <Sun />}
        <DropDown targetRef={targetRef}>hello</DropDown>
      </button>
    </div>
  );
};
