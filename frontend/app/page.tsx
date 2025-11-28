"use client"
// homepage component
import { Button } from "@chakra-ui/react"

export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
      }}
    >
      <Button>I just consumed some ⚡️Chakra!</Button>
    </div>
  )
}

