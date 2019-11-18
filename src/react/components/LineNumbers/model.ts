export type LineNumbersValuePropType = {
  setLineNumbersWidth: (width: number) => void;
  lineNumbersWidth: any;
};

export type LineNumbersProps = {
  width: LineNumbersValuePropType;
  numberOfLines: number;
};
