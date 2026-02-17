import React, { useState } from 'react';
import { X, Calendar, CloudRain, Notebook, Users, Package, CheckCircle, Warning, Wrench, Camera, FileText, ClipboardText, TrendUp, CalendarPlus } from '@phosphor-icons/react';

const SiteLogModal = ({ onClose }) => {
    const [formData, setFormData] = useState({
        project: 'Downtown Heights',
        siteLocation: '',
        weather: 'Clear',
        workingDay: 'Yes',
        workDescription: '',
        phase: 'Foundation',
        tasksCompleted: '',
        tasksInProgress: '',
        tasksDelayed: '',
        progressPercent: '',
        totalLabor: '',
        skilledCount: '',
        unskilledCount: '',
        contractorManpower: '',
        engineerPresent: '',
        overtime: '',
        siteIssues: '',
        safetyConcerns: '',
        qualityObservations: '',
        externalIssues: '',
        linkedInstructions: '',
        complianceStatus: 'Compliant',
        complianceRemarks: '',
        delayReason: '',
        nextDayRisk: '',
        requiredSupport: '',
        nextDayPlan: '',
        nextDayMaterial: '',
        nextDayManpower: '',
        nextDayEquipment: ''
    });

    const [materials, setMaterials] = useState([
        { name: '', quantity: '', unit: 'kg', balance: '', remarks: '' }
    ]);

    const [equipment, setEquipment] = useState([
        { name: '', hours: '', breakdown: 'No', downtime: '' }
    ]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const addMaterial = () => {
        setMaterials([...materials, { name: '', quantity: '', unit: 'kg', balance: '', remarks: '' }]);
    };

    const handleMaterialChange = (index, field, value) => {
        const updated = [...materials];
        updated[index][field] = value;
        setMaterials(updated);
    };

    const addEquipment = () => {
        setEquipment([...equipment, { name: '', hours: '', breakdown: 'No', downtime: '' }]);
    };

    const handleEquipmentChange = (index, field, value) => {
        const updated = [...equipment];
        updated[index][field] = value;
        setEquipment(updated);
    };

    const handleSubmit = () => {
        console.log("Site Log Data:", { ...formData, materials, equipment });
        onClose();
    };

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.6)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1100, backdropFilter: 'blur(5px)' }}>
            <div style={{ width: '900px', maxHeight: '90vh', background: 'white', borderRadius: '24px', display: 'flex', flexDirection: 'column', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', overflow: 'hidden' }}>

                <div style={{ padding: '1.5rem 2rem', background: 'white', borderBottom: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                        <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#1e293b', margin: 0 }}>New Site Log Entry</h2>
                        <p style={{ margin: '2px 0 0 0', color: '#64748b', fontSize: '0.8rem' }}>Daily site activity and progress record</p>
                    </div>
                    <button onClick={onClose} style={{ background: '#f1f5f9', border: 'none', borderRadius: '50%', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                        <X size={18} weight="bold" />
                    </button>
                </div>

                <div style={{ padding: '2rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>

                    {/* Section 1 */}
                    <div>
                        <h3 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--pivot-blue)', marginBottom: '1rem' }}>1️⃣ Basic Log Information</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                            <div><label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '8px' }}>Project Name</label><input type="text" name="project" value={formData.project} disabled style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '0.9rem', background: '#f8fafc', color: '#64748b' }} /></div>
                            <div><label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '8px' }}>Site / Block / Floor</label><input type="text" name="siteLocation" value={formData.siteLocation} onChange={handleChange} placeholder="e.g. Block A, Floor 3" style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '0.9rem' }} /></div>
                            <div><label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '8px' }}>Log Date</label><input type="text" value={new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })} disabled style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '0.9rem', background: '#f8fafc', color: '#64748b' }} /></div>
                            <div><label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '8px' }}>Weather Conditions</label><select name="weather" value={formData.weather} onChange={handleChange} style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '0.9rem' }}><option value="Clear">Clear</option><option value="Cloudy">Cloudy</option><option value="Rainy">Rainy</option><option value="Hot">Hot</option></select></div>
                            <div><label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '8px' }}>Working Day</label><div style={{ display: 'flex', gap: '1rem', marginTop: '10px' }}><label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><input type="radio" name="workingDay" value="Yes" checked={formData.workingDay === 'Yes'} onChange={handleChange} /><span style={{ fontSize: '0.9rem', fontWeight: 600 }}>Yes</span></label><label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><input type="radio" name="workingDay" value="No" checked={formData.workingDay === 'No'} onChange={handleChange} /><span style={{ fontSize: '0.9rem', fontWeight: 600 }}>No</span></label></div></div>
                        </div>
                    </div>

                    {/* Section 2 */}
                    <div>
                        <h3 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--pivot-blue)', marginBottom: '1rem' }}>2️⃣ Work Executed Today</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div><label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '8px' }}>Work Description</label><textarea name="workDescription" value={formData.workDescription} onChange={handleChange} placeholder="Describe work activities..." style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0', minHeight: '80px', fontSize: '0.9rem' }}></textarea></div>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                                <div><label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '8px' }}>Phase</label><select name="phase" value={formData.phase} onChange={handleChange} style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '0.9rem' }}><option value="Foundation">Foundation</option><option value="Structure">Structure</option><option value="Finishing">Finishing</option><option value="MEP">MEP</option></select></div>
                                <div><label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '8px' }}>% Progress for the Day</label><input type="number" name="progressPercent" value={formData.progressPercent} onChange={handleChange} placeholder="e.g. 15" style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '0.9rem' }} /></div>
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.5rem' }}>
                                <div><label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '8px' }}>Tasks Completed</label><input type="text" name="tasksCompleted" value={formData.tasksCompleted} onChange={handleChange} placeholder="e.g. Slab casting" style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '0.9rem' }} /></div>
                                <div><label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '8px' }}>Tasks In Progress</label><input type="text" name="tasksInProgress" value={formData.tasksInProgress} onChange={handleChange} placeholder="e.g. Rebar work" style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '0.9rem' }} /></div>
                                <div><label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '8px' }}>Tasks Delayed</label><input type="text" name="tasksDelayed" value={formData.tasksDelayed} onChange={handleChange} placeholder="If any" style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '0.9rem' }} /></div>
                            </div>
                        </div>
                    </div>

                    {/* Section 3 */}
                    <div>
                        <h3 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--pivot-blue)', marginBottom: '1rem' }}>3️⃣ Manpower & Attendance</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.5rem' }}>
                            <div><label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '8px' }}>Total Labor Present</label><input type="number" name="totalLabor" value={formData.totalLabor} onChange={handleChange} placeholder="e.g. 120" style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '0.9rem' }} /></div>
                            <div><label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '8px' }}>Skilled Count</label><input type="number" name="skilledCount" value={formData.skilledCount} onChange={handleChange} placeholder="e.g. 45" style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '0.9rem' }} /></div>
                            <div><label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '8px' }}>Unskilled Count</label><input type="number" name="unskilledCount" value={formData.unskilledCount} onChange={handleChange} placeholder="e.g. 75" style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '0.9rem' }} /></div>
                            <div><label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '8px' }}>Contractor-wise Manpower</label><input type="text" name="contractorManpower" value={formData.contractorManpower} onChange={handleChange} placeholder="e.g. ABC: 50, XYZ: 70" style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '0.9rem' }} /></div>
                            <div><label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '8px' }}>Engineer / Supervisor Present</label><input type="text" name="engineerPresent" value={formData.engineerPresent} onChange={handleChange} placeholder="Names" style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '0.9rem' }} /></div>
                            <div><label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '8px' }}>Overtime (Hours)</label><input type="number" name="overtime" value={formData.overtime} onChange={handleChange} placeholder="If any" style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '0.9rem' }} /></div>
                        </div>
                    </div>

                    {/* Section 4 */}
                    <div>
                        <h3 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--pivot-blue)', marginBottom: '1rem' }}>4️⃣ Material Usage</h3>
                        {materials.map((mat, idx) => (
                            <div key={idx} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 2fr', gap: '1rem', marginBottom: '1rem', padding: '1rem', background: '#f8fafc', borderRadius: '8px' }}>
                                <input type="text" placeholder="Material Name" value={mat.name} onChange={(e) => handleMaterialChange(idx, 'name', e.target.value)} style={{ padding: '8px', borderRadius: '6px', border: '1px solid #e2e8f0', fontSize: '0.85rem' }} />
                                <input type="number" placeholder="Quantity" value={mat.quantity} onChange={(e) => handleMaterialChange(idx, 'quantity', e.target.value)} style={{ padding: '8px', borderRadius: '6px', border: '1px solid #e2e8f0', fontSize: '0.85rem' }} />
                                <select value={mat.unit} onChange={(e) => handleMaterialChange(idx, 'unit', e.target.value)} style={{ padding: '8px', borderRadius: '6px', border: '1px solid #e2e8f0', fontSize: '0.85rem' }}><option value="kg">kg</option><option value="bag">bag</option><option value="cum">cum</option><option value="ton">ton</option></select>
                                <input type="text" placeholder="Balance Stock" value={mat.balance} onChange={(e) => handleMaterialChange(idx, 'balance', e.target.value)} style={{ padding: '8px', borderRadius: '6px', border: '1px solid #e2e8f0', fontSize: '0.85rem' }} />
                                <input type="text" placeholder="Remarks" value={mat.remarks} onChange={(e) => handleMaterialChange(idx, 'remarks', e.target.value)} style={{ padding: '8px', borderRadius: '6px', border: '1px solid #e2e8f0', fontSize: '0.85rem' }} />
                            </div>
                        ))}
                        <button onClick={addMaterial} style={{ padding: '8px 16px', borderRadius: '8px', background: '#f0f4f8', color: 'var(--pivot-blue)', border: '1px solid var(--pivot-blue)', fontWeight: 700, fontSize: '0.85rem', cursor: 'pointer' }}>+ Add Material</button>
                    </div>

                    {/* Section 5 */}
                    <div>
                        <h3 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--pivot-blue)', marginBottom: '1rem' }}>5️⃣ Machinery & Equipment</h3>
                        {equipment.map((eq, idx) => (
                            <div key={idx} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 2fr', gap: '1rem', marginBottom: '1rem', padding: '1rem', background: '#f8fafc', borderRadius: '8px' }}>
                                <input type="text" placeholder="Equipment Used" value={eq.name} onChange={(e) => handleEquipmentChange(idx, 'name', e.target.value)} style={{ padding: '8px', borderRadius: '6px', border: '1px solid #e2e8f0', fontSize: '0.85rem' }} />
                                <input type="number" placeholder="Hours" value={eq.hours} onChange={(e) => handleEquipmentChange(idx, 'hours', e.target.value)} style={{ padding: '8px', borderRadius: '6px', border: '1px solid #e2e8f0', fontSize: '0.85rem' }} />
                                <select value={eq.breakdown} onChange={(e) => handleEquipmentChange(idx, 'breakdown', e.target.value)} style={{ padding: '8px', borderRadius: '6px', border: '1px solid #e2e8f0', fontSize: '0.85rem' }}><option value="No">No Breakdown</option><option value="Yes">Breakdown</option></select>
                                <input type="text" placeholder="Downtime Reason" value={eq.downtime} onChange={(e) => handleEquipmentChange(idx, 'downtime', e.target.value)} disabled={eq.breakdown === 'No'} style={{ padding: '8px', borderRadius: '6px', border: '1px solid #e2e8f0', fontSize: '0.85rem', background: eq.breakdown === 'No' ? '#f1f5f9' : 'white' }} />
                            </div>
                        ))}
                        <button onClick={addEquipment} style={{ padding: '8px 16px', borderRadius: '8px', background: '#f0f4f8', color: 'var(--pivot-blue)', border: '1px solid var(--pivot-blue)', fontWeight: 700, fontSize: '0.85rem', cursor: 'pointer' }}>+ Add Equipment</button>
                    </div>

                    {/* Section 6 */}
                    <div>
                        <h3 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--pivot-blue)', marginBottom: '1rem' }}>6️⃣ Issues & Site Observations</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div><label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '8px' }}>Site Issues</label><textarea name="siteIssues" value={formData.siteIssues} onChange={handleChange} placeholder="Any site-level problems..." style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #e2e8f0', minHeight: '60px', fontSize: '0.9rem' }}></textarea></div>
                            <div><label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '8px' }}>Safety Concerns</label><textarea name="safetyConcerns" value={formData.safetyConcerns} onChange={handleChange} placeholder="Safety hazards or violations..." style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #e2e8f0', minHeight: '60px', fontSize: '0.9rem' }}></textarea></div>
                            <div><label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '8px' }}>Quality Observations</label><textarea name="qualityObservations" value={formData.qualityObservations} onChange={handleChange} placeholder="Quality checks and findings..." style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #e2e8f0', minHeight: '60px', fontSize: '0.9rem' }}></textarea></div>
                            <div><label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '8px' }}>External Issues</label><input type="text" name="externalIssues" value={formData.externalIssues} onChange={handleChange} placeholder="e.g. Weather, power cut, approval delays" style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '0.9rem' }} /></div>
                        </div>
                    </div>

                    {/* Section 7 */}
                    <div>
                        <h3 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--pivot-blue)', marginBottom: '1rem' }}>7️⃣ Photos & Attachments</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.5rem' }}>
                            <div><label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '8px' }}>Site Photos</label><div style={{ border: '2px dashed #cbd5e1', borderRadius: '8px', padding: '1.5rem', textAlign: 'center', background: '#f8fafc', cursor: 'pointer' }}><Camera size={24} color="#94a3b8" style={{ marginBottom: '8px' }} /><div style={{ fontSize: '0.8rem', color: '#64748b' }}>Before / After</div></div></div>
                            <div><label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '8px' }}>Videos (Optional)</label><div style={{ border: '2px dashed #cbd5e1', borderRadius: '8px', padding: '1.5rem', textAlign: 'center', background: '#f8fafc', cursor: 'pointer' }}><Camera size={24} color="#94a3b8" style={{ marginBottom: '8px' }} /><div style={{ fontSize: '0.8rem', color: '#64748b' }}>Upload Video</div></div></div>
                            <div><label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '8px' }}>Documents</label><div style={{ border: '2px dashed #cbd5e1', borderRadius: '8px', padding: '1.5rem', textAlign: 'center', background: '#f8fafc', cursor: 'pointer' }}><FileText size={24} color="#94a3b8" style={{ marginBottom: '8px' }} /><div style={{ fontSize: '0.8rem', color: '#64748b' }}>Challans, Reports</div></div></div>
                        </div>
                    </div>

                    {/* Section 8 */}
                    <div>
                        <h3 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--pivot-blue)', marginBottom: '1rem' }}>8️⃣ Instructions & Compliance</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                            <div><label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '8px' }}>Linked Engineer Instructions</label><input type="text" name="linkedInstructions" value={formData.linkedInstructions} onChange={handleChange} placeholder="Instruction IDs" style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '0.9rem' }} /></div>
                            <div><label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '8px' }}>Compliance Status</label><select name="complianceStatus" value={formData.complianceStatus} onChange={handleChange} style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '0.9rem' }}><option value="Compliant">Compliant</option><option value="Partial">Partial Compliance</option><option value="Non-Compliant">Non-Compliant</option></select></div>
                            <div style={{ gridColumn: 'span 2' }}><label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '8px' }}>Remarks / Clarifications</label><textarea name="complianceRemarks" value={formData.complianceRemarks} onChange={handleChange} placeholder="Any clarifications needed..." style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #e2e8f0', minHeight: '60px', fontSize: '0.9rem' }}></textarea></div>
                        </div>
                    </div>

                    {/* Section 9 */}
                    <div>
                        <h3 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--pivot-blue)', marginBottom: '1rem' }}>9️⃣ Delays & Risk Notes</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div><label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '8px' }}>Reason for Delay (if any)</label><textarea name="delayReason" value={formData.delayReason} onChange={handleChange} placeholder="Explain delays..." style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #e2e8f0', minHeight: '60px', fontSize: '0.9rem' }}></textarea></div>
                            <div><label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '8px' }}>Risk for Next Day</label><textarea name="nextDayRisk" value={formData.nextDayRisk} onChange={handleChange} placeholder="Potential risks..." style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #e2e8f0', minHeight: '60px', fontSize: '0.9rem' }}></textarea></div>
                            <div><label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '8px' }}>Required Support / Decisions</label><textarea name="requiredSupport" value={formData.requiredSupport} onChange={handleChange} placeholder="What support is needed..." style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #e2e8f0', minHeight: '60px', fontSize: '0.9rem' }}></textarea></div>
                        </div>
                    </div>

                    {/* Section 10 */}
                    <div>
                        <h3 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--pivot-blue)', marginBottom: '1rem' }}>🔟 Next Day Plan</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div><label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '8px' }}>Planned Work for Tomorrow</label><textarea name="nextDayPlan" value={formData.nextDayPlan} onChange={handleChange} placeholder="Tomorrow's work plan..." style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #e2e8f0', minHeight: '80px', fontSize: '0.9rem' }}></textarea></div>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.5rem' }}>
                                <div><label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '8px' }}>Material Requirement</label><input type="text" name="nextDayMaterial" value={formData.nextDayMaterial} onChange={handleChange} placeholder="Materials needed" style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '0.9rem' }} /></div>
                                <div><label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '8px' }}>Manpower Requirement</label><input type="text" name="nextDayManpower" value={formData.nextDayManpower} onChange={handleChange} placeholder="Labor needed" style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '0.9rem' }} /></div>
                                <div><label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '8px' }}>Equipment Requirement</label><input type="text" name="nextDayEquipment" value={formData.nextDayEquipment} onChange={handleChange} placeholder="Equipment needed" style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '0.9rem' }} /></div>
                            </div>
                        </div>
                    </div>

                </div>

                <div style={{ padding: '1.5rem 2rem', background: '#f8fafc', borderTop: '1px solid #e2e8f0', display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
                    <button onClick={onClose} style={{ padding: '10px 20px', borderRadius: '10px', background: 'white', border: '1px solid #cbd5e1', color: '#475569', fontWeight: 700, cursor: 'pointer' }}>Cancel</button>
                    <button onClick={handleSubmit} style={{ padding: '10px 20px', borderRadius: '10px', background: 'var(--pivot-blue)', color: 'white', border: 'none', fontWeight: 700, cursor: 'pointer' }}>Save Site Log</button>
                </div>

            </div>
        </div>
    );
};

export default SiteLogModal;
