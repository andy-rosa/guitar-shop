import {ReactComponent as EyeIcon} from '../../../../assets/img/sprite/icon-eye.svg';
import {memo, useId} from "react";
import {useChangeInput} from "../../../../hooks/useChangeInput";

export const InputHideButton = memo(() => {
    const id = useId();
    const {isHide, hidePasswordHandler, showPasswordHandler} = useChangeInput();

    return (
        <div className="input-login">
            <label htmlFor={id}>Придумайте пароль</label>
            <span>
                  <input type={isHide ? 'password' : 'text'} placeholder="• • • • • • • • • • • •" id={id} name={id} autoComplete="off" required />
                  <button
                      onMouseDown={showPasswordHandler}
                      onMouseUp={hidePasswordHandler}
                      className="input-login__button-eye"
                      type="button"
                  >
                    <EyeIcon />
                  </button>
            </span>
            <p className="input-login__error">Заполните поле</p>
        </div>
    )
})