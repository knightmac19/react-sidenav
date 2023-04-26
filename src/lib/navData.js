import { HomeIcon } from "@mui/icons-material/Home"
import { TravelExploreIcon } from "@mui/icons-material/TravelExplore"
import { BarChartIcon } from "@mui/icons-material/BarChart"
import { SettingsIcon } from "@mui/icons-material/Settings"

export const navData = [
  {
    id: 0,
    icon: <HomeIcon />,
    text: 'Home',
    linke: '/'
  },
  {
    id: 1,
    icon: <TravelExploreIcon />,
    text: 'Explore',
    linke: '/explore'
  },
  {
    id: 2,
    icon: <BarChartIcon />,
    text: 'Statistics',
    linke: '/statistics'
  },
  {
    id: 3,
    icon: <SettingsIcon />,
    text: 'Settings',
    linke: '/settings'
  }
]