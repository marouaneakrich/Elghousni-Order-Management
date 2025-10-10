import { Menu, MenuItem } from 'react-pro-sidebar';

function Sidebar() {
<Sidebar>
  <Menu
    menuItemStyles={{
      button: {
        [`&.active`]: {
          backgroundColor: '#13395e',
          color: '#b6c8d9', 
        },
      },
    }}
  >
    <MenuItem component={<link to="/dashboard" />}> Dashboard</MenuItem>
  </Menu>
</Sidebar>;
}

export default Sidebar