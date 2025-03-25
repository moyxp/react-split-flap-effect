import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { FlapStack } from './FlapStack'
import { Presets } from './Presets'

const Modes = {
  Numeric: 'num',
  Alphanumeric: 'alpha',
  Words: 'words'
}

const splitChars = v => String(v).split('').map(c => c.toUpperCase())

const padValue = (v, length, padChar, padStart) => {
  const trimmed = v.slice(0, length)
  return padStart
    ? String(trimmed).padStart(length, padChar)
    : String(trimmed).padEnd(length, padChar)
}

export const FlapDisplay = ({
  id,
  className,
  css,
  value,
  chars = Presets.NUM,
  words,
  length,
  padChar = ' ',
  timing = 30,
  hinge = true,
  padMode = 'auto',
  render,
  ...restProps
}) => {
  const [stack, setStack] = useState([])
  const [mode, setMode] = useState(Modes.Numeric)
  const [digits, setDigits] = useState([])
  const [children, setChildren] = useState([])

  useEffect(() => {
    if (words && words.length) {
      setStack(words)
      setMode(Modes.Words)
    } else {
      setStack(splitChars(chars))
      setMode(chars.match(/[a-z]/i) ? Modes.Alphanumeric : Modes.Numeric)
    }
  }, [chars, words])

  useEffect(() => {
    if (words && words.length) {
      setDigits([value])
    } else {
      const padStart = padMode === 'auto'
        ? !!value.match(/^[0-9.,+-]*$/)
        : padMode === 'start'
      setDigits(splitChars(padValue(value, length, padChar, padStart)))
    }
  }, [value, chars, words, length, padChar, padMode])

  useEffect(() => {
    setChildren(digits.map((digit, i) => (
      <FlapStack
        key={i}
        stack={stack}
        value={digit}
        mode={mode}
        {...restProps}
      />
    )))
  }, [digits, ...Object.values(restProps)])

  return render
    ? render({ id, className, css, ...restProps, children })
    : (
      <div
        id={id}
        className={className}
        css={css}
        aria-hidden='true'
        aria-label={value}
      >
        {children}
      </div>
    )
}

FlapDisplay.propTypes = {
  id: PropTypes.string,
  css: PropTypes.object,
  className: PropTypes.string,
  value: PropTypes.string.isRequired,
  chars: PropTypes.string,
  words: PropTypes.arrayOf(PropTypes.string),
  length: PropTypes.number,
  padChar: PropTypes.string,
  padMode: PropTypes.string,
  timing: PropTypes.number,
  hinge: PropTypes.bool,
  render: PropTypes.func
}
