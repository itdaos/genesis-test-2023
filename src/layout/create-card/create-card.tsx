import Box from '@mui/material/Box';
import styles from "@/layout/create-card/create-card.module.scss";
import { Button, Divider, IconButton, InputAdornment, InputLabel, MenuItem, OutlinedInput, Radio, RadioGroup, Select, SelectChangeEvent, Stack, TextField } from '@mui/material';
import { ReactComponent as IconFile } from '@/assets/icon-file.svg';
import { ReactComponent as IconCross } from '@/assets/icon-cross.svg';
import { ReactComponent as IconCard } from '@/assets/icon-card.svg';
import CreateCardForm from './create-card-form';

interface CreateCardProps {
    closeModal: (event: React.KeyboardEvent | React.MouseEvent) => void
}

export default function CreateCard(props: CreateCardProps) {

    return <Box
        className={styles.box}
        sx={{
            bgcolor: "background.paper"
        }}
        role="presentation"
    >
        <Box px={4} >
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
            >
                <h3 className={styles.heading}>Create new Card <IconCard /> </h3>
                <Button className={styles.noShadow} variant='contained' startIcon={<IconFile />} color={'success'}>
                    New
                </Button>
                <IconButton aria-label="delete" onClick={props.closeModal}>
                    <IconCross />
                </IconButton>
            </Stack>
            <CreateCardForm />
        </Box>
        <Divider />

        <Stack
            direction="row"
            justifyContent="flex-end"
            p={4}
        >
            <Button variant='contained' size='large' sx={{ width: 230, height: 50 }} disabled>Save</Button>
        </Stack>
    </Box>;
}