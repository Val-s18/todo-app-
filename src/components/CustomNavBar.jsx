import { useState } from 'react'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button, Dropdown, DropdownTrigger, Avatar, DropdownMenu, DropdownItem, AvatarIcon } from '@nextui-org/react'
import { useAuth } from '../hooks/authHook'
import menuboard from '../assets/menuboard.svg'

function CustomNavbar () {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const { authData, logout } = useAuth()
  const isLoggedIn = authData?.token && authData?._user

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className='sm:hidden'
        />
        <NavbarBrand>
          <img src={menuboard} alt='' />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className='hidden sm:flex gap-4' justify='center'>
        <NavbarItem>
          <Link color='foreground' href='/'>
            Todos
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href='/auth' aria-current='page'>
            Auth
          </Link>
        </NavbarItem>
      </NavbarContent>
      {
        isLoggedIn
          ? (
            <NavbarContent as='div' justify='end'>
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
              <NavbarItem className='hidden lg:flex'>
                <Link href='/auth'>Login</Link>
              </NavbarItem>
              <NavbarItem>
                <Button color='primary' href='#' variant='flat'>
                  <Link href='/inscription'>Sign up </Link>
                </Button>
              </NavbarItem>
            </NavbarContent>
            )
      }
      <NavbarMenu>
        <NavbarMenuItem>
          <Link
            color='foreground'
            className='w-full'
            href='/'
            size='lg'
          >
            Todos
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            color='foreground'
            className='w-full'
            href='/auth'
            size='lg'
          >
            Auth
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  )
}

export default CustomNavbar
