import { Button, useClipboard } from '@chakra-ui/react';
import CopyIcon from '../../assets/icons/copy.svg';
import SuccessIcon from '../../assets/icons/success.svg';

type CopyLabelProps = {
  children: string;
  trim?: boolean;
};

const WIDTH = 16;

const SIZE = {
  width: WIDTH,
  height: WIDTH,
};

const CopyLabel = ({ children, trim }: CopyLabelProps) => {
  const { hasCopied, onCopy } = useClipboard(trim ? children.replaceAll(' ', '') : children);

  return (
    <div>
      <Button h="auto" onClick={onCopy} variant="unstyled" display="flex" gap="4px">
        {children}
        {hasCopied ? <SuccessIcon style={{ fill: 'green' }} {...SIZE} /> : <CopyIcon {...SIZE} />}
      </Button>
    </div>
  );
};

export default CopyLabel;
