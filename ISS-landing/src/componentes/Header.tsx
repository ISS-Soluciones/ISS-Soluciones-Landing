import { Package } from "lucide-react";
import "./Header.css";

export function Header(){
    return (
        <header className="header-container">
            <div className="header-content">
                <Package />
                <h1 className="header-title">ISS Soluciones</h1>
            </div>
        </header>
    )
}