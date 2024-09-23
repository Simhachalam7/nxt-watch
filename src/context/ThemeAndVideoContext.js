import React from 'react'

const ThemeAndVideoContext = React.createContext({
  isDarkTheme: false,
  savedVideos: [],
  activeTab: 'HOME',
  toggleTheme: () => {},
  addVideo: () => {},
  changeTab: () => {},
})

export default ThemeAndVideoContext
