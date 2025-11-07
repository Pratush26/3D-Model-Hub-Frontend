import { Link, NavLink } from 'react-router'
import '../Utils/Utility.css'
import Logo from '/logo.svg'

export default function Navbar() {
    const user = null;
    return (
        <header className="grad py-4 w-full">
            <nav className='w-11/12 mx-auto text-white flex items-center justify-between gap-2 text-sm font-semibold'>
                <Link to='/' className='flex gap-2 items-center text-lg'><img src={Logo} alt="logo" className='h-8 w-auto' />3D Model Hub</Link>
                <div className='space-x-4'>
                    <NavLink to='/add-model'>Add Model</NavLink>
                    <NavLink to='/browse-models'>Browse Models</NavLink>
                </div>
                {
                    user ?
                        <div className='space-x-4'>
                            <NavLink to='/profile'>Profile</NavLink>
                            <button>Log out</button>
                        </div>
                        :
                        <div className='space-x-4'>
                            <NavLink to='/register'>Register</NavLink>
                            <NavLink to='/login'>Login</NavLink>
                        </div>
                }
            </nav>
        </header>
    )
}