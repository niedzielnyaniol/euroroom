import { Box, Button, Grid, VStack } from '@chakra-ui/react';
import { ReactNode } from 'react';

type Id = number;

type Tab = {
  id: Id;
  tab: ReactNode;
};

type TabsProps = {
  tabs: Tab[];
  children: ReactNode;
  activeTab?: Id;
  onTabChange: (id: Id) => void;
};

const Tabs = ({ tabs, children, onTabChange, activeTab }: TabsProps) => (
  <Grid templateColumns="3fr 7fr" gap="30px">
    <VStack align="start">
      {tabs.map(({ id, tab }) => {
        const isSelected = activeTab === id;

        return (
          <Button
            key={id}
            onClick={() => onTabChange(id)}
            w="100%"
            boxShadow={isSelected ? 'base' : 'initial'}
            _hover={{
              boxShadow: isSelected ? 'base' : 'md',
              borderLeft: '8px solid',
              borderColor: 'red.600',
              bg: 'white',
            }}
            bg={isSelected ? 'white' : 'transparent'}
            p="20px 30px"
            height="auto"
            display="block"
            textAlign="left"
            borderRadius="lg"
            borderLeft="8px solid"
            borderColor={isSelected ? 'red.600' : 'transparent'}
            transition="0.3s"
          >
            {tab}
          </Button>
        );
      })}
    </VStack>
    <Box>{children}</Box>
  </Grid>
);

export default Tabs;
