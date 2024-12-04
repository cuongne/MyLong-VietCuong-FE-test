import { useEffect, useRef } from "react";
import { Close } from "../icons";
import { cn } from "../utils/func";

interface PopupProps {
    isOpen: boolean;
    closePopup: () => void;
    children: React.ReactNode;
    className?: string;

}
const Popup = ({ isOpen, closePopup, children, className }: PopupProps) => {
    const popupRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
                closePopup();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, closePopup]);
    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center px-5 sm:px-0 bg-gray-800 bg-opacity-50 z-50">
                    <div
                        ref={popupRef}
                        className={cn("bg-white p-6 rounded-lg shadow-lg sm:w-1/3 w-full relative", className)}
                    >
                        {children}
                        <button onClick={closePopup} className="absolute top-3 right-3"><Close /></button>
                    </div>
                </div>
            )}
        </>
    );
};


export default Popup;
