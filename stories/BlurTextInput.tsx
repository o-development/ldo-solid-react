import React, { FunctionComponent, useState } from "react";

interface BlurTextInputProps {
  value: string;
  onBlurText: (text: string) => void;
}

const BlurTextInput: FunctionComponent<BlurTextInputProps> = ({
  value,
  onBlurText,
}) => {
  const [text, setText] = useState(value);

  return (
    <input
      type="text"
      value={text}
      onChange={(e) => setText(e.target.value)}
      onBlur={(e) => {
        if (e.target.value !== value) {
          onBlurText(e.target.value);
        }
      }}
    />
  );
};

export default BlurTextInput;
