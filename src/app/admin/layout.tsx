import { ReactNode } from "react";

export default function AdminLayout({ children }: { children: ReactNode }) {
    return (
        <div>
            {children}
            <p>Painel somente para admins</p>
        </div>
    )
}