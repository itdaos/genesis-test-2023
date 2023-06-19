import * as React from 'react';

import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';

interface HalfPageDrawerProps {
    anchor?: "left" | "right" | "top" | "bottom"
    children: React.ReactElement
}

export default function HalfPageDrawer(props: HalfPageDrawerProps) {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleDrawer =
        (open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }

                setIsOpen(open);
            };

    return (
        <div>
            <Button onClick={toggleDrawer(true)}>Open Drawer</Button>
            <Drawer
                anchor={props.anchor || "right"}
                open={isOpen}
                onClose={toggleDrawer(false)}
            >
                {React.cloneElement(props.children, { closeModal: toggleDrawer(false) })}
            </Drawer>
        </div>
    );
}