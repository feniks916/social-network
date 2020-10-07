import React, { ReactElement, useEffect } from 'react';
import { withRouter, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { IStore } from '../../redux-toolkit/store';
import GroupHeader from './GroupHeader';
import NewsList from './NewsList';
import Comments from './Comments';
import InputComment from './InputComment';
import { mockData } from './mockData';
import photogroup from '../../img/icons/photogroup.svg';
import { loadGroupInfo, loadGroupPosts } from '../../redux-toolkit/singleGroupSlice';
import { IGroupPosts } from '../../types/group';

interface Idata {
  data: {
    date: Date;
    description: string;
    link: string;
    owner: string;
    news: Inews[];
  };
  comments: Icomment[];
}
interface Inews {
  id: number;
  title: string;
  img: string;
  text: string;
  tags: string[];
  author: string;
  time: string;
  favoritesCount: number;
  likesCount: number;
  commentsCount: number;
  repostsCount: number;
}
interface Icomment {
  avatar: string;
  author: string;
  date: Date;
  text: string;
}
interface RouteParams {
  slug: string
}
// interface GroupProps {
//   loadGroupInfo: (id: string) => void;
//   loadGroupPosts: (id: string) => void;
//   groupInfo: any;
//   posts: IGroupPosts[];
//   loading: boolean;
//   error: any;
// }

const Group = ({ loadGroupInfo: _loadGroupInfo,
  loadGroupPosts: _loadGroupPosts,
  loading,
  groupInfo,
  posts } : any) : ReactElement => {
  const params = useParams<RouteParams>();
  const { slug } = params;
  let { addressImageGroup } = groupInfo;
  const {
    // description,
    groupCategory,
    // id,
    // lastRedactionDate,
    // linkSite,
    name,
    // ownerFio,
    // persistDate,
    // subscribers
  } = groupInfo;

  if (addressImageGroup === `This is a address of the group #${Number(slug) - 1}`) {
    addressImageGroup = photogroup;
  }
  const postsUpg = posts.map((element: IGroupPosts) => ({ ...element,
    addressImageGroup,
    groupName: name }));
  useEffect(() => {
    _loadGroupInfo(slug);
    _loadGroupPosts(slug);
  }, []);
  const { comments }: Idata = mockData;
  return (
    <Wrapper>
      {(loading || groupInfo.length === 0) ? <h1>LOADING</h1> : (
        <Container>
          <Label>
            <GroupIco>
              <Img src={addressImageGroup} alt="Фото группы" />
            </GroupIco>
            <DataContainer>
              <NameGroup>{name}</NameGroup>
              <Category>
                Категория:
                {' '}
                {groupCategory}
              </Category>
            </DataContainer>
          </Label>
          <GroupHeader data={groupInfo} />
          <NewsList news={postsUpg} />
          <Comments data={comments} />
          <InputComment />
        </Container>
      )}

    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-family: Montserrat;
  background: #111222;
  padding: 100px 0;
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap');
  font-family: 'Montserrat', sans-serif;
  background: #111111;
  border-radius: 15px;
  padding: 114px 0 114px 0;
  margin-top: 30px;
  position: relative;
  min-height: 1200px;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-left: 95px;
  padding-right: 95px;
  padding-top: 80px;
  background: #ffffff;
  text-align: center;

  margin-top: 50px;
  border-radius: 15px 15px 15px 15px;
`;

const Label = styled.div`
  position: absolute;
  top: -90px;

  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 39px;
  display: flex;
`;

const GroupIco = styled.div`
  width: 155px;
  height: 155px;
  border: 50%;
  margin-right: 20px;
`;

const Img = styled.img`
  display: block;
  object-fit: cover;
  width: 155px;
  height: 155px;
`;

const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 15px;
`;

const NameGroup = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #ffffff;
  text-align: left;
  margin-bottom: 6px;
`;

const Category = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #b2b2b2;
  text-align: left;
`;

const mapStateToProps = (state: IStore) => ({
  groupInfo: state.singleGroup.groupInfo,
  posts: state.singleGroup.posts,
  loading: state.singleGroup.loading,
  error: state.singleGroup.error,
});

const mapDispatchToProps = {
  loadGroupInfo,
  loadGroupPosts,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Group));
