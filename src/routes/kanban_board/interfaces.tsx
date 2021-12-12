import React from 'react';

export interface KanbanItem {
    id?: number;
    type: string;
    title: string;
    description: string;
    priority: string;
}

export interface KanbanFormModalProps {
    form: KanbanItem;
    errors: any;
    isValid: boolean;
    onChange: (e: any) => void;
    onSubmit: (e: React.FormEvent) => void;
    onClose: () => void;
    open: boolean;
}

export interface ActionItem {
    label: string;
    onClick: () => void;
}

export interface KanbanColumnProps {
    title: string;
    items: KanbanItem[];
    createActions: (kanbanItem: KanbanItem) => ActionItem[];
}

export interface KanbanCardProps {
    item: KanbanItem;
    buttons: React.ReactElement;
    actions: ActionItem[];
}

export interface KanbanCardActionsProps {
    actions: ActionItem[];
}

export interface ActionBarProps {
    onAdd: () => void;
}
