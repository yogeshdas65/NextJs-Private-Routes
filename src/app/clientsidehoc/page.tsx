"use client"

import withAuth from '@/components/withAuth';
import React from 'react'

const ClientSideHoc = () => {
  return (
    <div>This Page is Protected route on client side HOC</div>
  )
}

export default withAuth(ClientSideHoc);