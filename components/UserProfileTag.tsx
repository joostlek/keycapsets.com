import { useContext, useState } from 'react';
import { Context } from 'typings';
import context from '../context';
import Link from 'next/link';
import { logoutUser } from '../utils/user';

function UserProfileTag() {
    const { state } = useContext<Context>(context);
    const [isPopoverShown, setIspopoverShown] = useState<Boolean>(false);

    function logout() {
        logoutUser();
    }

    return (
        <div className="user-profile-tag">
            {
                <div className="profile-tag-wrapper" onClick={() => setIspopoverShown(!isPopoverShown)}>
                    {state.user.avatar !== null ? (
                        <div className="profile-image">
                            <img src={state.user.avatar} alt={state.user.name} referrerPolicy="no-referrer" />
                        </div>
                    ) : (
                        <div className="profile-tag">{state.user.name !== null && state.user.name.slice(0, 2)}</div>
                    )}
                </div>
            }
            {isPopoverShown && (
                <div className="popover account">
                    <div className="popover-container center">
                        <Link href="/user/edit/">
                            <a className="item clickable">Edit profile</a>
                        </Link>
                        {/* <Link href="/user/[usernam]" as={`/user/${state.user.slug}`}>
                                <a className="item clickable">See profile</a>
                            </Link> */}
                        <a className="item clickable" onClick={logout}>
                            Logout
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
}

export default UserProfileTag;
