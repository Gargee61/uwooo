import React from 'react';

const CivilEngineerDashboard = () => {
    return (
        <div style={{ padding: '2rem' }}>
            <h1 style={{ color: '#003380', marginBottom: '1.5rem' }}>Civil Engineer Dashboard</h1>
            <div style={{
                background: 'rgba(255, 255, 255, 0.7)',
                backdropFilter: 'blur(10px)',
                padding: '2rem',
                borderRadius: '16px',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
            }}>
                <p style={{ color: '#475569', fontSize: '1.1rem' }}>Welcome back. Here you can manage structural reports, site progress, and technical drawings.</p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
                    <div className="card" style={{ padding: '1.5rem', background: 'white', borderRadius: '12px', border: '1px solid #edf2f7' }}>
                        <h3 style={{ color: '#2d3748', margin: '0 0 0.5rem 0' }}>Recent Tasks</h3>
                        <p style={{ color: '#718096', fontSize: '0.9rem' }}>Check pending structural approvals.</p>
                    </div>
                    <div className="card" style={{ padding: '1.5rem', background: 'white', borderRadius: '12px', border: '1px solid #edf2f7' }}>
                        <h3 style={{ color: '#2d3748', margin: '0 0 0.5rem 0' }}>Site Progress</h3>
                        <p style={{ color: '#718096', fontSize: '0.9rem' }}>View latest updates from site managers.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CivilEngineerDashboard;
