
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { logOut } from "@/redux/feature/UserSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { NavLink, useNavigate } from "react-router-dom";


const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const email = useAppSelector((store) => store.user.user?.email)
  const handleLogOut = () => {
    dispatch(logOut())
  }
  const menuItems = [
    { label: "Home", path: "/" },
    { label: "allFacility", path: "/allFacility" },
    { label: "register", path: "/register" },
    { label: "Contact us", path: "/contact-us" },
    { label: "About ", path: "/about-us" },
    ...(email ? [{ label: 'Dashboard', path: '/dashboard' }] : []),

  ]

  return (

    <div className="py-2 rounded-sm">
      <div className="navbar bg-[#8ac0e4] rounded-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {
                menuItems.map((item, index) => (
                  <ul key={index}>
                    <li className="cursor-pointer py-1" onClick={() => navigate(item.path)}>
                      {item.label}

                    </li>
                  </ul>
                ))
              }
            </ul>
          </div>
          {/* <a className="btn btn-ghost text-xl">BB-Nursery</a> */}
          <a className="font-bold text-[#3a7fff]  text-2xl"><img className="w-16 h-16 rounded-full" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAB7FBMVEX///8BNWcBNWn///0AKmQAKV5sdZT1+fmhVj9fdJMBOn/3kh75phorR3PBxtEAMGdOYYIAAADT2t+ywtDS3eZAVXrS09b2gSABNmX///na3uQpTHfy6OMQOWz6oxudTTa3hXMAEVT///P2lxri6e78rikALW8AABdcZZrh5O4AAEgAN2IALmAAN3HZ1tT8kQBydnn2eQArU48ALn0ANoEUAACBnMD3gwCRqMAAAGsAG3f1iyzI081mdqLym2K8gXAAHldvhKAAHmG3wNZkgqtPeKR5jK8+b6Siq78TX5KYts/Q0edjiqAWU5y+zuI9Z6IAXZr31bP2xYjyvnD7sXH75dZ/qs2XlpLgo23+rk7/6sLvtYfOdwCchHD9r2JjcoNBRUxVLhFXkrj7vJ7Xixn4nTvKv7g4KiJmOQCzZwD6lUoyPE20qZndupCNkaKHVAD606KMWyHNvpZWXFZBKRSUah9ANhTfzbfHon0mJi9gQhgADyrWsXJcV1x8YSU9SYmpdhkLGyfAiBopFABnXnG/f0AfGhgnIw2GXWF/bmelbkzQgjcUKkdjSAmRckNXTnZFHiZURD9sNSlwUnBACgCVdX1tQj4uAAB5OhanZlrEnJBNJR3Ic0hnHwPVczqDXEQ8KVIkABKnWRgoMSy2rsmTAAAV90lEQVR4nO1cC1vbVpoWkszBJpaMJV+xIcCJufgC2MRRDC62sWUNLPaQhDopIaFtYtokdZNtMuSyLGmbpiFpN4VusgnpTmamf3S/cySDuczuPM/YXWYevRDLSDrSec93PZ+OwjAmTJgwYcKECRMmTJgwYcKECRMmTJgwYcKECRMmTJgwYcKECRMmTJgwYcKEieaC8/k4APlGP/+RQQjs8fkHR53CPwUZhOXSzMxMSUa6lP4RwekywZKapygUVGUOcVThDp9MdbFuWL95X/9P0N6hmXxR1SRBEDQ1bvtdMS8zPsb3V8hQHtyeXh4ngBTkdFER3O5YLCbPKnllTviXeQUdPI9j9vUfZPcbdvJvBddfKqvu2BRQwbIy+/vfJ1E/mirn8YGhJ0LxLS6cO38BsLC46DuGZHz9JVsy5gZgBssfziZl0kkOp9P44KnuysXR0dFO8nvmzKWP/h86+7+CjLacUmJuYIN8SJpNzhdL+iGkFrGPegFQKDitf+ly1/KVTh1Xbk8pV1c+Xl7oR/rRYwDSUVRWY0QwCKFPpPwnJUSNBTjgtEIViXSW6//UM3rtUWUJiAx0Xl+qjq1+9nnn9dHR8x8hkO1xYEOdkpoGucTciJt1FpViUkJ6z8C85XKJ66dcfIs3xjsnLz+9eWvpUufopS9qq19eO9FDRDTac7v/ePho4mjleaJiMVl2fjJbLMxipq41cEwpIJLdMP23Jz2k53cGb1ZufXH+X7/67FrPiZ4Tp04MkL0XFg85vlZ22Yh1aHjOKZXmhjHcnKgOjLgP5VXgIiizyWShWNBKuB4LycZfFMg2sOQ5o5vKnbuDK5VbK8vnTxD0ABugM3phkerrb8SGfECETw/FN+LxoXRaVUqg6TTGD8edkpZUIPIXix9K+ECPkip0MnBh3GPYfee1e3/oGjy9vHb70gkiGyBE2Fzv9/2GEdQ3o27E84orwScIJmzxIQVT8WhFqfBJoVwogLXI3EF9keOY8S2Nj58ZBSKe0c6BnlP3HzwcfPRVZe2j2+cvnQL0gLMevQHpwm8SdcCG5woTBQkjeWPCZotGbROAUGIjiaADyd/NFwuFZHFWFsCd+foPNLbJDFr46Ny5K1cGRs90Tg6c+Lf1fz9x7U7Xo5tjY7fca2uLgLXb589ch5H5Tcig5Mg8MRMGZSdsQIf8mzirzZ7dmGMCeUUqKsmsPIfI4B7SleJsYP1qrVIRYouLC+fBE4/dpeby+OHg4KNHXwMerKyMSb5zV1pvM8T25zaiNAxywzP5+EQiOmGL2hKJD0HL1JQq54WYuxILHNkUBjuprned7tIxpjl9lW+vEUMh1nLtm8df3rlz58e738KxWv9BmbaCDTMTT2OIamguW85LSLZPTNhCE3k8PCNhRpov/k4iATP219p/+GTAA7j8+Z03D789ffrBYG3t3CWDDqUEOHXt3senbwotpwIJik1DYNdyNp4cJkaK1eBEXEMk8uNhRh6ap2T8R7QFIC65Pg5cBqgHvvbd5uDTwZUauLJTOguDFKQEn3/2/a2WsxHiSeg40uIqJtGeAwvXygIN6hwDiYtcECiZw/m+Dw3LMi48AzKThl++OPb9vXs/gk4Rz9wAGjofb7Y0dILvd7qSkJ1g1VVCNKxxJLIkkVGAIWNf0EDJ3E5khFZ91gVRCUulZF5V558DGSNiXqmcvnfi1KnvPuuCPIAoG4jFkAzJ2F5Uj5rNNQdk7PGQlXBJp50NB4aTuOEkVSXZjBszBhdKWPYnpXK+nC4W5v/oGfdcv359AIJJ9YcfT5FAOfD4R6Czdl4n02OQ6Rw4d9Q8u0lkIKVSoiAR3G7dNzFpIAPJ5Gw5puvZXiIvDyeT5WIhmc8nP5n3jF/4dA2wcO72+rff0M6f6Ln2+O6j9cptPQeokxm9stgiKqSnDJ6wpdP5obKfafSb/kYynByXYmQ2g1CgpCThR4LJZjlf0FRFkmYKT8YXKusrKyvrY5VK138Qm+/R/fKPXT9UFk719OyR6by+2Do98zH5VDQRsk0M4X3BuYEMSUEKSTeZAmiF+IQtkSJRdb5cVj9US37sc/7+xcL64ODHD592Pfr6wWrlo0u6KGjYHBxcXzzVIJnOzoXWJWicnLBRTDSS8XHDSmAv1HPMcEKYctdS8YJNjc/MTry0uzaDoSGBHArkHQsPvv+8c2Cgp/O7rcGnXU8C53p2fdg3fxh8OnUJZDNgeLszn7Yso4Ec0iCTkI6QjD6HJL+fFGPluOQLWOPyREy2P3vy83cvE0OQk8m1m9/+9OvK1urW1vad+yvf333a9Wv19qldNtcePnpQPa/P0SiZpZbNODnUXSej7CsQ4SRuqHn5AmrCBkFoGMmJLCrK8tDJV6+u/ZywaWOn/3N7+5W76o5VX71+/dPq6pcPt07flG7rTIgXO/XjILAZGDXU7MzF1k2fS4kJnUxoCO3dxIcUq4D2DBW5ExuK0+2Xk/H4WSyoPslx8dnyjWDmv7Z7O3p3fMSsqh0dvb292z+9u7va9aB6zmBDPu59/eDWhV3JfHBEitck1LUMTBoZ8QP2yrVUIq5hGhxp1FQ2lJIG052Xr+6Hkv2KG6tj361/9/p1BzCYxj4I62tvezs6pqd733Rsv1vtWlm8tGc3J+4NrtyqV2zGW0aG47K6YGD6klLABdACJJLiKWCXyMt6cuODfCerKNrQy1cXr3Q+m/A5Z7lS/OKLr7Y7tgGbFUj+q8tvgFbgVu9ORy/Q6dKIE+ipS+dOV52NB8i0KmqiQoLOXGyhVDo5q874QTCyagvpZuSi1Vd5RkuXs0q77dXFG55Oz4uUjEpYzi/f6Hr97jUYjCBUK9r2u3fvXld9z6uB52/fdvRur2yeqJtNz4Bn4E7X1bXro5OEzIWWqRkuQ6pPpGBTMMalWVWVZoZCIUP1QhPZklZTBMVWVofs9z+YJIl+Z0pDGCNl7OTqNmjZNJkYcFXQse1lVH2GqtOBHfLH1kOaCUAqPTA5MHD9zuDY7QEqmaWWuWYcny2cjSZSBZnmmAiDiRsegWpfolDCKKDaChvRL26QbPLM5eeUDC61Lz+FToP1g0tkTpKvIJg5bnUtMD0NBtT7bvVxZz1QegYufzxYO9/ZOTk+/ukRU9VmkSkxyZRN2kvMUT5k26OTmoFd8pAt8fL2+OQNz/gvL1OpkOIDMv6XW1+/6+h4WyWN1nqJJ6iuvUVrz1Dlv6v47c7zju3VO517uHa3a+o6CHaydRkAkOlHNrnx+koDF1sCnALS5nPB25Mv7l/448tUt4YTCuT+GA9tba2+7z1JLYAIhnjm6cXna/j9Jq5OMzvgpp/eoXVa8jHQ+fjpo7Vxz/iNxRaSme1HG4hruEEpntjjUmT6kaxGo1943u988AyUjmH6cxqRDBra/On9T707RKaB5x2UTEfv895ArCMWWBd8vWtVCDpfQp5cl829rrGlceKZW0UGOTQGxdG+4J/eI5PSGB92t6deXXy2c/FP8Rmwn+HS2ZIumftPe19vVUmaUKWC0Qk9B347O1zlLdm7vfViYFfRBj7uqt4Y/7R1VU1USHIo7m+szXHKnpadxQxyCuno/feVi4l0iRi+UA7lBb8f4/j9z153bFXIQCzvkiF+YHrnZCDwPhZ439sxfWvzmz2zufzTr18QLWsZm2ScQWm58Vkdh+Ohui8rA5eYMPRq+dVOnxU7BeRUEmltyFZUJcm+5HnQ27EpgIq+3ZMMZTRdnd5hlu9ug0UJW5frHs3j+Xxwc8HHtW4KUEphJjnTIHrwtGlanAWkZhmn2y0Uf968b4/jkoKdVpsmI1lQC/GN0OYvD7anq2MCE+jYTwZ8HNhN7+vVNycDXOVh58BoJ41QnsnPVoi/aF3WbFMYKdlwAxg51V4ul+OAiRKCyTKo2eaTRAlnQcWGBKJqCA8LWrZsD//5fay67q52HMb0W5LVVECRa38ZmNS5eDyXK6iVZBi1jPxZ1BiVhTRYxPCw3+8v5elTTHXj51TSV5TnNlJxiZCh8MvVubEtN6qOLR8UDM2fyWZL8zHVpy/GDS6eG6ilKzt8cmoOKW79DpQSzu8W+5Bmjbmn3GrclkCzeXn+ycWfE6rs06mAgPr7x8b8qLr1+gjREEZvq2MVpvrmna5jHs/4QmsfOHFMMc7MKfU/INVISrtc3LigTU35FVsij+ZLxZf/Nul5mwjNIrSIsayo+XxxY6uKmZ0/UzE8P0TmZACvV092bP1lUuey1OrnM5x8VsJK/fmRj1FUZDhqPDU1FStPyYtCOVXSilrm/o3JyfHLz84mkjKYDddPrEdYrzh3Oga3D1MBQBBCX8H0bRUEMz45voT6UWsfaXBcEhzVjEGGE8h0WVc3Yi5T7qLb7VRTc2Vt4smFM8SQgU4wVFYFWXYCkje/kpY7Oh5sHaVlJNhXv33fu/0X0m4Jpq4tfX4OiTKkM9nhWRlR4GRJNx1EubjdWEkn1cKEFC8k7E9eeHR9ufH85z9F4+VisRzfiP4w9gq0bGvr/SE2O8Tad7Z/7X39EMgsgQqj1i8GkDcURU2qyaRay2v6LuzUubhjytmzqVQqHk/USvGXv8AAU5yZ/OXtM8D7Zxvq2NabN5BVvtvu3Q8QjI+JvYUMrffjyzcWUOs8ciN8Wj6ZHgKkh9KCwcWvY8qZTFMUhmB+qbaf/KABFy7cr6XzGFc2l5dPTp/c3ITP6ZN1TN9iwHdV4Qscvr/IHHgU2iJqYCMkrgBgo98R7YHuJ4cQqOSwP1DH4iL882M/mFgggDHdhwON8JElJsb3VsbKfx64s9Zjgay7CWQEe4Y/BsjYm/GAU7CL7DGA2AwyHJBpOwYAMk1wCYQMCz9eVr+qsdnd7n1nWXoibNkDZ+g7WO/BFkfBu9vEuFwb3TRFMkxdMt42rzdisVgivIWHPV4vy3p5XrQQwBZ0Ue+H1xsl7OmpFovI1scgHOEjljrobugjazmEMBk1ViR2Atdl67ybRoZcjo16Ixm7NQuwOoIZETotBl2OOlx2PiRS4bGi1+vlLQ5rtgandvMhQ0yRbsceutkMT03BcQhBllCxO/Q7sRlLW3PJ6JLh7TXBj8lsS5bUbhCF6JKcdbgFrd1r0SXTJooOzYlJ7oYFzZHR22cU5x4EreYS2aAY9DsPwO9qY/lucicCp1Rz8WzzyfCuEtpdUI3kLCuKrn2LMLBmt1B1DAUV/+6bDJxf5SnJPqnRgDkkWPk2Nnj4fi6Rd0iIqy9BR0I2yDaXDLhGl2wsCDdWLlgtZBdd+qe/hwGp8w88GDnvEpD+4AZ2QwMkUJJARl87WF8uj7NiOGosethbQ8+4ct2l+lyZXgClLWxzHQAbVOrd0NddDNsjlMxe5+Cj1Md6LXY69+T0RYmUpGSPeCkZfaVifc0GdvFBmKwa7wdwdEx8QEYjw9NfvxPjtEfamhRnDMlE7EQwPkZWJLLk0odASXQyPlKwREZemM+wolYfbYwZnSRSMm2sLhlj6kh6znFaLmzchNt7pcEVIXfiGFnTiIT7sdXiJW6liZIRX9I1MnIu1dcXyfqZGiiUoXn+TC7HW/10Ib80EmrHdFEZyob7cnaF1lc4v5XXyTDY2ma32x0yXaUti2E7wU0/vY6L/hFxUXJSri/XF7kqMwoEAm9TJQOGQIdPsLMRke9rA5frpZIB08Ah0IKRLO02HglqZF7iQ09Gol7WMlIjS04Qp4h1Mu05UbRkXJguFwiLBCGvk0xX/fYM/dNBpSyAGvNijrV2W6JssyXjoqrBOGsOV5DlcxG2jZIhy65JDOUdTqIbgREH9XA+a1+U+sARxeia2CfRFecgIwi+QbocGNvD1OsGiVgZfzf1enw35ojWYsXqCop8JtLkOEM6HpR9et0Xge+32kEwUd2bMTgSBvMm2gVqOKIvEMIZr05GjCBduyyUDIetOZGnkiFruYPsPjI0BnjhTro7QTK9kx6zm+rNxCzidp0/lrIiG9Ylw+EczwdduuOdHcnSRlKfV6TJDdsnUxeQrZPJErsggQSuI0WOIBPma4ip+xAOz1i9zc8AxKBWf22MDrVioZIBX4oURdGciJZprLkabaT1hY20EkwFETK8rmbILQBkRBenW/VwvJ8MJEUK2n1tC8ZKaW7QpOMXCWbps0w9qED3QlQy4JTI3F8PCYIFBEgaSX2QYUFiw7aNkFW2HCVTj4+M7poZKainpgfJiMGsQJVVj1Wo3RJtsmQgCEfsVkXC9XvIGYNMPScAcXVnIjoZnKFUIH8bobZEbWa3Bs7R1ZySnW+LHibDtgXFkN1Kgky9B5Foc20GkOvjwQ+BvtNXrThk53XXvLssXHKx0YhDX3iW7yMzAjYINkSEUHKJu2RIjgLGkA1Cen0EGfAsmT6YAYh2q+TX13a6+CaTYcWrSjAXFSORkMtJkwFHRs8AOP2RheaywEiHg3pdEHfnwAN4+1y0Pwj0npDx+ZBcclP+2JrxesNH2Ewba7k66+XbwqIlZJ8j10KOZkqG2AwPQ46v8hnw/NBfUB1EyZA4TvwTO9IXApNnwzmqZ8Awn8vlLAW9rI6NDIB8GxmRGZJ4uV0Qn45SM3InSBlyvJcPSjoZvokZAJkuuahyYamWrQkkqoNH1nMzxs/vTidJEhfU6qV0SULGu821XJuRaOJ2Syiol1410Rs+goyRJJE7ZXUP7g+Dh2smGa9Uz4MZY7Gf1lcnI+6b0PMk8aqfqZuT4LKIu5LhvX0KPYyzfPQIb5YR9MXSe+21SDPJkBm8ho0XRDm6mIXzd7O7ZNoaCxRei1XWF6IZqT4SujNegwy4NT4czdH+Mk4Xf5gMZN3kqQzNsH3UhzvtothEmyH2F8lKqEE4MuhxI5k9sJCUarpb1X2R4sq0iUTN6F/t4JksLn3KoFnEXTLMns3U45l+K9kaYZs5OSOWDZPkrCbrr8xggczggQxZt4BK/H4yLBhuu4bp24zIqbUHeVKmYnOztHzQbgGfzdf0p7YO2pQNC/SpWj2gZbr33YknVZymFzQybS5rtlarkZqLXrtwtDvg93CRMJLxOrI1RalddYk5owIVcbVbHQ6HfrWgg3xv12URFclV2h1s1Ggugm+xkvZZq4s3hqq56QxMkNgITH/hJ2Kk5awY4iORSPhwRY8VaSWNbNh67Y+cLEa8OjWeNIRgQpp6SUEuwkMMrV8IdkTCoF1Rnje8S5MzgCAIOyqK0Sh86HegXq5NjO5XM0PX2sJh4rBhdqCfTCuUYbiC3jnYhr1slMoiSgpocIhvLIGyVLlIFsE2t9RUL0qypKpJS5v1mxJxtTVUXeuArukdFes6aDDSm0Lfw8AhrLekSZwt4m24DimX0qLnbjG4GWQ4Mn9tMyrxbQdL80fuMg4Yw3v0CW37m+5K49B1d7cRIPP3Vs6BTDBzuCD82yMT/PvJMJwz234skHX+/Vx8HDomOC7/RcAxwrEYkGPRCRMmTJgwYcKECRMmTJgwYcKECRMmTJgwYcKECRMmTJgwYcKECRMmTJgwYcKEib8N/wO0qva/ckjn5QAAAABJRU5ErkJggg==" alt="" /></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">

            <Menubar className="justify-center text-2xl py-6 text-[#083214]">
              {
                menuItems.map((item, index) => (
                  <MenubarMenu key={index}>
                    <MenubarTrigger onClick={() => navigate(item.path)}>
                      {item.label}
                      {item.label === 'cart' ? (
                        <>
                          {/* <FaCartArrowDown className="" />{selectedItems}  */}

                        </>) : ''
                      }

                    </MenubarTrigger>
                  </MenubarMenu>
                ))
              }
            </Menubar>
          </ul>
        </div>
        <div className="navbar-end">

          {
            email ? email : ''
          }
          {/* <button onClick={handleLogOut}></button> */}


          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">


                <img
                  alt="Tailwind CSS Navbar component"
                  src="data:image/jpeg;base64,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" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 mt-3 w-44 p-2 shadow">

              <li><NavLink to="/login">Login</NavLink></li>
              <li><a onClick={handleLogOut}>Logout</a></li>
            </ul>
          </div>
        </div>
      </div>

    </div>

  );
};

export default Navbar;