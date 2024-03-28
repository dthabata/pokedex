import React, { useState } from 'react';
import { Button, Modal } from 'antd';

const PokemonDetails = ({ nome }) => {
    const [open, setOpen] = useState(true);

    return (
        <>
            <Modal
                title="Modal 1000px width"
                centered
                open={open}
                onOk={() => setOpen(false)}
                onCancel={() => setOpen(false)}
                width={1000}
            >
                <p>some contents...</p>
                <p>some contents...</p>
                <p>some contents...</p>
            </Modal>
        </>
    );
};

export default PokemonDetails;
