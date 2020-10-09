import React, { useState, useEffect, ReactElement } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import SingleGroup from './SingleGroup';
import testAvatarka from '../../img/test-group-avatar.svg';
import PageSearchInput from '../../common/Inputs/PageSearch';
import { loadGroups, joinGroup, loadAllUsers } from '../../redux-toolkit/groupsSlice';
import { Group, GroupRequestProps } from '../../types/group';

interface GroupsProps {
  loadGroups: (page: number, size: number) => void;
  loadAllUsers: (props: GroupRequestProps) => void;
  groups: Group[];
  // loading: boolean;
  // error: Error;
}

const Groups: React.FC<GroupsProps> = ({
  loadGroups: _loadGroups,
  // loading,
  // error,
  groups,
  loadAllUsers: _loadAllUsers,
}): ReactElement => {
  const currentUserId = 4;
  useEffect(() => {
    _loadGroups(1, 15);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    groups.forEach((element: Group) => _loadAllUsers({ userId: currentUserId,
      groupId: element.id }));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [groups]);
  const [groupName, setGroupName] = useState<string>('');
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    setGroupName(value.toLowerCase());
  };

  const filterGroups = (data: Group[]): Group[] => data.filter((el) => el.name.toLowerCase()
    .includes(groupName));

  const renderGroups = (data: Group[]): JSX.Element[] => data.map((el: Group) => {
    const {
      addressImageGroup = testAvatarka, name, groupCategory, subscribers, id,
    } = el;
    return (
      <SingleGroup
        key={el.id}
        avatar={addressImageGroup}
        name={name}
        category={groupCategory}
        followers={subscribers}
        id={id}
      />
    );
  });
  return (
    <GroupsContainer>
      <PageSearchInput placeholder="Начните поиск группы..." action={handleInput} />
      <GroupsTitle>Группы</GroupsTitle>
      {groupName.length > 0 ? renderGroups(filterGroups(groups)) : renderGroups(groups)}
    </GroupsContainer>
  );
};

const mapStateToProps = (state:
  { groups:
    { groups: Group[];
      memberOf: number[];
      loading: boolean;
      error: Error; }; }) => ({
  groups: state.groups.groups,
  memberOf: state.groups.memberOf,
  loading: state.groups.loading,
  error: state.groups.error,
});

const mapDispatchToProps = {
  loadGroups,
  joinGroup,
  loadAllUsers,
};

export const GroupsContainer = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap');
  font-family: 'Montserrat', sans-serif;
  background: #ffffff;
  border-radius: 15px;
  padding: 114px 114px 114px 91px;
  margin-top: 275px;
  position: relative;
  min-height: 1200px;
`;

const GroupsTitle = styled.h2`
  margin: 0;
  font-size: 32px;
  font-weight: 600;
  line-height: 39px;
  background-color: #ffb11b;
  border-radius: 15px;
  position: absolute;
  padding: 58px 61px;
  top: -90px;
`;
export default connect(mapStateToProps, mapDispatchToProps)(Groups);
