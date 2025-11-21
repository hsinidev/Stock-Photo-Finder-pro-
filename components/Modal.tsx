
import React, { ReactNode } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 p-4" onClick={onClose}>
      <div 
        className="relative bg-gray-900 border border-cyan-500/30 rounded-lg shadow-2xl shadow-cyan-500/20 w-full max-w-4xl max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="flex justify-between items-center p-4 border-b border-gray-700">
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">{title}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white text-2xl">&times;</button>
        </header>
        <main className="p-6 overflow-y-auto text-gray-300">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Modal;
