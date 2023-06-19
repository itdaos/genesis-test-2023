import { Card, FormControl, Grid, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
import { ChangeEvent } from "react";
import { ReactComponent as IconCard } from '@/assets/icon-card.svg';

interface CreateCardNewProps {
    number: string
    handleNumberChange: (e: ChangeEvent) => void
    cardHolder: string
    handleCardHolderChange: (e: ChangeEvent) => void
}

export default function CreateCardNew(props: CreateCardNewProps) {
    return (
        <Grid item xs={6}>
            <Card elevation={0} sx={{ p: 3 }} >
                <span>Card Status: None</span>
                <FormControl fullWidth sx={{ mb: 3, mt: 2 }}>
                    <InputLabel htmlFor="card-number">Card Number</InputLabel>
                    <OutlinedInput
                        id="card-number"
                        startAdornment={<InputAdornment position="start"><IconCard /></InputAdornment>}
                        label="Card Number"
                        placeholder="0000444411112222"
                        value={props.number}
                        onChange={props.handleNumberChange}
                    />
                </FormControl>
                <FormControl fullWidth>
                    <TextField
                        required
                        id="card-holder"
                        value={props.cardHolder}
                        label="Card Holder"
                        placeholder='JOHN DOE'
                        onChange={props.handleCardHolderChange}
                    >
                    </TextField>
                </FormControl>
            </Card>
        </Grid>
    );
}