
import React, { useState, useEffect, useCallback } from 'react';
import { fetchImages } from '../services/ImageApi';
import type { ImageType } from '../types';

const ImageFinderTool: React.FC = () => {
    const [apiKey, setApiKey] = useState('');
    const [query, setQuery] = useState('Galaxy');
    const [orientation, setOrientation] = useState('landscape');
    const [size, setSize] = useState('large');
    const [images, setImages] = useState<ImageType[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        const storedApiKey = sessionStorage.getItem('pexelsApiKey');
        if (storedApiKey) {
            setApiKey(storedApiKey);
        }
    }, []);

    const handleApiKeyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setApiKey(e.target.value);
        sessionStorage.setItem('pexelsApiKey', e.target.value);
    };

    const performSearch = useCallback(async (searchPage: number, freshSearch: boolean) => {
        if (!apiKey) {
            // Silent return or handle appropriately if key is missing during init, 
            // but we show a welcome screen if no key is present.
            if (freshSearch && !apiKey) setError(null); 
            return;
        }
        setIsLoading(true);
        setError(null);

        try {
            const result = await fetchImages({ apiKey, query, orientation, size, page: searchPage });
            if (freshSearch) {
                setImages(result.photos);
            } else {
                setImages(prev => [...prev, ...result.photos]);
            }
            setHasMore(result.photos.length > 0 && !!result.next_page);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An unknown error occurred.');
            if (freshSearch) setImages([]);
        } finally {
            setIsLoading(false);
        }
    }, [apiKey, query, orientation, size]);
    
    useEffect(() => {
        if (apiKey) {
            setImages([]);
            setPage(1);
            setHasMore(true);
            performSearch(1, true);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [apiKey]); 

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (!apiKey) {
            setError('Please enter your Pexels API Key to start searching.');
            return;
        }
        setPage(1);
        setImages([]);
        setHasMore(true);
        performSearch(1, true);
    };
    
    const loadMore = () => {
        if (!isLoading && hasMore) {
            const nextPage = page + 1;
            setPage(nextPage);
            performSearch(nextPage, false);
        }
    };

    return (
        <div className="w-full max-w-7xl mx-auto flex flex-col items-center animate-fade-in">
            <div className="w-full bg-gray-900/40 backdrop-blur-lg p-8 rounded-2xl border border-white/10 shadow-2xl shadow-cyan-900/20 mb-10">
                <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
                    <div className="md:col-span-12 lg:col-span-4">
                        <label htmlFor="apiKey" className="block text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2 ml-1">Pexels API Key</label>
                        <div className="relative group">
                             <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                             <input
                                type="password"
                                id="apiKey"
                                value={apiKey}
                                onChange={handleApiKeyChange}
                                placeholder="Paste key here..."
                                className="relative w-full bg-black/50 border border-white/10 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all placeholder-gray-600 shadow-inner"
                            />
                        </div>
                    </div>
                    <div className="md:col-span-8 lg:col-span-5">
                        <label htmlFor="search" className="block text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2 ml-1">Search Keywords</label>
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                            <input
                                type="text"
                                id="search"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Try 'Cosmic Nebula' or 'Urban City'..."
                                className="relative w-full bg-black/50 border border-white/10 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all placeholder-gray-600 shadow-inner"
                            />
                        </div>
                    </div>
                    <div className="md:col-span-2 lg:col-span-1">
                         <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-1">Format</label>
                        <select 
                            value={orientation} 
                            onChange={(e) => setOrientation(e.target.value)} 
                            className="w-full bg-black/50 border border-white/10 text-gray-300 rounded-lg px-2 py-3 focus:ring-2 focus:ring-cyan-500 outline-none transition-all cursor-pointer hover:bg-white/5"
                        >
                            <option value="landscape">Landscape</option>
                            <option value="portrait">Portrait</option>
                            <option value="square">Square</option>
                        </select>
                    </div>
                    <div className="md:col-span-2 lg:col-span-1">
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-1">Size</label>
                        <select 
                            value={size} 
                            onChange={(e) => setSize(e.target.value)} 
                            className="w-full bg-black/50 border border-white/10 text-gray-300 rounded-lg px-2 py-3 focus:ring-2 focus:ring-cyan-500 outline-none transition-all cursor-pointer hover:bg-white/5"
                        >
                            <option value="large">Large</option>
                            <option value="medium">Medium</option>
                            <option value="small">Small</option>
                        </select>
                    </div>
                    <button 
                        type="submit" 
                        className="md:col-span-12 lg:col-span-1 h-[50px] bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white font-bold rounded-lg shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                </form>
            </div>
            
            {!apiKey && images.length === 0 && !isLoading && (
                 <div className="text-center mt-8 p-10 bg-black/40 backdrop-blur-md rounded-2xl border border-white/10 max-w-2xl">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-4">Welcome to Stellar Stock</h2>
                    <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                        Your gateway to a universe of stunning, high-resolution imagery. To begin your journey, please enter your Pexels API Key above.
                    </p>
                    <a 
                        href="https://www.pexels.com/api/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center px-6 py-3 border border-cyan-500/50 text-cyan-400 font-semibold rounded-full hover:bg-cyan-900/20 transition-colors"
                    >
                        Get a Free API Key <span className="ml-2">&rarr;</span>
                    </a>
                </div>
            )}

            {error && (
                <div className="mt-6 text-center bg-red-500/10 border border-red-500/50 p-4 rounded-lg w-full max-w-2xl flex items-center justify-center gap-3">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span className="text-red-200 font-medium">{error}</span>
                </div>
            )}

            <div className="mt-12 w-full min-h-[400px]">
                <div className="columns-1 sm:columns-2 lg:columns-4 gap-4 space-y-4">
                    {images.map((image) => (
                        <div key={image.id} className="break-inside-avoid group relative rounded-xl overflow-hidden bg-gray-900 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] z-0 hover:z-10">
                            <img src={image.src.large} alt={image.alt} loading="lazy" className="w-full h-auto block transition-transform duration-700 group-hover:scale-110" />
                            
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <p className="text-white font-medium text-sm mb-1 truncate">{image.alt || 'Untitled'}</p>
                                <p className="text-gray-400 text-xs mb-4 flex items-center">
                                    by <a href={image.photographer_url} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 ml-1 hover:underline">{image.photographer}</a>
                                </p>
                                <a 
                                    href={image.src.original} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    download 
                                    className="inline-flex items-center justify-center w-full bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white text-xs font-bold py-2 px-4 rounded border border-white/20 transition-colors uppercase tracking-wider"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>
                                    Download
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                 {isLoading && (
                    <div className="text-center py-20 w-full flex flex-col items-center justify-center">
                        <div className="relative w-16 h-16">
                             <div className="absolute inset-0 border-4 border-cyan-900 rounded-full"></div>
                             <div className="absolute inset-0 border-4 border-cyan-400 rounded-full border-t-transparent animate-spin"></div>
                        </div>
                        <p className="mt-6 text-xl font-light text-cyan-200 tracking-widest uppercase animate-pulse">Scanning Cosmos...</p>
                    </div>
                )}

                {!isLoading && hasMore && images.length > 0 && (
                    <div className="text-center py-12 w-full">
                        <button onClick={loadMore} className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-transparent border-2 border-cyan-500 rounded-full hover:bg-cyan-500 hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 focus:ring-offset-black">
                            <span className="mr-2">Discover More</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </button>
                    </div>
                )}
                
                 {!isLoading && !hasMore && images.length > 0 && (
                     <div className="text-center py-12 text-gray-500">
                         <p>You have reached the edge of the known universe.</p>
                     </div>
                 )}
            </div>
        </div>
    );
};

export default ImageFinderTool;
