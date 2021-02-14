import Link from 'next/link';
import * as Styles from './styled'
import Icon from 'react-icons-kit';
import { paperclip } from 'react-icons-kit/feather/paperclip'
import { mic } from 'react-icons-kit/feather/mic'
import { externalLink } from 'react-icons-kit/feather/externalLink'
const Members = ({ MemberList }) => {
    return (
        <Styles.MembersWrapper>
            <Styles.MembersTitle>Members</Styles.MembersTitle>
            <Styles.MemberSearch placeholder="Search" />
            <Styles.MemberListWrapper>
                {
                    MemberList.map(({ id, status, name, waved }, i) => (
                        <Styles.MemberListItem key={i} waved={waved}>
                            <Link href={`/chat/${id}`}>
                                <Styles.ListLink>
                                    <span> {status === 'available' ? <Styles.Status color="green" /> : status === 'away' ? <Styles.Status color="yellow" /> : status === 'busy' ? <Styles.Status color="red" /> : status}</span>
                                    {waved && <span style={{ paddingLeft: 5 }}>👋</span>}
                                    <span style={{ paddingLeft: 5 }}> {name}</span>
                                </Styles.ListLink>
                            </Link>
                            <Styles.ListOptions>
                                <Styles.ListOption>
                                    <span>👋</span>
                                </Styles.ListOption>
                                <Styles.ListOption>
                                    <Icon icon={paperclip} />
                                </Styles.ListOption>
                                <Styles.ListOption>
                                    <Icon icon={mic} />
                                </Styles.ListOption>
                                <Styles.ListOption>
                                    <Link href={`/chat/${id}`}>
                                        <a target="_blank">
                                        <Icon icon={externalLink} />
                                        </a>
                                    </Link>
                                </Styles.ListOption>
                            </Styles.ListOptions>
                        </Styles.MemberListItem>
                    ))
                }
            </Styles.MemberListWrapper>
        </Styles.MembersWrapper>
    )
};

export default Members;