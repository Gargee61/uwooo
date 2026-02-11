import React from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const PrivacyPolicyModal = ({ isOpen, onClose }) => {
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
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Privacy Policy</h2>
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-full text-gray-600 dark:text-gray-400 transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto p-6 space-y-4 text-gray-700 dark:text-gray-300">
                        <section>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Introduction</h3>
                            <p>
                                At AI_Auto, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Information We Collect</h3>
                            <p>
                                We may collect personal information such as your name, email address, and usage data when you interact with our services. This information helps us provide and improve our platform.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How We Use Your Information</h3>
                            <p>
                                Your information is used to operate, maintain, and improve our services, communicate with you, and ensure the security of our platform.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Data Security</h3>
                            <p>
                                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Your Rights</h3>
                            <p>
                                You have the right to access, update, or delete your personal information. Contact us at admin@uwo24.com for any privacy-related requests.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Contact Us</h3>
                            <p>
                                If you have any questions about this Privacy Policy, please contact us at admin@uwo24.com or +91 83589 90909.
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

export default PrivacyPolicyModal;
