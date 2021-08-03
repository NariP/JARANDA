import React from 'react';
import styled from '@emotion/styled';
import { CustomInput, CustomButton } from 'elements';

const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  inset: inherit;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
`;

const ModalBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 600px;
  height: 300px;
  background-color: #fff;
  border-radius: 10px;
  padding: 16px 32px;

  gap: 0 10px;
  margin-bottom: 15px;

  div {
    display: flex;
    gap: 0 20px;
  }
`;

const CloseBtn = styled.div`
  margin-left: auto;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
`;

const CreditCardModal = ({ open, close, creditValue, onChangeNum }) => {
  const { cardNum, expNum, cvcNum } = creditValue;
  console.log('creditValue', cardNum, expNum, cvcNum);
  return (
    <>
      {open ? (
        <ModalContainer>
          <ModalBox>
            <CloseBtn onClick={close}>X</CloseBtn>
            <CustomInput
              type="text"
              placeholder="신용카드 번호"
              onChange={onChangeNum}
              value={cardNum}
            />
            <div>
              <CustomInput
                type="number"
                placeholder="신용카드 만료일 (MM/YY)"
                onChange={onChangeNum}
                value={expNum}
              />
              <CustomInput
                type="number"
                minLength={3}
                maxLength={3}
                placeholder="신용카드 CVC"
                onChange={onChangeNum}
                value={cvcNum}
              />
            </div>
            <CustomButton onChange={onChangeNum}>카드 등록</CustomButton>
          </ModalBox>
        </ModalContainer>
      ) : null}
    </>
  );
};

export default CreditCardModal;