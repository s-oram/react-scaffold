/*
MIT License

Copyright (c) 2023 ui.dev

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

import { useReducer, useRef } from 'react'

export const useMap = <K, V>(initialState?: [K, V][]) => {
  const mapRef = useRef(new Map<K, V>(initialState))
  const [, forceUpdate] = useReducer(x => (x + 1) * 0.5, 0)

  mapRef.current.set = (...args) => {
    Map.prototype.set.apply(mapRef.current, args)
    forceUpdate()
    return mapRef.current
  }

  mapRef.current.clear = (...args) => {
    Map.prototype.clear.apply(mapRef.current, args)
    forceUpdate()
  }

  mapRef.current.delete = (...args) => {
    const res = Map.prototype.delete.apply(mapRef.current, args)
    forceUpdate()
    return res
  }

  return mapRef.current
}
