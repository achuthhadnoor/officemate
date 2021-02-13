import styled from 'styled-components'

export const MembersWrapper = styled.div`
    display:flex;
    flex-direction:column;
`
export const MembersTitle = styled.div`
    color:#4d4d4d; 
    padding:5px;

`
export const MemberListWrapper = styled.ul`
    padding:0;
    margin:0;
    list-style:none;
`;

export const MemberListItem = styled.li`
    display:flex;
    align-items:'center';
    padding:10px;
    ${props=>props.waved && 'font-weight:800'};

`
export const Status = styled.span`
    display:inline-block;
    background-color: ${({color})=>color === 'green' ? '#3EE162' : color === 'yellow' ? '#DFD600' : '#FF5B51'};
    height:10px;
    width:10px; 
    border-radius:5px;
`