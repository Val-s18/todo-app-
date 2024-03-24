import { useState } from 'react'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button, Dropdown, DropdownTrigger, Avatar, DropdownMenu, DropdownItem, AvatarIcon } from '@nextui-org/react'
import { useAuth } from '../hooks/authHook'
import menuboard from '../assets/menuboard.svg'
import SearchBar from './Searchbar'

function CustomNavbar () {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const { authData, logout } = useAuth()
  const isLoggedIn = authData?.token && authData?._user

  return (
    <Navbar className='flex items-center' onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className='sm:hidden'
        />
        <NavbarBrand>
          <img src={menuboard} alt='' />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className='hidden lg:flex gap-4' justify='center'>
        <NavbarItem>
          <Link color='foreground' href='/'>
            Todos
          </Link>

        </NavbarItem>
      </NavbarContent>
      {
        isLoggedIn
          ? (
            <NavbarContent as='div' justify='end'>
              <SearchBar />
              <Dropdown placement='bottom-end'>
                <DropdownTrigger>
                  <Avatar
                    isBordered
                    as='button'
                    className='transition-transform'
                    color='secondary'
                    size='sm'
                    icon={<AvatarIcon />}

                  />
                </DropdownTrigger>
                <DropdownMenu aria-label='Profile Actions' variant='flat'>
                  <DropdownItem key='profile' className='h-14 gap-2'>
                    <p className='font-semibold'>Signed in as</p>
                    <p className='font-semibold'>{authData?._user?.email}</p>
                  </DropdownItem>
                  <DropdownItem key='logout' color='danger' onPress={logout}>
                    Log Out
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </NavbarContent>
            )
          : (
            <NavbarContent justify='end'>
              <NavbarItem className='hidden lg:flex ' />
              <NavbarItem>
                <Button variant='' href='#'>
                  <Link href='/auth' className='text-secondary-600'>Login </Link>
                </Button>
                <Button color='secondary' href='#'>
                  <Link href='/inscription' className='text-white'>Sign Up </Link>
                </Button>

              </NavbarItem>
            </NavbarContent>
            )
      }
      <NavbarMenu>
        <NavbarMenuItem>
          <Link
            color='secondary'
            className='w-full'
            href='/'
            size='lg'
          >
            Todos
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            color='secondary'
            className='w-full'
            href='/auth'
            size='lg'

          >
            Login
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            color='secondary'
            className='w-full'
            href='/inscription'
            size='lg'
          >
            Sign Up
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  )
}

export default CustomNavbar
