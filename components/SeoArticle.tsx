
import React, { useState } from 'react';

const SeoArticle: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "The Ultimate Guide to Stock Photography: Licensing, Strategy, and Ethical Use",
        "description": "A comprehensive guide to understanding stock photography licensing, visual content strategy, and ethical usage for businesses and creators.",
        "author": {
            "@type": "Person",
            "name": "HSINI MOHAMED",
            "url": "https://github.com/hsinidev"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Stellar Stock Photo Finder",
            "logo": {
                "@type": "ImageObject",
                "url": "https://stellarstockphotofinder.doodax.com/favicon.svg"
            }
        },
        "datePublished": "2023-10-27",
        "dateModified": "2024-05-20",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://stellarstockphotofinder.doodax.com/guide"
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What is the main difference between royalty-free and rights-managed licenses?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Royalty-free (RF) licenses allow you to pay a one-time fee (or download for free under certain terms) to use an image multiple times for various projects without additional charges. Rights-managed (RM) licenses are more restrictive, granting use for a specific purpose, duration, and geographic region, often requiring renewal for different uses."
                }
            },
            {
                "@type": "Question",
                "name": "Can I use Creative Commons images for my business website?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "It depends on the specific Creative Commons license. Licenses like CC BY and CC BY-SA allow commercial use, provided you give attribution. However, licenses with the Non-Commercial (NC) clause, such as CC BY-NC, prohibit use for commercial purposes."
                }
            },
            {
                "@type": "Question",
                "name": "Is it necessary to give credit for a public domain image?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Legally, no attribution is required for public domain images (CC0) as their copyrights have expired or been waived. However, it is considered good practice and ethical to credit the source or creator if known, as it honors their work and helps others find the source."
                }
            }
        ]
    };

    return (
        <div className="w-full bg-gray-900/80 backdrop-blur-sm border border-cyan-500/30 rounded-xl p-6 shadow-2xl">
             <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
             <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
             
             <div className={`relative transition-all duration-700 ease-in-out ${isExpanded ? 'max-h-full' : 'max-h-[3.5rem] overflow-hidden'}`}>
                <article className="prose prose-invert prose-lg max-w-none text-gray-300 prose-headings:text-cyan-400 prose-a:text-purple-400 prose-strong:text-white prose-li:marker:text-cyan-500">
                    
                    <h1 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">The Ultimate Guide to Stock Photography: Licensing, Strategy, and Ethical Use</h1>
                    
                    <p className="lead text-xl text-gray-200 mb-8">
                        In the digital age, visual content is not just an accessory; it is the cornerstone of effective communication. Whether you are a startup founder, a seasoned marketer, or a freelance creator, the images you choose act as the silent ambassadors of your brand. A compelling image can capture attention in milliseconds, convey complex narratives without a single word, and evoke emotions that drive user action. However, the world of stock photography is vast and often misunderstood. Navigating the labyrinth of licensing agreements, optimizing for search engines, and maintaining ethical standards requires knowledge and strategy. This comprehensive guide aims to be your definitive resource, illuminating the path to visual excellence while ensuring legal safety and ethical integrity.
                    </p>

                    <h3 className="text-2xl font-semibold mt-8 mb-4">Table of Contents</h3>
                    <ol className="list-decimal list-inside space-y-2 mb-8 text-gray-400">
                        <li>Understanding the Landscape of Stock Photo Licensing</li>
                        <li>Decoding Creative Commons: A Spectrum of Permissions</li>
                        <li>The Gold Standard: Public Domain and Royalty-Free</li>
                        <li>Ethical Use of Stock Photos: Beyond the License</li>
                        <li>Visual Content Strategy: Aligning Imagery with Brand Identity</li>
                        <li>Technical Mastery: Resolution, Formats, and SEO</li>
                        <li>The Future of Stock Imagery: AI and Authenticity</li>
                        <li>Best Practices for Image Attribution</li>
                        <li>Comparison Table: Common Licenses</li>
                        <li>Frequently Asked Questions (FAQ)</li>
                    </ol>

                    <hr className="border-gray-700 my-8" />

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold mb-4 text-cyan-300">1. Understanding the Landscape of Stock Photo Licensing</h2>
                        <p className="mb-4">
                            At its core, a stock photo license is a legal agreement between the creator (licensor) and the user (licensee). It dictates exactly how, where, and for how long you can use an image. Ignoring these terms is not just a faux pas; it can lead to severe legal and financial consequences, including copyright infringement lawsuits that can bankrupt small businesses. The two primary categories of commercial licenses are <strong>Royalty-Free</strong> and <strong>Rights-Managed</strong>.
                        </p>
                        <h4 className="text-xl font-semibold mb-2 text-white">Royalty-Free (RF)</h4>
                        <p className="mb-4">
                            This is the most popular license for modern digital use. The term "free" is often a source of confusion; it does not necessarily mean the image is without cost. Instead, it means you are free from paying <em>royalties</em> for each specific use. You typically pay a one-time fee (or download for free from sites like Pexels) to license the image. Once licensed, you can use it in perpetuity for a wide range of applications—websites, social media, print brochures, and video presentations—without incurring additional costs. 
                        </p>
                        <p className="mb-4">
                            <em>Key Limitation:</em> RF licenses are non-exclusive. This means your competitor could theoretically use the exact same image on their homepage. Additionally, there are often caps on print runs (e.g., up to 500,000 copies) and restrictions on using the image in products for resale (like t-shirts or mugs) without purchasing an extended license.
                        </p>
                        <h4 className="text-xl font-semibold mb-2 text-white">Rights-Managed (RM)</h4>
                        <p className="mb-4">
                            Rights-Managed licenses are the bespoke suits of the stock photo world. They are tailored, specific, and often more expensive. The cost is calculated based on usage parameters: the specific medium (e.g., front cover of a national magazine), duration (e.g., 6 months), geographic region (e.g., North America only), and size of display.
                        </p>
                        <p>
                            <em>The Exclusive Advantage:</em> The primary benefit of RM licenses is exclusivity. You can pay a premium to ensure that no one else in your industry—or no one else at all—can use that image for the duration of your license. This is crucial for major advertising campaigns where brand uniqueness is non-negotiable.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold mb-4 text-cyan-300">2. Decoding Creative Commons: A Spectrum of Permissions</h2>
                        <p className="mb-4">
                            Creative Commons (CC) is a non-profit organization that has revolutionized the way we share creativity. They provide a suite of free, easy-to-understand copyright licenses that allow creators to give the public permission to share and use their work under conditions of their choice.
                        </p>
                        <ul className="space-y-3 list-disc list-inside text-gray-300">
                            <li><strong>CC BY (Attribution):</strong> The most accommodating license. You can distribute, remix, tweak, and build upon the work, even commercially, as long as you credit the original creator.</li>
                            <li><strong>CC BY-SA (Attribution-ShareAlike):</strong> You can use the work commercially with attribution, but any derivative works you create must be licensed under the exact same terms. This is the license used by Wikipedia.</li>
                            <li><strong>CC BY-ND (Attribution-NoDerivs):</strong> You can copy and distribute the work commercially, but it must be passed along unchanged and in whole, with credit to the creator.</li>
                            <li><strong>CC BY-NC (Attribution-NonCommercial):</strong> You can remix and adapt the work, but strictly for non-commercial purposes. Attribution is required.</li>
                            <li><strong>CC0 (Public Domain Dedication):</strong> The holy grail for hassle-free use. The creator has waived all rights to the work worldwide under copyright law. You can copy, modify, distribute, and perform the work, all without asking permission.</li>
                        </ul>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold mb-4 text-cyan-300">3. Ethical Use of Stock Photos: Beyond the License</h2>
                        <p className="mb-4">
                            While legal compliance keeps you out of court, ethical use builds trust with your audience. In an era of heightened social awareness, the images you choose reflect your brand's values.
                        </p>
                        <h4 className="text-xl font-semibold mb-2 text-white">Representation Matters</h4>
                        <p className="mb-4">
                            Avoid the "perfectly diverse team laughing at a salad" trope. It feels manufactured and insincere. Instead, seek out images that depict genuine human diversity—different ages, body types, ethnicities, and abilities—in natural, authentic settings. Platforms like Pexels have made significant strides in curating collections that celebrate authentic representation.
                        </p>
                        <h4 className="text-xl font-semibold mb-2 text-white">Context is Key</h4>
                        <p>
                            Be incredibly careful when using stock photos for sensitive topics such as mental health, illness, poverty, or crime. Most standard licenses include a "Sensitive Use" clause that prohibits using an image in a way that portrays the model in a bad light or implies they suffer from a specific condition, unless you include a clear disclaimer stating, "Posed by model. Image for illustrative purposes only."
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold mb-4 text-cyan-300">4. Visual Content Strategy for Your Website</h2>
                        <p className="mb-4">
                            A cohesive visual strategy ensures your website feels like a unified experience rather than a scrapbook of random images.
                        </p>
                        <ul className="space-y-4">
                            <li className="bg-gray-800 p-4 rounded-lg">
                                <strong className="text-cyan-400 block mb-1">Define Your Aesthetic</strong>
                                Decide on a visual language. Do you prefer warm, sun-drenched tones or cool, desaturated tech vibes? Do you want candid, journalistic photography or polished, studio-lit compositions? Stick to this style to create brand recognition.
                            </li>
                            <li className="bg-gray-800 p-4 rounded-lg">
                                <strong className="text-cyan-400 block mb-1">The Hero Image</strong>
                                Your homepage hero image is the most valuable real estate on your site. It must instantly communicate your value proposition. It should be high-resolution, emotive, and have enough "negative space" (empty areas) to overlay your headline text legibly.
                            </li>
                            <li className="bg-gray-800 p-4 rounded-lg">
                                <strong className="text-cyan-400 block mb-1">Consistency Across Channels</strong>
                                The imagery on your Instagram should feel like a cousin to the imagery on your website. This cross-channel consistency reinforces your brand identity in the mind of the consumer.
                            </li>
                        </ul>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold mb-4 text-cyan-300">5. Technical Mastery: Resolution, Formats, and SEO</h2>
                        <p className="mb-4">
                            A beautiful image that fails to load is worse than no image at all. Balancing quality with performance is the job of the modern web developer and content manager.
                        </p>
                        <h4 className="text-xl font-semibold mb-2 text-white">Image SEO</h4>
                        <p className="mb-4">
                            Google Images is a massive search engine in its own right. optimizing your images can drive significant organic traffic.
                        </p>
                        <ul className="list-disc list-inside mb-4 text-gray-300">
                            <li><strong>Alt Text:</strong> Always provide descriptive Alt Text. This is primarily for accessibility (screen readers for the visually impaired) but also tells Google what the image is about. E.g., instead of "IMG_001.jpg", use "woman-coding-on-laptop-in-coffee-shop".</li>
                            <li><strong>File Names:</strong> Rename your files before uploading. "sunset-over-paris.jpg" is infinitely better than "DSC8932.jpg".</li>
                            <li><strong>File Size:</strong> Large images kill page speed. Aim to keep full-width banner images under 200KB and smaller inline images under 50KB-100KB whenever possible.</li>
                        </ul>
                        <h4 className="text-xl font-semibold mb-2 text-white">Formats</h4>
                        <p>
                            <strong>JPEG</strong> is standard for photographs. <strong>PNG</strong> is for graphics with transparency. <strong>WebP</strong> and <strong>AVIF</strong> are next-gen formats that offer superior compression and quality—use them whenever browser compatibility allows.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold mb-4 text-cyan-300">6. Best Practices for Image Attribution</h2>
                        <p className="mb-4">
                            Even when not legally required (as with CC0), attribution is a hallmark of a professional and respectful creator. It supports the ecosystem that provides us with these free resources.
                        </p>
                        <div className="bg-gray-800 border-l-4 border-purple-500 p-4 italic text-gray-300">
                            "Photo by [Photographer Name] via [Source Website]"
                        </div>
                        <p className="mt-4">
                            Link the photographer's name to their profile and the source website to the original image page. This simple act of courtesy goes a long way.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold mb-4 text-cyan-300">7. Data Table: Common Creative Commons Licenses</h2>
                        <div className="overflow-x-auto rounded-lg shadow-lg border border-gray-700">
                            <table className="min-w-full divide-y divide-gray-700">
                                <thead className="bg-gray-800">
                                    <tr>
                                        <th className="px-6 py-4 text-left text-xs font-bold text-cyan-400 uppercase tracking-wider">License</th>
                                        <th className="px-6 py-4 text-left text-xs font-bold text-cyan-400 uppercase tracking-wider">Commercial Use?</th>
                                        <th className="px-6 py-4 text-left text-xs font-bold text-cyan-400 uppercase tracking-wider">Modification Allowed?</th>
                                        <th className="px-6 py-4 text-left text-xs font-bold text-cyan-400 uppercase tracking-wider">Attribution Required?</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-gray-900 divide-y divide-gray-700">
                                    <tr className="hover:bg-gray-800/50 transition-colors">
                                        <td className="px-6 py-4 whitespace-nowrap font-medium text-white">CC BY</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-green-400 font-bold">Yes</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-green-400 font-bold">Yes</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-green-400 font-bold">Yes</td>
                                    </tr>
                                    <tr className="hover:bg-gray-800/50 transition-colors">
                                        <td className="px-6 py-4 whitespace-nowrap font-medium text-white">CC BY-SA</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-green-400 font-bold">Yes</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-green-400 font-bold">Yes (ShareAlike)</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-green-400 font-bold">Yes</td>
                                    </tr>
                                    <tr className="hover:bg-gray-800/50 transition-colors">
                                        <td className="px-6 py-4 whitespace-nowrap font-medium text-white">CC BY-NC</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-red-400 font-bold">No</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-green-400 font-bold">Yes</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-green-400 font-bold">Yes</td>
                                    </tr>
                                    <tr className="hover:bg-gray-800/50 transition-colors">
                                        <td className="px-6 py-4 whitespace-nowrap font-medium text-white">CC BY-ND</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-green-400 font-bold">Yes</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-red-400 font-bold">No</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-green-400 font-bold">Yes</td>
                                    </tr>
                                    <tr className="hover:bg-gray-800/50 transition-colors">
                                        <td className="px-6 py-4 whitespace-nowrap font-medium text-white">CC0 (Public Domain)</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-green-400 font-bold">Yes</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-green-400 font-bold">Yes</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-yellow-400 font-bold">No (but appreciated)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold mb-4 text-cyan-300">8. Frequently Asked Questions (FAQ)</h2>
                        <div className="space-y-6">
                            <div className="bg-gray-800/30 p-4 rounded-lg border border-gray-700/50">
                                <h4 className="text-lg font-bold text-white mb-2">What is the main difference between royalty-free and rights-managed licenses?</h4>
                                <p>Royalty-free (RF) licenses allow you to pay a one-time fee to use an image multiple times for various projects without additional charges. Rights-managed (RM) licenses are more restrictive, granting use for a specific purpose, duration, and geographic region, often requiring renewal for different uses.</p>
                            </div>
                            <div className="bg-gray-800/30 p-4 rounded-lg border border-gray-700/50">
                                <h4 className="text-lg font-bold text-white mb-2">Can I use Creative Commons images for my business website?</h4>
                                <p>It depends on the specific Creative Commons license. Licenses like CC BY and CC BY-SA allow commercial use, provided you give attribution. However, licenses with the Non-Commercial (NC) clause, such as CC BY-NC, prohibit use for commercial purposes.</p>
                            </div>
                            <div className="bg-gray-800/30 p-4 rounded-lg border border-gray-700/50">
                                <h4 className="text-lg font-bold text-white mb-2">Is it necessary to give credit for a public domain image?</h4>
                                <p>Legally, no attribution is required for public domain images as their copyrights have expired or been waived. However, it is considered good practice and ethical to credit the source or creator if known, as it honors their work and helps others find the source.</p>
                            </div>
                             <div className="bg-gray-800/30 p-4 rounded-lg border border-gray-700/50">
                                <h4 className="text-lg font-bold text-white mb-2">What happens if I use a stock photo without the correct license?</h4>
                                <p>Using a stock photo without a valid license is copyright infringement. This can result in a Digital Millennium Copyright Act (DMCA) takedown notice, forcing you to remove the image. It can also lead to legal action from the copyright holder, potentially resulting in substantial fines and legal fees.</p>
                            </div>
                        </div>
                    </section>
                </article>
                {!isExpanded && <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-gray-900 via-gray-900/95 to-transparent pointer-events-none"></div>}
            </div>
            <div className="text-center mt-4">
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="group relative inline-flex items-center justify-center px-8 py-3 font-bold text-white transition-all duration-200 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full hover:from-purple-600 hover:to-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 focus:ring-offset-gray-900"
                >
                    {isExpanded ? 'Read Less' : 'Read Full Guide'}
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ml-2 transform transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default SeoArticle;
