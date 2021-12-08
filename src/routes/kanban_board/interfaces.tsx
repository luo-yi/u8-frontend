import React from 'react';
import { OnChangeEvent, FormEvent } from '../../common/interfaces';

export interface KanbanItem {
    id?: number;
    type: string;
    name: string;
    description: string;
    priority: string;
}

export interface KanbanFormProps {
    form: KanbanItem;
    errors: any;
    isValid: boolean;
    onChange: (e: OnChangeEvent) => void;
    onSubmit: (e: FormEvent) => void;
}

export interface KanbanCardProps {
    kanbanItem: KanbanItem;
    buttons: React.ReactElement;
}