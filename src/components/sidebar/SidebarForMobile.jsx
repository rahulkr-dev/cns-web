import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button
  } from '@chakra-ui/react'
import Sidebar from './Sidebar'

const SidebarForMobile = ({isOpen,onClose}) => {
  return (
    <>
    
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        size={"xs"}
        
        
      >
        <DrawerOverlay />
        <DrawerContent bg="#FF5100" color="white">
          <DrawerCloseButton />
          <DrawerHeader>Dashboard</DrawerHeader>

          <DrawerBody >
            <Sidebar />
            {/* <Input placeholder='Type here...' /> */}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default SidebarForMobile