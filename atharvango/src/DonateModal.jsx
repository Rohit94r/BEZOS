import React, { useState } from 'react';
import { X, Heart, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function DonateModal({ isOpen, onClose }) {
  const [amount, setAmount] = useState(2500);
  const [customAmount, setCustomAmount] = useState('');
  const [cause, setCause] = useState('Girl Child Education');
  const [step, setStep] = useState('select'); // 'select' | 'details' | 'success'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    pan: '',
  });

  if (!isOpen) return null;

  const presetAmounts = [1000, 2500, 5000, 10000];
  const causes = [
    'Girl Child Education in Rural India',
    'Assistance to Families of Martyrs',
    'Women Empowerment & Skill Workshops',
    '100 Computers for Daughters Program',
    'Community Health & Cleanliness Camps'
  ];

  const effectiveAmount = customAmount ? Number(customAmount) : amount;

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep('success');
  };

  return (
    <div 
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        backgroundColor: 'rgba(20, 4, 8, 0.75)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        animation: 'fadeIn 0.2s ease',
      }}
      onClick={onClose}
    >
      <div 
        style={{
          width: '100%',
          maxWidth: '540px',
          backgroundColor: '#F8F3E9',
          borderRadius: '20px',
          border: '1px solid rgba(217, 180, 91, 0.35)',
          boxShadow: '0 25px 50px -12px rgba(80, 13, 24, 0.4)',
          overflow: 'hidden',
          animation: 'scaleUp 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div 
          style={{
            backgroundColor: '#500D18',
            color: '#FFFFFF',
            padding: '20px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '2px solid #D9B45B',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div 
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: 'rgba(217, 180, 91, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#D9B45B',
              }}
            >
              <Heart size={20} fill="#D9B45B" />
            </div>
            <div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', margin: 0, color: '#FFFFFF' }}>
                Support a Cause
              </h3>
              <p style={{ margin: 0, fontSize: '12px', color: '#D9B45B' }}>
                Every contribution transforms a real life on the ground
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              color: '#FFFFFF',
              cursor: 'pointer',
              padding: '6px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Content Body */}
        <div style={{ padding: '24px', maxHeight: '80vh', overflowY: 'auto' }}>
          {step === 'select' && (
            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#292321', marginBottom: '8px' }}>
                1. Select an Initiative:
              </label>
              <select
                value={cause}
                onChange={(e) => setCause(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 14px',
                  borderRadius: '10px',
                  border: '1px solid rgba(80, 13, 24, 0.2)',
                  backgroundColor: '#FFFFFF',
                  color: '#292321',
                  fontSize: '14px',
                  marginBottom: '20px',
                  outline: 'none',
                  fontFamily: 'var(--font-sans)',
                }}
              >
                {causes.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>

              <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#292321', marginBottom: '8px' }}>
                2. Choose Contribution Amount:
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px', marginBottom: '14px' }}>
                {presetAmounts.map((amt) => {
                  const isSelected = !customAmount && amount === amt;
                  return (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => {
                        setAmount(amt);
                        setCustomAmount('');
                      }}
                      style={{
                        padding: '14px',
                        borderRadius: '10px',
                        border: isSelected ? '2px solid #500D18' : '1px solid rgba(80, 13, 24, 0.15)',
                        backgroundColor: isSelected ? '#500D18' : '#FFFFFF',
                        color: isSelected ? '#D9B45B' : '#292321',
                        fontSize: '16px',
                        fontWeight: 700,
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        textAlign: 'center',
                      }}
                    >
                      ₹{amt.toLocaleString('en-IN')}
                    </button>
                  );
                })}
              </div>

              {/* Custom Amount */}
              <div style={{ position: 'relative', marginBottom: '20px' }}>
                <span style={{ position: 'absolute', left: '14px', top: '12px', color: '#716A65', fontWeight: 600 }}>₹</span>
                <input
                  type="number"
                  placeholder="Or enter custom amount in INR"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 14px 12px 32px',
                    borderRadius: '10px',
                    border: '1px solid rgba(80, 13, 24, 0.2)',
                    backgroundColor: '#FFFFFF',
                    fontSize: '14px',
                    outline: 'none',
                    boxSizing: 'border-box',
                  }}
                />
              </div>

              {/* Impact Callout */}
              <div 
                style={{
                  backgroundColor: 'rgba(217, 180, 91, 0.15)',
                  border: '1px solid #D9B45B',
                  borderRadius: '10px',
                  padding: '14px',
                  fontSize: '13px',
                  color: '#500D18',
                  marginBottom: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                <ShieldCheck size={22} color="#500D18" style={{ flexShrink: 0 }} />
                <span>
                  <strong>100% Tax Exemption:</strong> All donations to Atharva Educational Trust are eligible for tax exemption under Section 80G of the Income Tax Act.
                </span>
              </div>

              <button
                type="button"
                onClick={() => setStep('details')}
                disabled={effectiveAmount <= 0}
                style={{
                  width: '100%',
                  padding: '14px',
                  backgroundColor: '#D9B45B',
                  color: '#500D18',
                  fontWeight: 700,
                  fontSize: '15px',
                  borderRadius: '10px',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  boxShadow: '0 4px 14px rgba(217, 180, 91, 0.4)',
                }}
              >
                Continue to Details (₹{effectiveAmount.toLocaleString('en-IN')}) →
              </button>
            </div>
          )}

          {step === 'details' && (
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '14px' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#292321', marginBottom: '6px' }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Kumar"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: '8px',
                    border: '1px solid rgba(80, 13, 24, 0.2)',
                    backgroundColor: '#FFFFFF',
                    fontSize: '14px',
                    boxSizing: 'border-box',
                  }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '14px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#292321', marginBottom: '6px' }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: '8px',
                      border: '1px solid rgba(80, 13, 24, 0.2)',
                      backgroundColor: '#FFFFFF',
                      fontSize: '14px',
                      boxSizing: 'border-box',
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#292321', marginBottom: '6px' }}>
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 9876543210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: '8px',
                      border: '1px solid rgba(80, 13, 24, 0.2)',
                      backgroundColor: '#FFFFFF',
                      fontSize: '14px',
                      boxSizing: 'border-box',
                    }}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#292321', marginBottom: '6px' }}>
                  PAN Card Number (For 80G Tax Exemption Receipt)
                </label>
                <input
                  type="text"
                  placeholder="e.g. ABCDE1234F"
                  value={formData.pan}
                  onChange={(e) => setFormData({ ...formData, pan: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: '8px',
                    border: '1px solid rgba(80, 13, 24, 0.2)',
                    backgroundColor: '#FFFFFF',
                    fontSize: '14px',
                    textTransform: 'uppercase',
                    boxSizing: 'border-box',
                  }}
                />
              </div>

              <div style={{ display: 'flex', gap: '10px' }}>
                <button
                  type="button"
                  onClick={() => setStep('select')}
                  style={{
                    flex: '1',
                    padding: '14px',
                    backgroundColor: 'transparent',
                    border: '1px solid #716A65',
                    color: '#292321',
                    borderRadius: '10px',
                    fontWeight: 600,
                    cursor: 'pointer',
                  }}
                >
                  ← Back
                </button>
                <button
                  type="submit"
                  style={{
                    flex: '2',
                    padding: '14px',
                    backgroundColor: '#500D18',
                    color: '#D9B45B',
                    fontWeight: 700,
                    fontSize: '15px',
                    borderRadius: '10px',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  Complete Contribution (₹{effectiveAmount.toLocaleString('en-IN')})
                </button>
              </div>
            </form>
          )}

          {step === 'success' && (
            <div style={{ textAlign: 'center', padding: '20px 0' }}>
              <div 
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  backgroundColor: '#D9B45B',
                  color: '#500D18',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px auto',
                }}
              >
                <CheckCircle2 size={36} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '24px', color: '#500D18', marginBottom: '8px' }}>
                Thank You, {formData.name || 'Generous Supporter'}!
              </h3>
              <p style={{ fontSize: '14px', color: '#292321', lineHeight: '1.6', marginBottom: '20px' }}>
                Your contribution of <strong>₹{effectiveAmount.toLocaleString('en-IN')}</strong> towards <strong>{cause}</strong> has been received with immense gratitude. An official 80G tax exemption receipt has been sent to <strong>{formData.email}</strong>.
              </p>
              <div 
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '12px',
                  padding: '16px',
                  border: '1px dashed #D9B45B',
                  marginBottom: '20px',
                  fontSize: '13px',
                  color: '#716A65',
                }}
              >
                Together, we are building a more inclusive and self-reliant India.
              </div>
              <button
                type="button"
                onClick={onClose}
                style={{
                  padding: '12px 32px',
                  backgroundColor: '#500D18',
                  color: '#FFFFFF',
                  borderRadius: '10px',
                  border: 'none',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
