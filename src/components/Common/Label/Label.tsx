import * as SC from './Label.style';

interface LabelProps {
  htmlFor: string;
  children: React.ReactNode;
}

const Label = ({ htmlFor, children }: LabelProps) => {
  return <SC.Label htmlFor={htmlFor}>{children}</SC.Label>;
};

export default Label;
