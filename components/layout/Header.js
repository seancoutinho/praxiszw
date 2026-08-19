'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import Icon from '@/components/ui/Icon'
import { contact, primaryNav, whatsappLink } from '@/lib/site'

/**
 * One header component for every page. The old site rendered the navigation
 * three times (desktop, sticky clone, mobile drawer) from three different
 * sources, which had drifted apart. This renders one nav definition twice —
 * desktop and drawer — from `primaryNav`.
 */
export default function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState(null)
  const [openGroup, setOpenGroup] = useState(null)
  const closeTimer = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close everything on navigation.
  useEffect(() => {
    setDrawerOpen(false)
    setOpenMenu(null)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [drawerOpen])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key !== 'Escape') return
      setDrawerOpen(false)
      setOpenMenu(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const isActive = (href) =>
    href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`)

  const hoverOpen = (label) => {
    clearTimeout(closeTimer.current)
    setOpenMenu(label)
  }
  const hoverClose = () => {
    closeTimer.current = setTimeout(() => setOpenMenu(null), 180)
  }

  return (
    <>
      <div className="header-utility">
        <div className="container">
          <ul className="utility-list">
            <li>
              <Icon name="whatsapp" size={14} />
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                {contact.phone}
                <span className="visually-hidden"> — chat on WhatsApp</span>
              </a>
            </li>
            <li>
              <Icon name="mail" size={14} />
              <a href={`mailto:${contact.email}`}>{contact.emailLabel}</a>
            </li>
          </ul>
          <ul className="utility-list">
            <li>
              <Icon name="pin" size={14} />
              <span>{contact.address.line1}, {contact.address.city}</span>
            </li>
          </ul>
        </div>
      </div>

      <header className="site-header" data-scrolled={scrolled}>
        <div className="container">
          <div className="header-bar">
            <Link href="/" className="brand" aria-label={`${'Praxis Chartered Accountants'} — home`}>
              <Image
                src="/assets/images/logo.png"
                alt="Praxis Chartered Accountants"
                width={370}
                height={165}
                priority
              />
            </Link>

            <nav className="nav" aria-label="Primary">
              {primaryNav.map((item) => {
                const hasChildren = Boolean(item.children?.length)
                const open = openMenu === item.label
                return (
                  <div
                    key={item.label}
                    className="nav-item"
                    data-open={open}
                    onMouseEnter={hasChildren ? () => hoverOpen(item.label) : undefined}
                    onMouseLeave={hasChildren ? hoverClose : undefined}
                  >
                    {hasChildren ? (
                      <>
                        <Link
                          href={item.href}
                          className="nav-link"
                          aria-current={isActive(item.href) ? 'page' : undefined}
                          aria-expanded={open}
                          onFocus={() => hoverOpen(item.label)}
                          onClick={() => setOpenMenu(null)}
                        >
                          {item.label}
                          <Icon name="chevronDown" size={14} className="nav-caret" />
                        </Link>
                        <div className="nav-panel" role="group" aria-label={item.label}>
                          {item.children.map((child) => (
                            <Link key={child.href} href={child.href} onBlur={hoverClose}>
                              {child.icon && (
                                <span className="nav-panel-icon">
                                  <Icon name={child.icon} size={18} />
                                </span>
                              )}
                              <span>
                                <span className="nav-panel-title">{child.label}</span>
                                {child.desc && <span className="nav-panel-desc">{child.desc}</span>}
                              </span>
                            </Link>
                          ))}
                          <div className="nav-panel-foot">
                            <Link href={item.href} onBlur={hoverClose}>
                              {item.panelCta ?? `All ${item.label.toLowerCase()}`}
                              <Icon name="arrowRight" size={15} />
                            </Link>
                          </div>
                        </div>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className="nav-link"
                        aria-current={isActive(item.href) ? 'page' : undefined}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                )
              })}
            </nav>

            <div className="header-actions">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--whatsapp"
                aria-label="Chat with Praxis on WhatsApp"
              >
                <Icon name="whatsapp" size={18} />
                <span className="btn-label">WhatsApp</span>
              </a>
              <Link href="/contact" className="btn btn--primary">
                Book a consultation
              </Link>
              <button
                type="button"
                className="menu-toggle"
                onClick={() => setDrawerOpen(true)}
                aria-expanded={drawerOpen}
                aria-controls="site-drawer"
              >
                <span className="menu-toggle-bars" aria-hidden="true">
                  <span /><span /><span />
                </span>
                Menu
              </button>
            </div>
          </div>
        </div>
      </header>

      <div
        className="drawer-backdrop"
        data-open={drawerOpen}
        onClick={() => setDrawerOpen(false)}
        aria-hidden="true"
      />
      <div
        id="site-drawer"
        className="drawer"
        data-open={drawerOpen}
        role="dialog"
        aria-modal={drawerOpen ? 'true' : undefined}
        aria-label="Site menu"
        {...(drawerOpen ? {} : { inert: '' })}
      >
        <div className="drawer-head">
          <Link href="/" className="brand">
            <Image src="/assets/images/logo.png" alt="Praxis Chartered Accountants" width={370} height={165} />
          </Link>
          <button type="button" className="drawer-close" onClick={() => setDrawerOpen(false)} aria-label="Close menu">
            <Icon name="close" size={18} />
          </button>
        </div>

        <div className="drawer-body">
          <Link href="/" className="drawer-link">Home</Link>
          {primaryNav.map((item) =>
            item.children?.length ? (
              <div key={item.label}>
                <button
                  type="button"
                  className="drawer-group-toggle"
                  onClick={() => setOpenGroup(openGroup === item.label ? null : item.label)}
                  aria-expanded={openGroup === item.label}
                >
                  {item.label}
                  <Icon
                    name="chevronDown"
                    size={18}
                    style={{ transform: openGroup === item.label ? 'rotate(180deg)' : 'none', transition: 'transform .2s' }}
                  />
                </button>
                {openGroup === item.label && (
                  <div className="drawer-sub">
                    <Link href={item.href}>All {item.label.toLowerCase()}</Link>
                    {item.children.map((child) => (
                      <Link key={child.href} href={child.href}>{child.label}</Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link key={item.href} href={item.href} className="drawer-link">{item.label}</Link>
            )
          )}
        </div>

        <div className="drawer-foot">
          <Link href="/contact" className="btn btn--primary btn--block">Book a consultation</Link>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--ghost btn--block"
          >
            <Icon name="whatsapp" size={16} /> Chat on WhatsApp
          </a>
        </div>
      </div>
    </>
  )
}
