import {
  FaGamepad,
  FaBook,
} from 'react-icons/fa'

import {
  MdLiveTv,
  MdMovie,
} from 'react-icons/md'

import {
  BsMusicNoteBeamed,
  BsNewspaper,
} from 'react-icons/bs'

import {
  GiSportMedal,
} from 'react-icons/gi'

import {
  FiTrendingUp,
} from 'react-icons/fi'

import NavItem from './NavItem'

function Navbar() {
  return (
    <>
      <nav className="px-9 py-7">
        <div className="flex justify-between items-center w-full overflow-x-auto px-5">
          <NavItem title="Gaming" Icon={FaGamepad} />
          <NavItem title="Learning" Icon={FaBook} />
          <NavItem title="Live" Icon={MdLiveTv} />
          <NavItem title="Movies" Icon={MdMovie} />
          <NavItem title="Music" Icon={BsMusicNoteBeamed} />
          <NavItem title="News" Icon={BsNewspaper} />
          <NavItem title="Sports" Icon={GiSportMedal} />
          <NavItem title="Trending" Icon={FiTrendingUp} />
        </div>
      </nav> 
    </>
  )
}

export default Navbar
