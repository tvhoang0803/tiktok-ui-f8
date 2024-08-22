import classNames from "classnames/bind";
import styles from './AccountItem.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles)

function AccountsItem() {
    return <div className={cx('wrapper')}>
        <img className={cx('avatar')} src="https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/99095e17a41c7bb3ea3bd5cb262b0938.jpeg?lk3s=a5d48078&nonce=9651&refresh_token=2b3744759382dee6f71af1d0c524daaf&x-expires=1724421600&x-signature=AEVvYvAOl6rgzCLtEqTDB3vf3hA%3D&shp=a5d48078&shcp=81f88b70" alt="Hoaa"/>
        <div className={cx('info')}>
            <h4 className={cx('name')}>
                <span>Nguyen Van A</span>
                <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>
            </h4>
            <span className={cx('username')}>nguyenvana</span>
        </div>
    </div>
}

export default AccountsItem;