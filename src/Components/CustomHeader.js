import React, { Component } from 'react'
import { Header, Icon, Menu } from 'semantic-ui-react'
import { Link, withRouter }  from 'react-router-dom'
import './CustomHeader.css'


const menuLinks = [
  {
    name: 'home',
    link: '/'
  },
  {
  	name: 'baseball',
  	link: '/baseball'
  },
  {
    name: 'about',
    link: '/about'
  },
  
]

const menuIcons = [
  {
    icon: 'youtube',
    href: 'https://youtube.com'
  },
  {
    icon: 'linkedin',
    href: 'https://www.linkedin.com'
  },
  
]

class PageHeader extends Component {
  render() {
    const { pathname } = this.props.location
    return (
      <div className='PageHeader'>
        <Header as='h1'>Connor Root</Header>
        <Menu secondary>
          {
            menuLinks.map(it => (
              <Menu.Item 
                name={it.name}
                key={it.name}
                active={it.link === pathname}
                as={Link} 
                to={it.link}
              />
            ))
          }
          <Menu.Menu position='right'>
            {
              menuIcons.map(it => (
                <Menu.Item
                  key={it.icon}
                  icon={<Icon name={it.icon} size='big'/>}
                  href={it.href}
                  target='_blank'
                />
              ))
            }
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}

export default withRouter(PageHeader)