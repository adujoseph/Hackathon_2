export const fieldTypes = [
    {id: 1, name: 'Text', removable: true},
    {id: 2, name: 'Number', removable: true},
    {id: 3, name: 'Checkbox', removable: true},
    {id: 4, name: 'Date', removable: true}
]

export const forms = [
    {id: 1, name: 'Text', removable: false},
    {id: 2, name: 'Text', removable: true},
]

export interface field {
    id: number;
    name: string;
    removable: boolean
}