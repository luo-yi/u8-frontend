export interface NoteInterface {
    id: string;
    title: string;
    body: string;
    status: string;
}

export interface NoteProps extends NoteInterface {
    selected: boolean;
    onChange: (e: any) => void;
    onSelect: (e: any) => void;
}

export interface ActionBarProps {
    selected: string[];
    onAdd: () => void;
    onDeselect: () => void;
    onDelete: () => void;
    onMarkAs: (status: string) => void;
}
