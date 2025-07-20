import { Burger, Button, Grid, Group, Header as MantineHeader, Menu, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import React from 'react';

const Header: React.FC = () => {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <MantineHeader height={60} p="xs" style={{ backgroundColor: '#87CEEB' }}>
      <Grid align="center" style={{ height: '100%' }}>
        <Grid.Col span={4}>
          <Text size="xl" weight={700}>
            TaskMate
          </Text>
        </Grid.Col>
        <Grid.Col span={8} style={{ textAlign: 'right' }}>
          <Group position="right" noWrap>
            <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
            <Group visibleFrom="sm">
              <Button variant="default">Log in</Button>
              <Button>Sign up</Button>
            </Group>
          </Group>
        </Grid.Col>
      </Grid>
      {opened && (
        <div style={{ position: 'absolute', top: 60, left: 0, right: 0, backgroundColor: '#87CEEB', padding: 'xs' }}>
          <Menu opened={opened} onClose={toggle}>
            <Menu.Item>
              <Button fullWidth variant="default">
                Log in
              </Button>
            </Menu.Item>
            <Menu.Item>
              <Button fullWidth>Sign up</Button>
            </Menu.Item>
          </Menu>
        </div>
      )}
    </MantineHeader>
  );
};

export default Header;
