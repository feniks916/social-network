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
`;

export const UserInfoHeaderContainer = styled.div`
  // background: ${bgColorBlack};
  margin-left: 75px;
  position: relative;
  width: 800px;
  height: 344px;
  display: flex;
  justify-content: flex-start;
  z-index: 10;
`;

export const UserInfoAvatar = styled.div`
  //position: absolute;
  width: 340px;
  height: 340px;
  border-radius: 170px;
`;

export const UserInfoNameBlock = styled.div`
  height: 340px;
  display: flex;
  flex-direction: column;
`;

export const Avatar = styled.img.attrs((props) => ({ src: props.img }))`
  width: 340px;
  height: 340px;
  border-radius: 170px;
  box-shadow: 9px 9px 25px rgba(0, 0, 0, 0.25);
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

export const UserName = styled.div`
  margin-top: 136px;
  margin-left: 32px;
  font-family: Montserrat, serif;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 37px;
  color: #ffffff;
`;

export const UserProfession = styled.div`
  margin-top: 13px;
  margin-left: 32px;
  font-family: Montserrat, serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: #c1c1c1;
`;

export const UserOnlineStatus = styled.div`
  margin-top: 91px;
  margin-left: 32px;
  font-family: Montserrat, serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: #c1c1c1;
`;

export const WallContainer = styled.div`
  position: absolute;
  top: 251px;
  width: 1291px;
  height: 1000px;
  background: #ffffff;
  border-radius: 15px 15px 0px 0px;
`;
