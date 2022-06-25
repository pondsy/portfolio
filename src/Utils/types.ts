export interface AccordionData {
    [key: string]: AccordionItemData[];
}

export interface AccordionItemData {
    name: string;
    title: string;
    description?: string[];
    from: string;
    to: string;
}