import {useCallback, useState} from "react";

export function useChangeInput() {
    const [isHide, setIsHide] = useState(true);

    const showPasswordHandler = useCallback(() => {
        setIsHide(false)
    }, [])

    const hidePasswordHandler = useCallback(() => {
        setIsHide(true)
    }, [])

    return {isHide, showPasswordHandler, hidePasswordHandler}
}