function updateField(
    newValue: string | number, 
    setInputValue: React.Dispatch<React.SetStateAction<string | number>>,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    updateClientInEditModeList: (...params: any[]) => void,
    clientId: number,
    field: string
){
    setInputValue(newValue);
    updateClientInEditModeList(clientId, { [field]: newValue });
}

export { updateField };