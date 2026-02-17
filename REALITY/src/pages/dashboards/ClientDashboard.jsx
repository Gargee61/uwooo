import React from 'react';

const ClientDashboard = () => {
    return (
        <div style={{ padding: '2rem' }}>
            <h1 style={{ color: '#003380', marginBottom: '1.5rem' }}>Client Portal</h1>
            <div style={{
                background: 'rgba(255, 255, 255, 0.7)',
                backdropFilter: 'blur(10px)',
                padding: '2rem',
                borderRadius: '16px',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
            }}>
                <p style={{ color: '#475569', fontSize: '1.1rem' }}>Welcome to your personal property portal. Track the progress of your dream home here.</p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
                    <div className="card" style={{ padding: '1.5rem', background: 'white', borderRadius: '12px', border: '1px solid #edf2f7' }}>
                        <h3 style={{ color: '#2d3748', margin: '0 0 1rem 0' }}>Project Progress</h3>
                        <div style={{ height: '8px', background: '#edf2f7', borderRadius: '4px', overflow: 'hidden' }}>
                            <div style={{ height: '100%', width: '65%', background: 'linear-gradient(90deg, #4f46e5, #06b6d4)', borderRadius: '4px' }}></div>
                        </div>
                        <p style={{ color: '#718096', fontSize: '0.85rem', marginTop: '0.5rem' }}>65% Complete</p>
                    </div>

                    <div className="card" style={{ padding: '1.5rem', background: 'white', borderRadius: '12px', border: '1px solid #edf2f7' }}>
                        <h3 style={{ color: '#2d3748', margin: '0 0 0.5rem 0' }}>Latest Photo</h3>
                        <div style={{ height: '150px', background: '#f8fafc', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px dashed #cbd5e1' }}>
                            <span style={{ color: '#94a3b8' }}>View Site Image</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientDashboard;
