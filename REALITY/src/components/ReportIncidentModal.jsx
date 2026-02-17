import React, { useState } from 'react';
import { X, ShieldWarning, FirstAid, Wrench, Camera, FileText, Bell, CheckCircle, ClockCounterClockwise, Gavel } from '@phosphor-icons/react';

const ReportIncidentModal = ({ onClose }) => {
    const [formData, setFormData] = useState({
        incidentTitle: '',
        incidentType: 'Safety Incident',
        severityLevel: 'Medium',
        project: 'Downtown Heights',
        siteLocation: '',
        detailedDescription: '',
        howOccurred: '',
        immediateImpact: '',
        personsInvolved: '',
        injuryType: 'None',
        personInjured: '',
        medicalAction: '',
        equipmentDamaged: '',
        rootCause: '',
        unsafeCondition: '',
        environmentalFactor: '',
        procedureViolation: 'No',
        workStopped: 'No',
        areaSecured: 'No',
        temporaryAction: '',
        safetyMeasures: '',
        notifyEngineer: false,
        notifyBuilder: false,
        notifyQC: false,
        correctiveAction: '',
        responsiblePerson: '',
        targetDate: '',
        preventiveRecommendation: '',
        incidentStatus: 'Open',
        reportedToAuthority: 'No',
        complianceReference: '',
        includedInSafetyReports: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    };

    const handleSubmit = () => {
        console.log("Incident Report Data:", formData);
        onClose();
    };

    const getSeverityColor = (level) => {
        switch (level) {
            case 'Low': return '#10b981';
            case 'Medium': return '#f59e0b';
            case 'High': return '#f97316';
            case 'Critical': return '#dc2626';
            default: return '#64748b';
        }
    };

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.6)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1100, backdropFilter: 'blur(5px)' }}>
            <div style={{ width: '900px', maxHeight: '90vh', background: 'white', borderRadius: '24px', display: 'flex', flexDirection: 'column', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', overflow: 'hidden' }}>

                {/* Header */}
                <div style={{ padding: '1.5rem 2rem', background: 'linear-gradient(135deg, #dc2626 0%, #991b1b 100%)', borderBottom: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{ width: '48px', height: '48px', background: 'rgba(255,255,255,0.2)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <ShieldWarning size={28} weight="fill" color="white" />
                        </div>
                        <div>
                            <h2 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'white', margin: 0 }}>Report Incident</h2>
                            <p style={{ margin: '2px 0 0 0', color: 'rgba(255,255,255,0.9)', fontSize: '0.8rem' }}>Document safety, quality, or operational incidents</p>
                        </div>
                    </div>
                    <button onClick={onClose} style={{ background: 'rgba(255,255,255,0.2)', border: 'none', borderRadius: '50%', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                        <X size={18} weight="bold" color="white" />
                    </button>
                </div>

                {/* Content */}
                <div style={{ padding: '2rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>

                    {/* Section 1 */}
                    <div>
                        <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#dc2626', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <span style={{ background: '#dc2626', color: 'white', width: '24px', height: '24px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 800 }}>1</span>
                            Incident Basic Details
                        </h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div><label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '8px' }}>Incident Title <span style={{ color: '#dc2626' }}>*</span></label><input type="text" name="incidentTitle" value={formData.incidentTitle} onChange={handleChange} placeholder="Brief title of the incident" style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '0.9rem' }} /></div>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                                <div><label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '8px' }}>Incident Type <span style={{ color: '#dc2626' }}>*</span></label><select name="incidentType" value={formData.incidentType} onChange={handleChange} style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '0.9rem', fontWeight: 600 }}><option value="Safety Incident">⚠️ Safety Incident</option><option value="Accident / Injury">🚑 Accident / Injury</option><option value="Quality Issue">🔍 Quality Issue</option><option value="Equipment Failure">🔧 Equipment Failure</option><option value="Environmental Issue">🌍 Environmental Issue</option></select></div>
                                <div><label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '8px' }}>Severity Level <span style={{ color: '#dc2626' }}>*</span></label><select name="severityLevel" value={formData.severityLevel} onChange={handleChange} style={{ width: '100%', padding: '10px', borderRadius: '8px', border: `2px solid ${getSeverityColor(formData.severityLevel)}`, fontSize: '0.9rem', fontWeight: 700, color: getSeverityColor(formData.severityLevel) }}><option value="Low">Low</option><option value="Medium">Medium</option><option value="High">High</option><option value="Critical">Critical</option></select></div>
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                                <div><label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '8px' }}>Incident Date & Time</label><input type="text" value={new Date().toLocaleString('en-US', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })} disabled style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '0.9rem', background: '#f8fafc', color: '#64748b', fontWeight: 600 }} /></div>
                                <div><label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '8px' }}>Project</label><input type="text" name="project" value={formData.project} disabled style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '0.9rem', background: '#f8fafc', color: '#64748b', fontWeight: 600 }} /></div>
                            </div>
                            <div><label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '8px' }}>Site / Location <span style={{ color: '#dc2626' }}>*</span></label><input type="text" name="siteLocation" value={formData.siteLocation} onChange={handleChange} placeholder="e.g. Block A, Floor 3, Basement" style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '0.9rem' }} /></div>
                        </div>
                    </div>

                    {/* Section 2 */}
                    <div>
                        <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#dc2626', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <span style={{ background: '#dc2626', color: 'white', width: '24px', height: '24px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 800 }}>2</span>
                            Incident Description
                        </h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div><label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '8px' }}>Detailed Description <span style={{ color: '#dc2626' }}>*</span></label><textarea name="detailedDescription" value={formData.detailedDescription} onChange={handleChange} placeholder="What exactly happened? Provide complete details..." style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0', minHeight: '100px', fontSize: '0.9rem' }}></textarea></div>
                            <div><label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '8px' }}>How Incident Occurred</label><textarea name="howOccurred" value={formData.howOccurred} onChange={handleChange} placeholder="Sequence of events, root cause..." style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0', minHeight: '80px', fontSize: '0.9rem' }}></textarea></div>
                            <div><label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '8px' }}>Immediate Impact</label><textarea name="immediateImpact" value={formData.immediateImpact} onChange={handleChange} placeholder="Impact on work, safety, timeline..." style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0', minHeight: '70px', fontSize: '0.9rem' }}></textarea></div>
                            <div><label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '8px' }}>Persons Involved (if any)</label><input type="text" name="personsInvolved" value={formData.personsInvolved} onChange={handleChange} placeholder="Names, roles of people involved" style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '0.9rem' }} /></div>
                        </div>
                    </div>

                    {/* Section 3 */}
                    <div style={{ background: '#fff5f5', padding: '1.5rem', borderRadius: '12px', border: '1px solid #fee2e2' }}>
                        <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#dc2626', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <span style={{ background: '#dc2626', color: 'white', width: '24px', height: '24px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 800 }}>3</span>
                            Injury / Damage Details <span style={{ fontSize: '0.7rem', fontWeight: 600, color: '#64748b', marginLeft: 'auto' }}>(If Applicable)</span>
                        </h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                                <div><label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '8px' }}>Injury Type</label><select name="injuryType" value={formData.injuryType} onChange={handleChange} style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '0.9rem', background: 'white' }}><option value="None">No Injury</option><option value="Minor">Minor Injury</option><option value="Major">Major Injury</option><option value="Fatal">Fatal</option></select></div>
                                <div><label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '8px' }}>Person Injured (Name / Role)</label><input type="text" name="personInjured" value={formData.personInjured} onChange={handleChange} placeholder="Name and role" disabled={formData.injuryType === 'None'} style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '0.9rem', background: formData.injuryType === 'None' ? '#f1f5f9' : 'white' }} /></div>
                            </div>
                            <div><label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '8px' }}>First Aid / Medical Action Taken</label><textarea name="medicalAction" value={formData.medicalAction} onChange={handleChange} placeholder="Immediate medical response, hospital visit, etc." disabled={formData.injuryType === 'None'} style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0', minHeight: '70px', fontSize: '0.9rem', background: formData.injuryType === 'None' ? '#f1f5f9' : 'white' }}></textarea></div>
                            <div><label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '8px' }}>Equipment or Material Damaged</label><textarea name="equipmentDamaged" value={formData.equipmentDamaged} onChange={handleChange} placeholder="List damaged equipment, materials, or property..." style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0', minHeight: '70px', fontSize: '0.9rem', background: 'white' }}></textarea></div>
                        </div>
                    </div>

                    {/* Section 4 */}
                    <div>
                        <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#dc2626', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <span style={{ background: '#dc2626', color: 'white', width: '24px', height: '24px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 800 }}>4</span>
                            Root Cause & Observations
                        </h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div><label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '8px' }}>Suspected Root Cause</label><textarea name="rootCause" value={formData.rootCause} onChange={handleChange} placeholder="Primary cause of the incident..." style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0', minHeight: '80px', fontSize: '0.9rem' }}></textarea></div>
                            <div><label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '8px' }}>Unsafe Act / Unsafe Condition</label><input type="text" name="unsafeCondition" value={formData.unsafeCondition} onChange={handleChange} placeholder="Describe unsafe acts or conditions" style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '0.9rem' }} /></div>
                            <div><label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '8px' }}>Environmental Factor</label><input type="text" name="environmentalFactor" value={formData.environmentalFactor} onChange={handleChange} placeholder="e.g. Weather, lighting, noise" style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '0.9rem' }} /></div>
                            <div><label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '8px' }}>Violation of Procedure</label><div style={{ display: 'flex', gap: '1.5rem', marginTop: '10px' }}><label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><input type="radio" name="procedureViolation" value="Yes" checked={formData.procedureViolation === 'Yes'} onChange={handleChange} /><span style={{ fontSize: '0.9rem', fontWeight: 600 }}>Yes</span></label><label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><input type="radio" name="procedureViolation" value="No" checked={formData.procedureViolation === 'No'} onChange={handleChange} /><span style={{ fontSize: '0.9rem', fontWeight: 600 }}>No</span></label></div></div>
                        </div>
                    </div>

                    {/* Section 5 */}
                    <div>
                        <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#dc2626', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <span style={{ background: '#dc2626', color: 'white', width: '24px', height: '24px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 800 }}>5</span>
                            Immediate Action Taken
                        </h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                                <div><label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '8px' }}>Work Stopped?</label><div style={{ display: 'flex', gap: '1.5rem', marginTop: '10px' }}><label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><input type="radio" name="workStopped" value="Yes" checked={formData.workStopped === 'Yes'} onChange={handleChange} /><span style={{ fontSize: '0.9rem', fontWeight: 600 }}>Yes</span></label><label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><input type="radio" name="workStopped" value="No" checked={formData.workStopped === 'No'} onChange={handleChange} /><span style={{ fontSize: '0.9rem', fontWeight: 600 }}>No</span></label></div></div>
                                <div><label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '8px' }}>Area Secured?</label><div style={{ display: 'flex', gap: '1.5rem', marginTop: '10px' }}><label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><input type="radio" name="areaSecured" value="Yes" checked={formData.areaSecured === 'Yes'} onChange={handleChange} /><span style={{ fontSize: '0.9rem', fontWeight: 600 }}>Yes</span></label><label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><input type="radio" name="areaSecured" value="No" checked={formData.areaSecured === 'No'} onChange={handleChange} /><span style={{ fontSize: '0.9rem', fontWeight: 600 }}>No</span></label></div></div>
                            </div>
                            <div><label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '8px' }}>Temporary Corrective Action</label><textarea name="temporaryAction" value={formData.temporaryAction} onChange={handleChange} placeholder="Immediate actions taken to control the situation..." style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0', minHeight: '70px', fontSize: '0.9rem' }}></textarea></div>
                            <div><label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '8px' }}>Safety Measures Applied</label><textarea name="safetyMeasures" value={formData.safetyMeasures} onChange={handleChange} placeholder="Safety protocols implemented..." style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0', minHeight: '70px', fontSize: '0.9rem' }}></textarea></div>
                        </div>
                    </div>

                    {/* Section 6 */}
                    <div>
                        <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#dc2626', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <span style={{ background: '#dc2626', color: 'white', width: '24px', height: '24px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 800 }}>6</span>
                            Attachments & Evidence
                        </h3>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.5rem' }}>
                            <div><label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '8px' }}>Site Photos</label><div style={{ border: '2px dashed #cbd5e1', borderRadius: '8px', padding: '1.5rem', textAlign: 'center', background: '#f8fafc', cursor: 'pointer' }}><Camera size={24} color="#94a3b8" style={{ marginBottom: '8px' }} /><div style={{ fontSize: '0.8rem', color: '#64748b' }}>Upload Photos</div></div></div>
                            <div><label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '8px' }}>Videos</label><div style={{ border: '2px dashed #cbd5e1', borderRadius: '8px', padding: '1.5rem', textAlign: 'center', background: '#f8fafc', cursor: 'pointer' }}><Camera size={24} color="#94a3b8" style={{ marginBottom: '8px' }} /><div style={{ fontSize: '0.8rem', color: '#64748b' }}>Upload Videos</div></div></div>
                            <div><label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '8px' }}>Documents</label><div style={{ border: '2px dashed #cbd5e1', borderRadius: '8px', padding: '1.5rem', textAlign: 'center', background: '#f8fafc', cursor: 'pointer' }}><FileText size={24} color="#94a3b8" style={{ marginBottom: '8px' }} /><div style={{ fontSize: '0.8rem', color: '#64748b' }}>Witness, Medical</div></div></div>
                        </div>
                    </div>

                    {/* Section 7 */}
                    <div style={{ background: '#eff6ff', padding: '1.5rem', borderRadius: '12px', border: '1px solid #dbeafe' }}>
                        <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#dc2626', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <span style={{ background: '#dc2626', color: 'white', width: '24px', height: '24px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 800 }}>7</span>
                            Notification & Escalation
                        </h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <label style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px', background: 'white', borderRadius: '8px', cursor: 'pointer' }}><input type="checkbox" name="notifyEngineer" checked={formData.notifyEngineer} onChange={handleChange} style={{ width: '18px', height: '18px' }} /><Bell size={18} color="var(--pivot-blue)" /><span style={{ fontSize: '0.9rem', fontWeight: 600 }}>Notify Engineer</span></label>
                            <label style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px', background: 'white', borderRadius: '8px', cursor: 'pointer' }}><input type="checkbox" name="notifyBuilder" checked={formData.notifyBuilder} onChange={handleChange} style={{ width: '18px', height: '18px' }} /><Bell size={18} color="var(--pivot-blue)" /><span style={{ fontSize: '0.9rem', fontWeight: 600 }}>Notify Builder</span></label>
                            <label style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px', background: 'white', borderRadius: '8px', cursor: 'pointer' }}><input type="checkbox" name="notifyQC" checked={formData.notifyQC} onChange={handleChange} style={{ width: '18px', height: '18px' }} /><Bell size={18} color="var(--pivot-blue)" /><span style={{ fontSize: '0.9rem', fontWeight: 600 }}>Notify QC / Safety Officer</span></label>
                            {(formData.severityLevel === 'High' || formData.severityLevel === 'Critical') && (
                                <div style={{ padding: '10px', background: '#fee2e2', borderRadius: '8px', borderLeft: '4px solid #dc2626' }}><div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#991b1b' }}>⚡ Auto-Escalation Active</div><div style={{ fontSize: '0.75rem', color: '#7f1d1d', marginTop: '4px' }}>High/Critical incidents trigger automatic notification to project management</div></div>
                            )}
                        </div>
                    </div>

                    {/* Section 8 */}
                    <div>
                        <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#dc2626', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <span style={{ background: '#dc2626', color: 'white', width: '24px', height: '24px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 800 }}>8</span>
                            Corrective & Preventive Actions (CAPA)
                        </h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div><label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '8px' }}>Corrective Action Required</label><textarea name="correctiveAction" value={formData.correctiveAction} onChange={handleChange} placeholder="Actions to fix the immediate problem..." style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0', minHeight: '80px', fontSize: '0.9rem' }}></textarea></div>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                                <div><label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '8px' }}>Responsible Person</label><input type="text" name="responsiblePerson" value={formData.responsiblePerson} onChange={handleChange} placeholder="Name and role" style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '0.9rem' }} /></div>
                                <div><label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '8px' }}>Target Completion Date</label><input type="date" name="targetDate" value={formData.targetDate} onChange={handleChange} style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '0.9rem' }} /></div>
                            </div>
                            <div><label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '8px' }}>Preventive Recommendation</label><textarea name="preventiveRecommendation" value={formData.preventiveRecommendation} onChange={handleChange} placeholder="Long-term measures to prevent recurrence..." style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0', minHeight: '80px', fontSize: '0.9rem' }}></textarea></div>
                        </div>
                    </div>

                    {/* Section 9 */}
                    <div>
                        <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#dc2626', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <span style={{ background: '#dc2626', color: 'white', width: '24px', height: '24px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 800 }}>9</span>
                            Status Tracking
                        </h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '8px' }}>Incident Status</label>
                                <select name="incidentStatus" value={formData.incidentStatus} onChange={handleChange} style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '0.9rem', fontWeight: 600 }}>
                                    <option value="Open">🔴 Open</option>
                                    <option value="Under Investigation">🔍 Under Investigation</option>
                                    <option value="Action in Progress">⚙️ Action in Progress</option>
                                    <option value="Closed">✅ Closed</option>
                                </select>
                            </div>

                            <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1rem' }}>
                                    <ClockCounterClockwise size={20} color="var(--pivot-blue)" weight="bold" />
                                    <h4 style={{ fontSize: '0.9rem', fontWeight: 800, color: '#1e293b', margin: 0 }}>Status Change Log</h4>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', background: 'white', borderRadius: '8px', borderLeft: '3px solid #10b981' }}>
                                        <div>
                                            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#1e293b' }}>Incident Created</div>
                                            <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '2px' }}>By: Site Manager (Auto-captured)</div>
                                        </div>
                                        <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600 }}>{new Date().toLocaleString('en-US', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })}</div>
                                    </div>
                                    <div style={{ padding: '10px', background: 'white', borderRadius: '8px', border: '1px dashed #cbd5e1', textAlign: 'center' }}>
                                        <div style={{ fontSize: '0.8rem', color: '#94a3b8', fontStyle: 'italic' }}>Status changes will be logged here automatically</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Section 10 */}
                    <div style={{ background: '#f0fdf4', padding: '1.5rem', borderRadius: '12px', border: '1px solid #bbf7d0' }}>
                        <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#dc2626', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <span style={{ background: '#dc2626', color: 'white', width: '24px', height: '24px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 800 }}>10</span>
                            Compliance & Reporting
                        </h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '8px' }}>Reported to Authority?</label>
                                <div style={{ display: 'flex', gap: '1.5rem', marginTop: '10px' }}>
                                    <label style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 16px', background: 'white', borderRadius: '8px', cursor: 'pointer', border: formData.reportedToAuthority === 'Yes' ? '2px solid var(--pivot-blue)' : '1px solid #e2e8f0' }}>
                                        <input type="radio" name="reportedToAuthority" value="Yes" checked={formData.reportedToAuthority === 'Yes'} onChange={handleChange} />
                                        <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>Yes</span>
                                    </label>
                                    <label style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 16px', background: 'white', borderRadius: '8px', cursor: 'pointer', border: formData.reportedToAuthority === 'No' ? '2px solid var(--pivot-blue)' : '1px solid #e2e8f0' }}>
                                        <input type="radio" name="reportedToAuthority" value="No" checked={formData.reportedToAuthority === 'No'} onChange={handleChange} />
                                        <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>No</span>
                                    </label>
                                </div>
                            </div>

                            <div>
                                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '8px' }}>Compliance Reference</label>
                                <input type="text" name="complianceReference" value={formData.complianceReference} onChange={handleChange} placeholder="e.g. OSHA 1910.134, Local Safety Code #45" style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '0.9rem', background: 'white' }} />
                            </div>

                            <label style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px', background: 'white', borderRadius: '8px', cursor: 'pointer', border: '1px solid #e2e8f0' }}>
                                <input type="checkbox" name="includedInSafetyReports" checked={formData.includedInSafetyReports} onChange={handleChange} style={{ width: '18px', height: '18px' }} />
                                <Gavel size={18} color="#16a34a" weight="bold" />
                                <div>
                                    <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#1e293b' }}>Include in Safety Reports</div>
                                    <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '2px' }}>Add this incident to monthly safety compliance reports</div>
                                </div>
                            </label>

                            <div style={{ padding: '12px', background: '#dcfce7', borderRadius: '8px', borderLeft: '4px solid #16a34a' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <CheckCircle size={18} color="#16a34a" weight="fill" />
                                    <div>
                                        <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#166534' }}>Compliance Tracking Active</div>
                                        <div style={{ fontSize: '0.75rem', color: '#15803d', marginTop: '4px' }}>This incident will be tracked for regulatory compliance and audit purposes</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Alert Box */}
                    <div style={{ padding: '1rem', background: '#fef3c7', borderLeft: '4px solid #f59e0b', borderRadius: '8px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <ShieldWarning size={20} color="#f59e0b" weight="fill" />
                            <div>
                                <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#92400e' }}>Important Notice</div>
                                <div style={{ fontSize: '0.8rem', color: '#78350f', marginTop: '4px' }}>All incident reports are logged and reviewed by the safety team. Critical incidents trigger immediate escalation to project management.</div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Footer */}
                <div style={{ padding: '1.5rem 2rem', background: '#f8fafc', borderTop: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ fontSize: '0.75rem', color: '#64748b' }}><span style={{ fontWeight: 700 }}>*</span> Required fields</div>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <button onClick={onClose} style={{ padding: '10px 20px', borderRadius: '10px', background: 'white', border: '1px solid #cbd5e1', color: '#475569', fontWeight: 700, cursor: 'pointer' }}>Cancel</button>
                        <button onClick={handleSubmit} style={{ padding: '10px 24px', borderRadius: '10px', background: '#dc2626', color: 'white', border: 'none', fontWeight: 700, cursor: 'pointer', boxShadow: '0 4px 12px rgba(220, 38, 38, 0.3)' }}>Submit Incident Report</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ReportIncidentModal;
