import React from 'react'
export interface IHelloWorld {
  text: string
}
export const Helloworld = ({ text }: IHelloWorld) => {
  return <div className="text">This is test text: {text}</div>
}
