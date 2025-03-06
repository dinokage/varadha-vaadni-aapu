"use client"

import React from 'react'
import { Button } from './ui/button'

function TopButton() {
  return (
    <Button 
          variant="outline" 
          className="rounded-full fixed bottom-4 right-4"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          TOP
        </Button>
  )
}

export default TopButton
