import React from 'react';

export type OnChangeEvent = (
    React.ChangeEvent<HTMLInputElement> |
    React.ChangeEvent<HTMLTextAreaElement> |
    React.ChangeEvent<HTMLSelectElement>
);

export type FormEvent = React.FormEvent;
