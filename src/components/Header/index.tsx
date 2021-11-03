import { useState } from "react";
import Modal from "react-modal";
import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./styles";

export function Header() {
    const [isNewTransactionModelOpen, setIsNewTransactionModalOpen] = useState(false);

    function handleOpenNewTransactionModal() {
        setIsNewTransactionModalOpen(true);
    }

    function handleCloseNewTransactionModal() {
        setIsNewTransactionModalOpen(false);
    }

    return (
        <Container>
            <Content>
            <img src={logoImg} alt="dt money" />
            <button type="button" onClick={handleOpenNewTransactionModal}>
                Nova transação
            </button>

            <Modal isOpen={isNewTransactionModelOpen}
                   onRequestClose={handleCloseNewTransactionModal}>
                <h2>Cadastrar transação</h2>
            </Modal>
            </Content>
        </Container>
    )
}