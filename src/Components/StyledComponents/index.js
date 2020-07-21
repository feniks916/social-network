import styled from 'styled-components';

const bgColorBlack = '#111111';

export const HeaderContainer = styled.div`
  background: ${bgColorBlack};
  height: 109px;
  color: white;
  display: flex;
  justify-content: space-between;
`;

export const Logo = styled.img.attrs((props) => ({ src: props.img }))`
  height: 32px;
  width: 67px;
  margin-top: 57px;
  margin-left: 146px;
  &:hover {
    cursor: pointer;
  }
`;

export const IconHeader = styled.img.attrs((props) => ({ src: props.img }))`
  height: 30px;
  width: 30px;
  margin-left: 55px;
  &:hover {
    cursor: pointer;
  }
`;
export const IconSearch = styled.img.attrs((props) => ({ src: props.img }))`
  height: 30px;
  width: 30px;
  &:hover {
    cursor: pointer;
  }
`;

export const RightBlockHeader = styled.div`
  margin-right: 110px;
  margin-top: 58px;
  display: flex;
`;

export const ButtonSearch = styled.button`
  background: none;
  border: none;
  margin-bottom: 20px;
  outline: none !important;
`;

export const InputHeader = styled.input`
  width: 295px;
  margin-left: 10px;
  background: none;
  border: none;
  border-bottom: 1px solid #ffb11b;
  color: white;
  outline: none !important;
  font-size: 24px;
`;

export const MainContainer = styled.div`
  display: flex;
`;

export const LeftBlockContainer = styled.div`
  background: ${bgColorBlack};
  width: 27%;
  height: 100vh;
  color: white;
  display: flex;
`;

export const RightBlockContainer = styled.div`
  background: ${bgColorBlack};
  position: relative;
  width: 73%;
  height: 100vh;
  color: white;
  display: flex;
  border: solid 1px wheat;
`;

export const UserInfoHeaderContainer = styled.div`
  // background: ${bgColorBlack};
  margin-left: 75px;
  position: relative;
  width: 593px;
  height: 344px;
  display: flex;
  justify-content: space-between;
  border: solid 1px wheat;
`;

export const UserInfoAvatar = styled.div`
  //position: absolute;
  width: 340px;
  height: 340px;
  border: solid 1px wheat;
  border-radius: 170px;
`;

export const UserInfoName = styled.div`
  width: 253px;
  height: 340px;
  border: solid 1px wheat;
`;

export const Avatar = styled.img.attrs((props) => ({ src: props.img }))`
  width: 340px;
  height: 340px;
  border-radius: 170px;
  &:hover {
    cursor: pointer;
  }
`;

export const AddPhotoIcon = styled.img.attrs((props) => ({ src: props.img }))`
  position: absolute;
  left: 230px;
  bottom: -28px;
  width: 110px;
  height: 110px;
  border-radius: 55px;
  &:hover {
    cursor: pointer;
  }
`;
