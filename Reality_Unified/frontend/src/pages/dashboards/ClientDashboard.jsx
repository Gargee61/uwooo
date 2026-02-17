import React, { useState } from 'react';
import {
    Calendar, CurrencyDollar, ChartLineUp, CheckCircle,
    Clock, DownloadSimple, House, Info,
    Cards, Image, FileText, ArrowCircleRight,
    CaretRight, TrendUp, HandCoins, Receipt,
    ChatCenteredText, SealCheck, WarningCircle,
    PaperPlaneRight, UserCircle, Phone, MagnifyingGlass
} from '@phosphor-icons/react';

const ClientDashboard = () => {
    const [projectProgress] = useState(68);

    const budgetStats = [
        { label: 'Estimated Budget', value: '$850,000', icon: <CurrencyDollar size={24} />, color: 'var(--pivot-blue)' },
        { label: 'Amount Paid', value: '$575,000', icon: <HandCoins size={24} />, color: '#4CAF50' },
        { label: 'Pending Dues', value: '$275,000', icon: <Receipt size={24} />, color: '#F59E0B' }
    ];

    const milestones = [
        { title: 'Foundation & Earthwork', status: 'Completed', date: 'Jan 15, 2026', progress: 100 },
        { title: 'Structural Piling', status: 'Completed', date: 'Feb 02, 2026', progress: 100 },
        { title: 'Ground Floor Slab', status: 'Completed', date: 'Feb 28, 2026', progress: 100 },
        { title: 'First Floor Brickwork', status: 'In Progress', date: 'Expected Apr 15', progress: 45 },
        { title: 'Internal Finishing', status: 'Upcoming', date: 'Expected Jul 2026', progress: 0 },
        { title: 'Project Handover', status: 'Upcoming', date: 'Expected Dec 2026', progress: 0 },
    ];

    const pendingApprovals = [
        { id: 1, name: 'Electrical Layout V2', type: 'Design', status: 'Pending Approval', date: 'Feb 12' },
        { id: 2, name: 'Flooring Material Specs', type: 'Material', status: 'Pending Approval', date: 'Feb 10' }
    ];

    const invoices = [
        { id: 'INV-WP-012', desc: 'Brickwork Phase Completion', amount: '$45,000', dueDate: 'Mar 15, 2026', status: 'Pending' },
        { id: 'INV-WP-011', desc: 'Monthly Maintenance Charge', amount: '$1,200', dueDate: 'Mar 01, 2026', status: 'Paid' },
        { id: 'INV-WP-010', desc: 'Slab Casting Phase Payment', amount: '$120,000', dueDate: 'Jan 20, 2026', status: 'Paid' }
    ];

    return (
        <div style={{ padding: '2.5rem', maxWidth: '1400px', margin: '0 auto', paddingBottom: '5rem' }}>
            {/* Executive Summary Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5rem' }}>
                <div>
                    <h1 style={{ fontSize: '2.4rem', fontWeight: 900, color: '#000000', marginBottom: '8px', letterSpacing: '-0.5px' }}>Project Intelligence</h1>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#1a1a1a', fontWeight: 700 }}>
                        <House size={22} weight="bold" color="var(--pivot-blue)" />
                        <span style={{ fontSize: '1.1rem' }}>Luxury Estate - Plot #402, Sector 82</span>
                    </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#4a5568', marginBottom: '8px' }}>CONSTRUCTION VELOCITY</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <div style={{ width: '220px', height: '12px', background: '#e2e8f0', borderRadius: '10px', overflow: 'hidden' }}>
                            <div style={{ width: `${projectProgress}%`, height: '100%', background: 'var(--pivot-blue)', borderRadius: '10px' }}></div>
                        </div>
                        <span style={{ fontSize: '1.6rem', fontWeight: 950, color: 'var(--pivot-blue)' }}>{projectProgress}%</span>
                    </div>
                </div>
            </div>

            {/* Financial Summary */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '2.5rem' }}>
                {budgetStats.map((s, i) => (
                    <div key={i} className="card" style={{ padding: '1.8rem', display: 'flex', alignItems: 'center', gap: '1.5rem', border: '1px solid #e2e8f0' }}>
                        <div style={{
                            width: '56px', height: '56px', borderRadius: '16px',
                            background: `${s.color}15`, color: s.color,
                            display: 'flex', alignItems: 'center', justifyContent: 'center'
                        }}>
                            {s.icon}
                        </div>
                        <div>
                            <div style={{ fontSize: '0.9rem', color: '#4a5568', fontWeight: 800, marginBottom: '4px' }}>{s.label}</div>
                            <div style={{ fontSize: '1.8rem', fontWeight: 950, color: '#000000' }}>{s.value}</div>
                        </div>
                    </div>
                ))}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '2rem' }}>

                {/* Column 1: Timeline & Interaction */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

                    {/* Communication Hub */}
                    <div className="card" style={{ background: 'var(--pivot-blue)', color: 'white', border: 'none' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                            <h3 style={{ fontSize: '1.3rem', fontWeight: 900, margin: 0, display: 'flex', alignItems: 'center', gap: '10px', color: '#ffffff' }}>
                                <ChatCenteredText size={28} weight="bold" /> Concierge & Query Hub
                            </h3>
                            <button style={{ background: 'rgba(255,255,255,0.2)', border: 'none', color: 'white', padding: '10px 20px', borderRadius: '10px', fontWeight: 800, fontSize: '0.85rem', cursor: 'pointer' }}>Raise Query</button>
                        </div>
                        <p style={{ opacity: 0.95, fontSize: '0.95rem', marginBottom: '1.5rem', fontWeight: 600 }}>
                            Need clarification on design or budget? Message your builder directly or schedule a technical review.
                        </p>
                        <div style={{ display: 'flex', gap: '10px' }}>
                            <div style={{ flex: 1, background: 'rgba(255,255,255,0.15)', padding: '14px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <UserCircle size={36} weight="duotone" />
                                <div>
                                    <div style={{ fontSize: '0.75rem', fontWeight: 800, opacity: 0.8, letterSpacing: '0.5px' }}>CHIEF BUILDER</div>
                                    <div style={{ fontWeight: 800, fontSize: '1rem' }}>Er. Vikram Singh</div>
                                </div>
                            </div>
                            <button style={{ padding: '0 24px', borderRadius: '12px', background: '#ffffff', color: 'var(--pivot-blue)', border: 'none', fontWeight: 900, fontSize: '0.9rem', cursor: 'pointer' }}>Message</button>
                        </div>
                    </div>

                    {/* Document Approvals */}
                    <div className="card" style={{ border: '1px solid #e2e8f0' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                            <h3 style={{ fontSize: '1.43rem', fontWeight: 900, margin: 0, display: 'flex', alignItems: 'center', gap: '12px', color: '#000000' }}>
                                <SealCheck size={28} weight="bold" color="#4CAF50" /> Pending Approvals
                            </h3>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {pendingApprovals.map(doc => (
                                <div key={doc.id} style={{
                                    padding: '1.2rem', borderRadius: '14px', border: '1px solid #edf2f7',
                                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                                    background: '#f8fafc'
                                }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                        <div style={{ padding: '10px', background: 'white', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
                                            <FileText size={24} color="var(--pivot-blue)" weight="bold" />
                                        </div>
                                        <div>
                                            <div style={{ fontWeight: 800, color: '#1a202c', fontSize: '1rem' }}>{doc.name}</div>
                                            <div style={{ fontSize: '0.8rem', color: '#4a5568', fontWeight: 700 }}>{doc.type} • Uploaded {doc.date}</div>
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', gap: '10px' }}>
                                        <button style={{ padding: '8px 18px', background: 'white', border: '1.5px solid #e2e8f0', borderRadius: '10px', fontWeight: 800, fontSize: '0.85rem', cursor: 'pointer', color: '#1a202c' }}>View</button>
                                        <button style={{ padding: '8px 18px', background: '#4CAF50', color: 'white', border: 'none', borderRadius: '10px', fontWeight: 800, fontSize: '0.85rem', cursor: 'pointer' }}>Approve</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Timeline */}
                    <div className="card" style={{ border: '1px solid #e2e8f0' }}>
                        <h3 style={{ fontSize: '1.43rem', fontWeight: 900, marginBottom: '2.5rem', display: 'flex', alignItems: 'center', gap: '12px', color: '#000000' }}>
                            <Calendar size={28} weight="bold" color="var(--pivot-blue)" /> Milestone Timeline
                        </h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', position: 'relative' }}>
                            <div style={{ position: 'absolute', left: '11px', top: '10px', bottom: '10px', width: '2px', background: '#e2e8f0' }}></div>
                            {milestones.map((m, i) => (
                                <div key={i} style={{ display: 'flex', gap: '20px', position: 'relative', background: 'white' }}>
                                    <div style={{
                                        width: '26px', height: '26px', borderRadius: '50%',
                                        background: m.status === 'Completed' ? '#4CAF50' : m.status === 'In Progress' ? 'var(--pivot-blue)' : '#edf2f7',
                                        border: '4px solid white', zIndex: 1, boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                                    }}></div>
                                    <div style={{ flex: 1, paddingBottom: '1.5rem' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <div>
                                                <div style={{ fontWeight: 900, color: '#1a202c', fontSize: '1.05rem' }}>{m.title}</div>
                                                <div style={{ fontSize: '0.85rem', color: '#4a5568', fontWeight: 700 }}>{m.date}</div>
                                            </div>
                                            <span style={{ fontSize: '0.75rem', fontWeight: 900, color: m.status === 'Completed' ? '#2f855a' : 'var(--pivot-blue)', letterSpacing: '0.5px' }}>{m.status.toUpperCase()}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Column 2: Financials & History */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

                    {/* Invoices & History */}
                    <div className="card" style={{ border: '1px solid #e2e8f0' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                            <h3 style={{ fontSize: '1.2rem', fontWeight: 900, margin: 0, display: 'flex', alignItems: 'center', gap: '10px', color: '#000000' }}>
                                <Receipt size={26} weight="bold" color="#F59E0B" /> Invoice & Payment History
                            </h3>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {invoices.map((inv, i) => (
                                <div key={i} style={{ padding: '1.2rem', borderRadius: '14px', border: '1.5px solid #edf2f7', background: inv.status === 'Pending' ? '#fffbeb' : 'white' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                                        <span style={{ fontWeight: 950, fontSize: '1.1rem', color: '#000000' }}>{inv.amount}</span>
                                        <span style={{
                                            fontSize: '0.75rem', padding: '4px 10px', borderRadius: '6px', fontWeight: 900,
                                            background: inv.status === 'Paid' ? '#c6f6d5' : '#fed7d7',
                                            color: inv.status === 'Paid' ? '#22543d' : '#9b2c2c',
                                            letterSpacing: '0.5px'
                                        }}>{inv.status.toUpperCase()}</span>
                                    </div>
                                    <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#1a202c', marginBottom: '6px' }}>{inv.desc}</div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px', borderTop: '1px solid #edf2f7', paddingTop: '10px' }}>
                                        <span style={{ fontSize: '0.8rem', color: '#4a5568', fontWeight: 700 }}>Due: {inv.dueDate}</span>
                                        <div style={{ display: 'flex', gap: '12px' }}>
                                            <button style={{ background: 'none', border: 'none', color: 'var(--pivot-blue)', fontSize: '0.8rem', fontWeight: 900, cursor: 'pointer' }}>View</button>
                                            {inv.status === 'Pending' && <button style={{ background: '#F59E0B', color: 'white', border: 'none', padding: '6px 14px', borderRadius: '8px', fontWeight: 900, fontSize: '0.8rem', cursor: 'pointer' }}>Pay Now</button>}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Master Vault */}
                    <div className="card" style={{ border: '1px solid #e2e8f0' }}>
                        <h3 style={{ fontSize: '1.2rem', fontWeight: 900, marginBottom: '1.8rem', display: 'flex', alignItems: 'center', gap: '10px', color: '#000000' }}>
                            <FileText size={26} weight="bold" color="var(--pivot-blue)" /> Project Document Vault
                        </h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            {[
                                { name: 'Final Sale Agreement', size: '2.4 MB' },
                                { name: 'Approved Site Plan', size: '8.1 MB' },
                                { name: 'Technical BOQ Specs', size: '1.2 MB' }
                            ].map((doc, i) => (
                                <div key={i} style={{
                                    padding: '14px', display: 'flex', justifyContent: 'space-between',
                                    alignItems: 'center', background: '#f8fafc', borderRadius: '12px', border: '1.5px solid #edf2f7'
                                }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                        <FileText size={20} color="#4a5568" weight="bold" />
                                        <span style={{ fontSize: '0.9rem', fontWeight: 800, color: '#1a202c' }}>{doc.name}</span>
                                    </div>
                                    <DownloadSimple size={20} weight="bold" color="var(--pivot-blue)" cursor="pointer" />
                                </div>
                            ))}
                        </div>
                        <button style={{ width: '100%', marginTop: '1.8rem', padding: '14px', background: 'var(--pivot-blue-soft)', color: 'var(--pivot-blue)', border: 'none', borderRadius: '15px', fontWeight: 900, fontSize: '0.9rem' }}>
                            Download Full History (.zip)
                        </button>
                    </div>
                </div>
            </div>

            <style>{`
                .card {
                    background: white;
                    border-radius: 20px;
                    padding: 1.5rem;
                    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.05);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    transition: all 0.3s ease;
                }
                .card:hover {
                    box-shadow: 0 12px 40px rgba(0, 71, 171, 0.08);
                }
            `}</style>
        </div>
    );
};

export default ClientDashboard;
