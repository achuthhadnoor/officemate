import Link from 'next/link';
import * as Styles from './styled'

const Members = ({MemberList}) => {
    return (
        <Styles.MembersWrapper>
            <Styles.MembersTitle>Members</Styles.MembersTitle>
            <Styles.MemberListWrapper>
                {
                    MemberList.map(({ id, status, name, waved }, i) => (
                        <Styles.MemberListItem key={i} waved={waved}>
                            <Link href="/">
                                <a>
                                    <span> {status === 'available' ? <Styles.Status color="green" /> : status === 'away' ? <Styles.Status color="yellow" /> : status === 'busy' ? <Styles.Status color="red" /> : status}</span>
                                    {waved && <span style={{ paddingLeft: 5 }}>✋</span>}
                                    <span style={{ paddingLeft: 5 }}> {name}</span>
                                </a>
                            </Link>
                        </Styles.MemberListItem>
                    ))
                }
            </Styles.MemberListWrapper>
        </Styles.MembersWrapper>
    )
};

export default Members;