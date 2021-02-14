import styled from 'styled-components'
import Link from 'next/link'

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

export const ListLink = styled.a`
    padding:10px;
    flex:1;
`

export const ListOptions = styled.div`
    display:flex;
    align-items:center;
    color:#4d4d4d;
    opacity:0;

`
export const ListOption = styled.div`
    padding:5px;
`

export const MemberListItem = styled.li`
    display:flex;
    align-items:'center';
    padding:10px;
    ${props => props.waved && 'font-weight:800'};
    cursor:pointer;
    &:hover ${ListOptions}{
        opacity:1;
    }
`
export const Status = styled.span`
    display:inline-block;
    background-color: ${({ color }) => color === 'green' ? '#3EE162' : color === 'yellow' ? '#DFD600' : '#FF5B51'};
    height:10px;
    width:10px; 
    border-radius:5px;
`;

export const MemberSearch = styled.input`
    background:#2d2d2d;
    color:#efefef;
    border:1px solid #2d2d2d;
    border-radius:5px;
    padding:5px 10px;
    font-size:14px;
    margin:5px;
    border:none;
    outline:none;
    :focus{
    border:1px solid #ff6c4c;}
`;