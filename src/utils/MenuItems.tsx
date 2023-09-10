import { Box } from '@chakra-ui/react';
import { usePathname } from 'next/dist/client/components/navigation';
import Link from 'next/link';
import { text } from 'stream/consumers';

export const MenuItems = ({
  name,
  url,
  close,
  icon,
}: {
  name: string;
  url: string;
  close?: any;
  icon?: any;
}) => {
  const pathname = usePathname();

  return (
    <Link href={url} passHref>
      <Box
        _hover={{ textColor: ['#03045E'] }}
        _activeLink={{ bgColor: 'blue' }}
        //   pathname == url ? 'text-[#d8a642]' : 'text-slate-950'
        // }
      >
        <Box>{icon}</Box>
        {name}
      </Box>
      {close}
    </Link>
  );
};

export default MenuItems;
