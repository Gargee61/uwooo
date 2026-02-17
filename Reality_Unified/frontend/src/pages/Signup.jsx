import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Eye, EyeSlash, CheckCircle, XCircle, Buildings,
    User, Envelope, Phone, Lock, ShieldCheck, ArrowRight,
    EnvelopeSimple
} from '@phosphor-icons/react';

const Signup = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState('signup'); // 'signup', 'verification'
    const [formData, setFormData] = useState({
        accountType: 'Builder / Construction Company',
        companyName: '',
        businessType: 'Builder',
        city: '',
        state: '',
        country: '',
        companyEmail: '',
        companyPhone: '',
        fullName: '',
        workEmail: '',
        mobileNumber: '',
        password: '',
        confirmPassword: '',
        agreeTerms: false,
        agreePrivacy: false
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [passwordStrength, setPasswordStrength] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [otp, setOtp] = useState('');
    const [verificationStatus, setVerificationStatus] = useState('pending'); // 'pending', 'verifying', 'success', 'failed'

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));

        if (name === 'password') {
            calculatePasswordStrength(value);
        }
    };

    const calculatePasswordStrength = (password) => {
        let strength = 0;
        if (password.length >= 8) strength++;
        if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++;
        if (/\d/.test(password)) strength++;
        if (/[^a-zA-Z\d]/.test(password)) strength++;
        setPasswordStrength(strength);
    };

    const getStrengthColor = () => {
        switch (passwordStrength) {
            case 0: case 1: return '#dc2626';
            case 2: return '#f59e0b';
            case 3: return '#3b82f6';
            case 4: return '#10b981';
            default: return '#e5e7eb';
        }
    };

    const getStrengthText = () => {
        switch (passwordStrength) {
            case 0: case 1: return 'Weak';
            case 2: return 'Fair';
            case 3: return 'Good';
            case 4: return 'Strong';
            default: return '';
        }
    };

    const isFormValid = () => {
        return formData.companyName &&
            formData.fullName &&
            formData.workEmail &&
            formData.password &&
            formData.password === formData.confirmPassword &&
            formData.agreeTerms &&
            formData.agreePrivacy &&
            passwordStrength >= 2;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!isFormValid()) return;

        setIsLoading(true);
        // Simulate API call to send OTP
        setTimeout(() => {
            setIsLoading(false);
            setStep('verification');
        }, 1500);
    };

    const handleVerify = (e) => {
        e.preventDefault();
        if (otp.length < 4) return;

        setVerificationStatus('verifying');
        setTimeout(() => {
            if (otp === '1234') { // Mock OTP check
                setVerificationStatus('success');
                setTimeout(() => {
                    console.log('Signup Complete:', formData);
                    navigate('/login');
                }, 1500);
            } else {
                setVerificationStatus('failed');
            }
        }, 1500);
    };

    return (
        <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
            <div style={{ width: '100%', maxWidth: '700px', background: 'white', borderRadius: '24px', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', overflow: 'hidden', position: 'relative' }}>

                {/* Header */}
                <div style={{ padding: '2.5rem 2.5rem 2rem', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', textAlign: 'center' }}>
                    <div style={{ width: '64px', height: '64px', background: 'white', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}>
                        <Buildings size={36} color="#667eea" weight="bold" />
                    </div>
                    <h1 style={{ fontSize: '2rem', fontWeight: 800, color: 'white', margin: '0 0 0.5rem 0' }}>{step === 'signup' ? 'Create Your Account' : 'Verify Email'}</h1>
                    <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.9)', margin: 0 }}>{step === 'signup' ? 'Builder automation starts here' : `We sent a code to ${formData.workEmail}`}</p>
                </div>

                {step === 'signup' ? (
                    /* Form Content */
                    <form onSubmit={handleSubmit} style={{ padding: '2.5rem' }}>

                        {/* Section 1: Account Type */}
                        <div style={{ marginBottom: '2rem' }}>
                            <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 700, color: '#1e293b', marginBottom: '1rem' }}>Account Type</label>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <label style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '1rem', background: formData.accountType === 'Builder / Construction Company' ? '#f0f4ff' : '#f8fafc', border: formData.accountType === 'Builder / Construction Company' ? '2px solid #667eea' : '1px solid #e2e8f0', borderRadius: '12px', cursor: 'pointer', transition: 'all 0.2s' }}>
                                    <input type="radio" name="accountType" value="Builder / Construction Company" checked={formData.accountType === 'Builder / Construction Company'} onChange={handleChange} style={{ width: '20px', height: '20px' }} />
                                    <Buildings size={24} color="#667eea" weight="bold" />
                                    <span style={{ fontSize: '0.95rem', fontWeight: 600, color: '#1e293b' }}>Builder / Construction Company</span>
                                </label>
                                <label style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '1rem', background: formData.accountType === 'Individual Builder' ? '#f0f4ff' : '#f8fafc', border: formData.accountType === 'Individual Builder' ? '2px solid #667eea' : '1px solid #e2e8f0', borderRadius: '12px', cursor: 'pointer', transition: 'all 0.2s' }}>
                                    <input type="radio" name="accountType" value="Individual Builder" checked={formData.accountType === 'Individual Builder'} onChange={handleChange} style={{ width: '20px', height: '20px' }} />
                                    <User size={24} color="#667eea" weight="bold" />
                                    <span style={{ fontSize: '0.95rem', fontWeight: 600, color: '#1e293b' }}>Individual Builder</span>
                                </label>
                                <label style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '1rem', background: formData.accountType === 'Enterprise (Contact Sales)' ? '#f0f4ff' : '#f8fafc', border: formData.accountType === 'Enterprise (Contact Sales)' ? '2px solid #667eea' : '1px solid #e2e8f0', borderRadius: '12px', cursor: 'pointer', transition: 'all 0.2s' }}>
                                    <input type="radio" name="accountType" value="Enterprise (Contact Sales)" checked={formData.accountType === 'Enterprise (Contact Sales)'} onChange={handleChange} style={{ width: '20px', height: '20px' }} />
                                    <ShieldCheck size={24} color="#667eea" weight="bold" />
                                    <span style={{ fontSize: '0.95rem', fontWeight: 600, color: '#1e293b' }}>Enterprise (Contact Sales)</span>
                                </label>
                            </div>
                        </div>

                        {/* Section 2: Organization Details */}
                        {(formData.accountType === 'Builder / Construction Company' || formData.accountType === 'Enterprise (Contact Sales)') && (
                            <div style={{ marginBottom: '2rem', padding: '1.5rem', background: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                                <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#1e293b', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <Buildings size={20} color="#667eea" weight="bold" />
                                    Organization Details
                                </h3>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                    <div>
                                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '8px' }}>Company Name <span style={{ color: '#dc2626' }}>*</span></label>
                                        <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} placeholder="Enter company name" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '0.95rem' }} />
                                    </div>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                                        <div>
                                            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '8px' }}>Business Type</label>
                                            <select name="businessType" value={formData.businessType} onChange={handleChange} style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '0.95rem' }}>
                                                <option value="Builder">Builder</option>
                                                <option value="Contractor">Contractor</option>
                                                <option value="Developer">Developer</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '8px' }}>City</label>
                                            <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="City" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '0.95rem' }} />
                                        </div>
                                    </div>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                                        <div>
                                            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '8px' }}>State</label>
                                            <input type="text" name="state" value={formData.state} onChange={handleChange} placeholder="State" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '0.95rem' }} />
                                        </div>
                                        <div>
                                            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '8px' }}>Country</label>
                                            <input type="text" name="country" value={formData.country} onChange={handleChange} placeholder="Country" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '0.95rem' }} />
                                        </div>
                                    </div>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                                        <div>
                                            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '8px' }}>Company Email</label>
                                            <input type="email" name="companyEmail" value={formData.companyEmail} onChange={handleChange} placeholder="company@example.com" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '0.95rem' }} />
                                        </div>
                                        <div>
                                            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '8px' }}>Company Phone</label>
                                            <input type="tel" name="companyPhone" value={formData.companyPhone} onChange={handleChange} placeholder="+1 (555) 000-0000" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '0.95rem' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Section 3: Primary User Details */}
                        <div style={{ marginBottom: '2rem' }}>
                            <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#1e293b', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <User size={20} color="#667eea" weight="bold" />
                                Primary User Details
                            </h3>
                            <div style={{ padding: '1rem', background: '#eff6ff', borderRadius: '8px', marginBottom: '1.5rem', borderLeft: '4px solid #3b82f6' }}>
                                <p style={{ fontSize: '0.85rem', color: '#1e40af', margin: 0, fontWeight: 600 }}>ℹ️ This user will have full admin access.</p>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '8px' }}>Full Name <span style={{ color: '#dc2626' }}>*</span></label>
                                    <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="John Doe" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '0.95rem' }} />
                                </div>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                                    <div>
                                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '8px' }}>Work Email <span style={{ color: '#dc2626' }}>*</span></label>
                                        <input type="email" name="workEmail" value={formData.workEmail} onChange={handleChange} placeholder="john@company.com" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '0.95rem' }} />
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '8px' }}>Mobile Number</label>
                                        <input type="tel" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} placeholder="+1 (555) 000-0000" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '0.95rem' }} />
                                    </div>
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '8px' }}>Role</label>
                                    <input type="text" value="Admin / Builder" disabled style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '0.95rem', background: '#f8fafc', color: '#64748b', fontWeight: 600 }} />
                                </div>
                            </div>
                        </div>

                        {/* Section 4: Login Credentials */}
                        <div style={{ marginBottom: '2rem' }}>
                            <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#1e293b', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <Lock size={20} color="#667eea" weight="bold" />
                                Login Credentials
                            </h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '8px' }}>Password <span style={{ color: '#dc2626' }}>*</span></label>
                                    <div style={{ position: 'relative' }}>
                                        <input type={showPassword ? 'text' : 'password'} name="password" value={formData.password} onChange={handleChange} placeholder="Enter password" style={{ width: '100%', padding: '12px 45px 12px 12px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '0.95rem' }} />
                                        <button type="button" onClick={() => setShowPassword(!showPassword)} style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', padding: '4px' }}>
                                            {showPassword ? <EyeSlash size={20} color="#64748b" /> : <Eye size={20} color="#64748b" />}
                                        </button>
                                    </div>
                                    {formData.password && (
                                        <div style={{ marginTop: '12px' }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                                                <span style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 600 }}>Password Strength:</span>
                                                <span style={{ fontSize: '0.8rem', color: getStrengthColor(), fontWeight: 700 }}>{getStrengthText()}</span>
                                            </div>
                                            <div style={{ height: '6px', background: '#e5e7eb', borderRadius: '3px', overflow: 'hidden' }}>
                                                <div style={{ height: '100%', width: `${(passwordStrength / 4) * 100}%`, background: getStrengthColor(), transition: 'all 0.3s' }}></div>
                                            </div>
                                        </div>
                                    )}
                                    <div style={{ marginTop: '10px', padding: '10px', background: '#f8fafc', borderRadius: '6px' }}>
                                        <p style={{ fontSize: '0.75rem', color: '#64748b', margin: '0 0 6px 0', fontWeight: 700 }}>Password must contain:</p>
                                        <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '0.75rem', color: '#64748b' }}>
                                            <li style={{ color: formData.password.length >= 8 ? '#10b981' : '#64748b' }}>At least 8 characters</li>
                                            <li style={{ color: /[a-z]/.test(formData.password) && /[A-Z]/.test(formData.password) ? '#10b981' : '#64748b' }}>Upper & lowercase letters</li>
                                            <li style={{ color: /\d/.test(formData.password) ? '#10b981' : '#64748b' }}>At least one number</li>
                                            <li style={{ color: /[^a-zA-Z\d]/.test(formData.password) ? '#10b981' : '#64748b' }}>Special character</li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '8px' }}>Confirm Password <span style={{ color: '#dc2626' }}>*</span></label>
                                    <div style={{ position: 'relative' }}>
                                        <input type={showConfirmPassword ? 'text' : 'password'} name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="Re-enter password" style={{ width: '100%', padding: '12px 45px 12px 12px', borderRadius: '8px', border: formData.confirmPassword && formData.password !== formData.confirmPassword ? '1px solid #dc2626' : '1px solid #e2e8f0', fontSize: '0.95rem' }} />
                                        <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', padding: '4px' }}>
                                            {showConfirmPassword ? <EyeSlash size={20} color="#64748b" /> : <Eye size={20} color="#64748b" />}
                                        </button>
                                    </div>
                                    {formData.confirmPassword && formData.password !== formData.confirmPassword && (
                                        <p style={{ fontSize: '0.8rem', color: '#dc2626', marginTop: '6px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                            <XCircle size={16} weight="fill" /> Passwords do not match
                                        </p>
                                    )}
                                    {formData.confirmPassword && formData.password === formData.confirmPassword && (
                                        <p style={{ fontSize: '0.8rem', color: '#10b981', marginTop: '6px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                            <CheckCircle size={16} weight="fill" /> Passwords match
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Section 5: Plan Information */}
                        <div style={{ marginBottom: '2rem', padding: '1.5rem', background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)', borderRadius: '12px', border: '1px solid #bbf7d0' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1rem' }}>
                                <CheckCircle size={24} color="#16a34a" weight="fill" />
                                <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#166534', margin: 0 }}>Free Trial Enabled</h3>
                            </div>
                            <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '0.9rem', color: '#15803d' }}>
                                <li style={{ marginBottom: '6px' }}><strong>Duration:</strong> 14 days</li>
                                <li><strong>No credit card required</strong></li>
                            </ul>
                            <a href="#" style={{ display: 'inline-block', marginTop: '12px', fontSize: '0.85rem', color: '#667eea', fontWeight: 700, textDecoration: 'none' }}>View Plans →</a>
                        </div>

                        {/* Section 6: Terms & Conditions */}
                        <div style={{ marginBottom: '2rem' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                <label style={{ display: 'flex', alignItems: 'start', gap: '10px', cursor: 'pointer' }}>
                                    <input type="checkbox" name="agreeTerms" checked={formData.agreeTerms} onChange={handleChange} style={{ width: '18px', height: '18px', marginTop: '2px' }} />
                                    <span style={{ fontSize: '0.9rem', color: '#334155' }}>I agree to the <a href="#" style={{ color: '#667eea', fontWeight: 600, textDecoration: 'none' }}>Terms & Conditions</a></span>
                                </label>
                                <label style={{ display: 'flex', alignItems: 'start', gap: '10px', cursor: 'pointer' }}>
                                    <input type="checkbox" name="agreePrivacy" checked={formData.agreePrivacy} onChange={handleChange} style={{ width: '18px', height: '18px', marginTop: '2px' }} />
                                    <span style={{ fontSize: '0.9rem', color: '#334155' }}>I agree to the <a href="#" style={{ color: '#667eea', fontWeight: 600, textDecoration: 'none' }}>Privacy Policy</a></span>
                                </label>
                            </div>
                        </div>

                        {/* Section 7: Signup Button */}
                        <button
                            type="submit"
                            disabled={!isFormValid() || isLoading}
                            style={{
                                width: '100%',
                                padding: '16px',
                                background: isFormValid() ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : '#cbd5e1',
                                color: 'white',
                                border: 'none',
                                borderRadius: '12px',
                                fontSize: '1rem',
                                fontWeight: 700,
                                cursor: isFormValid() ? 'pointer' : 'not-allowed',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '10px',
                                boxShadow: isFormValid() ? '0 10px 25px rgba(102, 126, 234, 0.4)' : 'none',
                                transition: 'all 0.3s'
                            }}
                        >
                            {isLoading ? (
                                <>
                                    <div style={{ width: '20px', height: '20px', border: '3px solid rgba(255,255,255,0.3)', borderTop: '3px solid white', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
                                    Creating Account...
                                </>
                            ) : (
                                <>
                                    Create Account
                                    <ArrowRight size={20} weight="bold" />
                                </>
                            )}
                        </button>

                        {/* Footer */}
                        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                            <p style={{ fontSize: '0.9rem', color: '#64748b', margin: '0 0 12px 0' }}>
                                Already have an account? <a href="/login" onClick={(e) => { e.preventDefault(); navigate('/login'); }} style={{ color: '#667eea', fontWeight: 700, textDecoration: 'none' }}>Login</a>
                            </p>
                            <a href="#" style={{ fontSize: '0.85rem', color: '#94a3b8', textDecoration: 'none' }}>Need help? Contact Support</a>
                        </div>

                    </form>
                ) : (
                    /* Verification Content */
                    <div style={{ padding: '3rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                        {verificationStatus === 'success' ? (
                            // Success State
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', animation: 'fadeIn 0.5s' }}>
                                <div style={{ width: '80px', height: '80px', background: '#dcfce7', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                                    <CheckCircle size={48} color="#16a34a" weight="fill" />
                                </div>
                                <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#166534', margin: '0 0 0.5rem 0' }}>Verification Successful!</h2>
                                <p style={{ fontSize: '1rem', color: '#15803d' }}>Your account has been created successfully.</p>
                                <p style={{ fontSize: '0.9rem', color: '#64748b', marginTop: '1rem' }}>Redirecting to login dashboard...</p>
                            </div>
                        ) : (
                            // Verification Form
                            <div style={{ width: '100%', maxWidth: '400px' }}>
                                <div style={{ width: '80px', height: '80px', background: '#eff6ff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', margin: '0 auto 1.5rem' }}>
                                    <EnvelopeSimple size={40} color="#3b82f6" weight="duotone" />
                                </div>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1e293b', margin: '0 0 0.5rem 0' }}>Check your email</h3>
                                <p style={{ fontSize: '0.95rem', color: '#64748b', marginBottom: '2rem' }}>We've sent a 4-digit verification code to <br /><strong>{formData.workEmail}</strong></p>

                                <form onSubmit={handleVerify}>
                                    <div style={{ marginBottom: '2rem' }}>
                                        <input
                                            type="text"
                                            maxLength={4}
                                            value={otp}
                                            onChange={(e) => setOtp(e.target.value.replace(/[^0-9]/g, ''))}
                                            placeholder="0000"
                                            style={{
                                                width: '200px',
                                                height: '60px',
                                                fontSize: '2rem',
                                                textAlign: 'center',
                                                letterSpacing: '0.5rem',
                                                borderRadius: '12px',
                                                border: verificationStatus === 'failed' ? '2px solid #dc2626' : '2px solid #e2e8f0',
                                                outline: 'none',
                                                fontWeight: 700,
                                                color: '#1e293b'
                                            }}
                                        />
                                        {verificationStatus === 'failed' && (
                                            <p style={{ color: '#dc2626', fontSize: '0.85rem', marginTop: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                                                <XCircle size={16} weight="fill" /> Invalid code. Try again (Use 1234)
                                            </p>
                                        )}
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={otp.length < 4 || verificationStatus === 'verifying'}
                                        style={{
                                            width: '100%',
                                            padding: '16px',
                                            background: otp.length === 4 ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : '#cbd5e1',
                                            color: 'white',
                                            border: 'none',
                                            borderRadius: '12px',
                                            fontSize: '1rem',
                                            fontWeight: 700,
                                            cursor: otp.length === 4 ? 'pointer' : 'not-allowed',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            gap: '10px',
                                            transition: 'all 0.3s'
                                        }}
                                    >
                                        {verificationStatus === 'verifying' ? (
                                            <>
                                                <div style={{ width: '20px', height: '20px', border: '3px solid rgba(255,255,255,0.3)', borderTop: '3px solid white', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
                                                Verifying...
                                            </>
                                        ) : 'Verify Account'}
                                    </button>
                                </form>

                                <div style={{ marginTop: '1.5rem' }}>
                                    <p style={{ fontSize: '0.9rem', color: '#64748b' }}>
                                        Didn't receive the code? <button type="button" style={{ background: 'none', border: 'none', color: '#667eea', fontWeight: 700, cursor: 'pointer' }}>Resend OTP</button>
                                    </p>
                                    <button onClick={() => setStep('signup')} style={{ background: 'none', border: 'none', color: '#94a3b8', fontSize: '0.85rem', marginTop: '1rem', cursor: 'pointer', textDecoration: 'underline' }}>Back to Signup</button>
                                </div>
                            </div>
                        )}
                    </div>
                )}

                <style>{`
                    @keyframes spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }
                    @keyframes fadeIn {
                        from { opacity: 0; transform: translateY(10px); }
                        to { opacity: 1; transform: translateY(0); }
                    }
                `}</style>

            </div>
        </div>
    );
};

export default Signup;
