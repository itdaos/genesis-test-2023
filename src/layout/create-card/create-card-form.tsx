import { Bank, BusinessDivision, CardAccount, Currency, LegalEntity } from "@/types";
import { Box, Button, Card, Divider, FormControl, FormControlLabel, Grid, InputAdornment, InputLabel, MenuItem, OutlinedInput, Radio, RadioGroup, Select, SelectChangeEvent, Stack, TextField } from "@mui/material";
import { ChangeEvent, ReactNode, useState } from "react";
import { ReactComponent as IconInfo } from '@/assets/icon-info.svg';
import { ReactComponent as IconPlus } from '@/assets/icon-plus.svg';
import CreateCardNew from "../../components/create-card-new";

interface CardEntity {
    number: string
    cardHolder: string
}

interface CreateCardFormState {
    division?: BusinessDivision
    legalEntity?: LegalEntity
    accountType: CardAccount
    account?: string
    currency?: Currency
    bank?: Bank
    cards: CardEntity[]
}

export default function CreateCardForm() {
    const [formData, setFormData] = useState<CreateCardFormState>({
        accountType: "iban",
        cards: []
    })

    const handleSelectChange = (e: SelectChangeEvent, _: ReactNode) => { console.log(`onChange Event triggered on ${e.target}`) };
    const handleTextFieldChange = (e: ChangeEvent) => { console.log(`onChange Event triggered on ${e.target}`) }

    return (<Card elevation={0} sx={{ py: 4, mb: 4, bgcolor: "background.default", border: "none" }}>
        <form action="#" method="POST">
            <Box px={4}>
                <span>Please choose the Legal entity & Business Division:</span>
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={4}
                    mb={4}
                    mt={2}
                >
                    <FormControl fullWidth>
                        <InputLabel id="business-division-label">Business Division</InputLabel>
                        <Select
                            labelId="business-division-label"
                            id="business-division"
                            value={formData.division}
                            label="Business Division"
                            onChange={handleSelectChange}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl fullWidth>
                        <InputLabel id="legal-entity-label">Legal Entity</InputLabel>
                        <Select
                            labelId="legal-entity-label"
                            id="legal-entity"
                            value={formData.legalEntity}
                            label="Legal Entity"
                            onChange={handleSelectChange}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>

                </Stack>
            </Box>
            <Divider sx={{ my: 4 }} />
            <Box px={4}>
                <span>Card account</span>
                <FormControl fullWidth>
                    <RadioGroup
                        row
                        aria-labelledby="card-account-type-label"
                        name="card-account-type"
                        value={formData.accountType}
                    >
                        <FormControlLabel value="iban" control={<Radio />} label="IBAN" />
                        <FormControlLabel
                            value="card"
                            disabled
                            control={<Radio />}
                            label="Account number"
                        />
                    </RadioGroup>
                </FormControl>

                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={4}
                    mb={4}
                    mt={2}
                >
                    <FormControl fullWidth>
                        <InputLabel htmlFor="iban">IBAN</InputLabel>
                        <OutlinedInput
                            required
                            id="iban"
                            startAdornment={<InputAdornment position="start"><IconInfo /></InputAdornment>}
                            value={formData.account}
                            label="IBAN"
                            placeholder='UA903052992990004149123456789'
                            onChange={handleTextFieldChange}
                        ></OutlinedInput>
                    </FormControl>
                    <FormControl sx={{
                        minWidth: 200
                    }}>
                        <InputLabel id="currency-label">Currency</InputLabel>
                        <Select
                            labelId="currency-label"
                            id="currency"
                            value={formData.currency}
                            label="Currency"
                            onChange={handleSelectChange}
                        >
                            <MenuItem value={10}>UAH</MenuItem>
                            <MenuItem value={20}>USD</MenuItem>
                            <MenuItem value={30}>EUR</MenuItem>
                        </Select>
                    </FormControl>
                </Stack>
            </Box>
            <Box px={4}>
                <FormControl fullWidth>
                    <InputLabel id="bank-label">Choose Bank</InputLabel>
                    <Select
                        required
                        labelId="bank-label"
                        id="bank"
                        value={formData.bank}
                        label="Choose Bank"
                        onChange={handleSelectChange}
                    >
                        <MenuItem value={10}>Privat24</MenuItem>
                        <MenuItem value={20}>Monobank</MenuItem>
                        <MenuItem value={30}>Raifaizen</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <Divider sx={{ my: 4 }} />
            <Box px={4}>
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={4}
                    mb={2}
                >
                    <span>Cards</span>
                    <Button startIcon={<IconPlus />} >Add new</Button>
                </Stack>
                <Grid container spacing={4}>
                    {
                        [0, 1].map((_: number) => {
                            return <CreateCardNew key={_} {...{
                                number: formData.cards[_]?.number,
                                cardHolder: formData.cards[_]?.cardHolder,
                                handleNumberChange: (e: ChangeEvent) => { return; },
                                handleCardHolderChange: (e: ChangeEvent) => { return; }
                            }} />
                        })
                    }
                </Grid>
            </Box>

        </form>

    </Card>);
}