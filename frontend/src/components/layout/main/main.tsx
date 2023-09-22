import {PropsWithChildren} from "react";

export function Main({children}: PropsWithChildren) {
    return (
        <main className="page-content">
            <div className="container">
                {children}
            </div>
        </main>
    )
}