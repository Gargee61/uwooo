import React from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const TermsOfServiceModal = ({ isOpen, onClose }) => {
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
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Terms of Service</h2>
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-full text-gray-600 dark:text-gray-400 transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto p-6 space-y-4 text-gray-700 dark:text-gray-300">
                        <section>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Acceptance of Terms</h3>
                            <p>
                                By accessing and using AI_Auto, you accept and agree to be bound by the terms and provisions of this agreement.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Use License</h3>
                            <p>
                                Permission is granted to temporarily use AI_Auto for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Disclaimer</h3>
                            <p>
                                The materials on AI_Auto are provided on an 'as is' basis. AI_Auto makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Limitations</h3>
                            <p>
                                In no event shall AI_Auto or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use AI_Auto.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Revisions</h3>
                            <p>
                                AI_Auto may revise these terms of service at any time without notice. By using this platform, you are agreeing to be bound by the current version of these terms.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Governing Law</h3>
                            <p>
                                These terms and conditions are governed by and construed in accordance with applicable laws, and you irrevocably submit to the exclusive jurisdiction of the courts.
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

export default TermsOfServiceModal;
