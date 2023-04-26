import { Home, TravelExplore, BarChart, Settings } from "@mui/icons-material"
// import TravelExplore from "@mui/icons-material/TravelExplore/"
// import BarChart from "@mui/icons-material/BarChart/"
// import Settings from "@mui/icons-material/Settings/"

export const navData = [
  {
    id: 0,
    icon: <Home />,
    text: 'Home',
    link: '/'
  },
  {
    id: 1,
    icon: <TravelExplore />,
    text: 'Explore',
    link: '/explore'
  },
  {
    id: 2,
    icon: <BarChart />,
    text: 'Statistics',
    link: '/statistics'
  },
  {
    id: 3,
    icon: <Settings />,
    text: 'Settings',
    link: '/settings'
  }
]