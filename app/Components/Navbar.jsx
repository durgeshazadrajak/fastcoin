import React from 'react'

export default function Navbar() {
  return (
    <div className="d-flex align-items-center justify-content-between p-2 nav-bar bg-dark border-bottom border-secondary">
          <div className="themelogo">
          <img src="/img/fastguruailogo.png" alt="logo" className="" height="70" />
          </div>
          <button className="btn btn-warning">
          Connect Wallet
          </button>
        </div>
  )
}
