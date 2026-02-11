import React from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CookiePolicyModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    className="bg-white dark:bg-slate-900 rounded-2xl w-full max-w-3xl max-h-[80vh] overflow-hidden flex flex-col shadow-2xl border border-gray-200 dark:border-white/10"
                >
                    <div className="p-6 border-b border-gray-200 dark:border-white/10 flex justify-between items-center bg-gradient-to-r from-purple-50 to-blue-50 dark:from-slate-800 dark:to-slate-800">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Cookie Policy</h2>
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-full text-gray-600 dark:text-gray-400 transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto p-6 space-y-4 text-gray-700 dark:text-gray-300">
                        <section>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">What Are Cookies?</h3>
                            <p>
                                Cookies are small text files that are placed on your device when you visit AI_Auto. They help us provide you with a better experience and allow certain features to function properly.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How We Use Cookies</h3>
                            <p>
                                We use cookies to understand how you use our platform, remember your preferences, and improve your experience. This includes essential cookies for functionality and analytics cookies for performance monitoring.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Types of Cookies We Use</h3>
                            <ul className="list-disc list-inside space-y-2">
                                <li><strong>Essential Cookies:</strong> Required for the platform to function properly</li>
                                <li><strong>Performance Cookies:</strong> Help us understand how visitors interact with our platform</li>
                                <li><strong>Functionality Cookies:</strong> Remember your preferences and settings</li>
                            </ul>
                        </section>

                        <section>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Managing Cookies</h3>
                            <p>
                                You can control and manage cookies through your browser settings. Please note that disabling certain cookies may affect the functionality of AI_Auto.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Updates to This Policy</h3>
                            <p>
                                We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated revision date.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Contact Us</h3>
                            <p>
                                If you have questions about our use of cookies, please contact us at admin@uwo24.com.
                            </p>
                        </section>
                    </div>

                    <div className="p-4 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-slate-800 text-center">
                        <button
                            onClick={onClose}
                            className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-bold hover:opacity-90 transition-all shadow-lg"
                        >
                            Close
                        </button>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default CookiePolicyModal;
