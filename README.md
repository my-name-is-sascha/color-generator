# Color Generator App

This project is a simple Color Generator application built with React. It allows users to input a color and generate various shades or tints of that color. Users can also copy each color’s hex value to the clipboard.

## Table of Contents

1. [Overview](#overview)
2. [Installation](#installation)
3. [Components](#components)
   - [Form](#form)
   - [ColorList](#colorlist)
   - [SingleColor](#singlecolor)
4. [Usage](#usage)
5. [Features](#features)

## Overview

The Color Generator App allows users to:

1. Enter a color (using a color picker or hex code input).
2. View a list of generated shades or tints for that color.
3. Copy any color’s hex value to the clipboard by clicking on it.

## Installation

1. Clone the repository.
2. Install dependencies with:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

## Components

### Form

**File**: `Form.jsx`

The `Form` component is responsible for capturing user input for the color. It consists of:

- **State Management**: Uses `useState` to store the `color` value.
- **Color Input**: Provides two ways to enter a color: a color picker (`type="color"`) and a text input for hex values.
- **Submit Button**: The button color changes dynamically to the color input value. Upon submission, the `color` value is passed to the parent component via the `addColor` function.

**Code Example**:

```javascript
const handleSubmit = (event) => {
  event.preventDefault();
  addColor(color);
};
```

### ColorList

**File**: `ColorList.jsx`

The `ColorList` component renders the list of color shades or tints generated based on the user's input. It:

- Accepts a `colors` array as a prop, where each color is an object with properties like `hex` and `weight`.
- Maps over the `colors` array, creating a `SingleColor` component for each color, passing `color` and `index` as props.

**Code Example**:

```javascript
return (
  <section className="colors">
    {colors.map((color, index) => (
      <SingleColor key={nanoid()} color={color} index={index} />
    ))}
  </section>
);
```

### SingleColor

**File**: `SingleColor.jsx`

The `SingleColor` component displays individual color boxes. Each color box includes:

- **Background Color**: Sets the background color based on the hex value provided.
- **Clipboard Functionality**: When clicked, it copies the hex color value to the clipboard using `navigator.clipboard.writeText()`.
- **Toast Notifications**: Uses `react-toastify` to display success or error messages when copying.

**Code Example**:

```javascript
const saveToClipboard = async () => {
  if (navigator.clipboard) {
    try {
      await navigator.clipboard.writeText(`#${hex}`);
      toast.success(`color value #${hex} copied to clipboard`);
    } catch (error) {
      toast.error(error.message);
    }
  } else {
    toast.error('ups. could not copy to clipboard');
  }
};
```

## Usage

1. Enter a color value in hex format or use the color picker.
2. Click "Submit" to generate color shades.
3. Click on any color box to copy its hex value to the clipboard.

## Features

- **Dynamic Background**: Button and input background colors change based on the user-selected color.
- **Color Generation**: Generates a variety of shades and tints from a single input color.
- **Clipboard Copy**: Each color can be copied by clicking on the color box, with toast notifications confirming the action.
