import { Box, Select } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { ChangeEvent } from 'react';
import useMedia from '../../utils/useMedia';

type SelectLanguageProps = {
  variant?: 'flag' | 'shortcut';
};

const LANGUAGES = [
  {
    value: 'pl',
    shortcut: 'PL',
    flag: '🇵🇱',
  },
  {
    value: 'en',
    shortcut: 'EN',
    flag: '🇬🇧',
  },
];

const SelectLanguage = ({ variant = 'shortcut' }: SelectLanguageProps) => {
  const router = useRouter();
  const { isDesktop } = useMedia();

  const handleLangChange = (e: ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    router.push(router.asPath, undefined, { locale: e.target.value });
  };

  return (
    <Box w="auto" cursor="pointer" display="inline-block">
      <Select
        value={router.locale}
        variant={isDesktop ? 'unstyled' : undefined}
        borderColor="gray.300"
        fontSize={{ base: '16px', xl: 'initial' }}
        onChange={handleLangChange}
        {...(variant === 'flag' && {
          fontSize: '18px',
          variant: 'outline',
          color: 'red.700',
          borderColor: 'red.700',
          p: '5px',
          size: 'sm',
        })}
      >
        {LANGUAGES.map(({ value, ...lang }) => (
          <option key={value} value={value}>
            {lang[variant]}
          </option>
        ))}
      </Select>
    </Box>
  );
};

export default SelectLanguage;
