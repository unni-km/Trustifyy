import React, { useState } from "react";
import { Link } from "react-router-dom";

const STEPS = ["Partner details", "Product & notes", "Review & submit"];

const PRODUCTS = [
  { value: "Health Insurance", icon: "🏥", label: "Health Insurance" },
  { value: "Life Insurance", icon: "🛡️", label: "Life Insurance" },
  { value: "Vehicle Insurance", icon: "🚗", label: "Vehicle Insurance" },
];

const INITIAL_FORM = {
  partnerCode: "",
  customerName: "",
  countryCode: "+91",
  customerMobile: "",
  product: "",
  remarks: "",
};

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const selectProduct = (value) => {
    setFormData({ ...formData, product: value });
    setErrors({ ...errors, product: "" });
  };

  const validateStep0 = () => {
    const errs = {};
    if (!formData.partnerCode.trim()) errs.partnerCode = "Partner code is required";
    if (!formData.customerName.trim()) errs.customerName = "Customer name is required";
    if (!/^\d{10}$/.test(formData.customerMobile.trim()))
      errs.customerMobile = "Enter a valid 10-digit number";
    return errs;
  };

  const validateStep1 = () => {
    const errs = {};
    if (!formData.product) errs.product = "Please select a product";
    return errs;
  };

  const goNext = () => {
    if (step === 0) {
      const errs = validateStep0();
      if (Object.keys(errs).length) { setErrors(errs); return; }
    }
    if (step === 1) {
      const errs = validateStep1();
      if (Object.keys(errs).length) { setErrors(errs); return; }
    }
    if (step === 2) { handleSubmit(); return; }
    setStep((s) => s + 1);
  };

  const handleSubmit = async () => {
    setLoading(true);
    const payload = {
      ...formData,
      customerMobile: formData.countryCode + formData.customerMobile,
    };
    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbx7lEpT_XGkxIEfmC6ISkj5FGtTatMtmZtB5C-92Cusrt_OpQd5ONvXRgZHcX7TcY-A/exec",
        { method: "POST", body: JSON.stringify(payload) }
      );
      setSubmitted(true);
    } catch {
      alert("❌ Failed to submit lead. Please try again.");
    }
    setLoading(false);
  };

  const resetModal = () => {
    setStep(0);
    setFormData(INITIAL_FORM);
    setErrors({});
    setSubmitted(false);
  };

  const openModal = () => { resetModal(); setShowModal(true); };
  const closeModal = () => { setShowModal(false); resetModal(); };

  const inputCls = (field) =>
    `w-full px-3 py-2 text-sm border rounded-lg bg-white text-gray-900 outline-none transition focus:ring-2 focus:ring-orange-300 focus:border-orange-400 ${
      errors[field] ? "border-red-400" : "border-gray-300"
    }`;

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/service", label: "Services" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <>
      {/* ── Header ────────────────────────────────────── */}
      <header className="fixed top-0 left-0 w-full z-50 bg-gray-900/95 backdrop-blur-md h-20 px-6 flex items-center justify-between shadow-lg border-b border-gray-800">
        <Link to="/">
          <img src="/logo.png" alt="Logo" className="h-14 w-auto hover:scale-105 transition-transform duration-300" />
        </Link>

        <nav className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="relative group text-gray-300 font-medium hover:text-orange-400 transition-colors duration-300"
            >
              {link.label}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-orange-400 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          <button
            onClick={openModal}
            className="ml-4 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold transition"
          >
            Add Lead
          </button>
        </nav>

        <button className="md:hidden text-gray-300 text-xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "✕" : "☰"}
        </button>

        {isOpen && (
          <div className="absolute top-20 left-0 w-full bg-gray-900 flex flex-col items-center py-6 space-y-6 md:hidden">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 text-lg hover:text-orange-400"
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => { openModal(); setIsOpen(false); }}
              className="bg-orange-500 text-white px-5 py-2 rounded-lg font-semibold"
            >
              Add Lead
            </button>
          </div>
        )}
      </header>

      {/* ── Modal ─────────────────────────────────────── */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4">
          <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden">

            {submitted ? (
              /* Success state */
              <div className="p-8 text-center">
                <div className="w-14 h-14 rounded-full bg-orange-50 flex items-center justify-center mx-auto mb-4 text-2xl">✓</div>
                <h3 className="text-base font-semibold text-gray-900 mb-1">Lead submitted!</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-6">
                  The lead has been recorded.<br />The team will follow up shortly.
                </p>
                <div className="flex gap-3 justify-center">
                  <button
                    onClick={closeModal}
                    className="px-6 py-2 text-sm font-semibold text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
                  >
                    Close
                  </button>
                  <button
                    onClick={openModal}
                    className="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded-lg transition"
                  >
                    Add another lead
                  </button>
                </div>
              </div>
            ) : (
              <>
                {/* Modal header */}
                <div className="px-6 pt-5 pb-4 border-b border-gray-100">
                  <div className="flex items-center justify-between mb-3">
                    <h2 className="text-base font-semibold text-gray-900">{STEPS[step]}</h2>
                    <button onClick={closeModal} className="w-7 h-7 flex items-center justify-center rounded-lg border border-gray-200 text-gray-400 hover:bg-gray-50 text-sm">✕</button>
                  </div>
                  {/* Progress bar */}
                  <div className="flex gap-1.5">
                    {STEPS.map((_, i) => (
                      <div
                        key={i}
                        className={`flex-1 h-1 rounded-full transition-all duration-300 ${
                          i < step ? "bg-orange-300" : i === step ? "bg-orange-500" : "bg-gray-100"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-xs text-gray-400 mt-1.5">Step {step + 1} of {STEPS.length}</p>
                </div>

                {/* Modal body */}
                <div className="px-6 py-5 space-y-4">

                  {/* Step 0 — Partner details */}
                  {step === 0 && (
                    <>
                      <div>
                        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Partner code</label>
                        <input name="partnerCode" value={formData.partnerCode} onChange={handleChange} placeholder="e.g. PC-1234" className={inputCls("partnerCode")} />
                        {errors.partnerCode && <p className="text-xs text-red-500 mt-1">{errors.partnerCode}</p>}
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Customer name</label>
                        <input name="customerName" value={formData.customerName} onChange={handleChange} placeholder="Full name" className={inputCls("customerName")} />
                        {errors.customerName && <p className="text-xs text-red-500 mt-1">{errors.customerName}</p>}
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Mobile number</label>
                        <div className="flex gap-2">
                          <select
                            name="countryCode"
                            value={formData.countryCode}
                            onChange={handleChange}
                            className="w-24 shrink-0 px-2 py-2 text-sm border border-gray-300 rounded-lg bg-white text-gray-900 outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-400"
                          >
                            <option value="+91">🇮🇳 +91</option>
                            <option value="+1">🇺🇸 +1</option>
                            <option value="+44">🇬🇧 +44</option>
                            <option value="+971">🇦🇪 +971</option>
                          </select>
                          <input
                            name="customerMobile"
                            value={formData.customerMobile}
                            onChange={handleChange}
                            placeholder="10-digit number"
                            maxLength={10}
                            type="tel"
                            className={`flex-1 ${inputCls("customerMobile")}`}
                          />
                        </div>
                        {errors.customerMobile && <p className="text-xs text-red-500 mt-1">{errors.customerMobile}</p>}
                      </div>
                    </>
                  )}

                  {/* Step 1 — Product & remarks */}
                  {step === 1 && (
                    <>
                      <div>
                        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Select product</label>
                        <div className="grid grid-cols-3 gap-2">
                          {PRODUCTS.map((p) => (
                            <button
                              key={p.value}
                              type="button"
                              onClick={() => selectProduct(p.value)}
                              className={`flex flex-col items-center justify-center gap-1 py-3 px-2 rounded-xl border text-center transition ${
                                formData.product === p.value
                                  ? "border-orange-400 bg-orange-50"
                                  : "border-gray-200 hover:border-orange-300 hover:bg-gray-50"
                              }`}
                            >
                              <span className="text-2xl">{p.icon}</span>
                              <span className="text-xs font-medium text-gray-700 leading-tight">{p.label}</span>
                            </button>
                          ))}
                        </div>
                        {errors.product && <p className="text-xs text-red-500 mt-1">{errors.product}</p>}
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                          Remarks <span className="normal-case font-normal text-gray-400">(optional)</span>
                        </label>
                        <textarea
                          name="remarks"
                          value={formData.remarks}
                          onChange={handleChange}
                          placeholder="Any notes or context about this lead…"
                          rows={3}
                          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg bg-white text-gray-900 outline-none resize-none transition focus:ring-2 focus:ring-orange-300 focus:border-orange-400"
                        />
                      </div>
                    </>
                  )}

                  {/* Step 2 — Review */}
                  {step === 2 && (
                    <div>
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">Review before submitting</p>
                      {[
                        ["Partner code", formData.partnerCode],
                        ["Customer name", formData.customerName],
                        ["Mobile", `${formData.countryCode} ${formData.customerMobile}`],
                        ["Product", formData.product],
                        ["Remarks", formData.remarks || "—"],
                      ].map(([label, value]) => (
                        <div key={label} className="flex justify-between py-2.5 border-b border-gray-100 last:border-0 text-sm">
                          <span className="text-gray-500">{label}</span>
                          <span className="font-medium text-gray-900 text-right max-w-[60%]">{value}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Modal footer */}
                <div className="px-6 pb-5 flex gap-3">
                  {step > 0 && (
                    <button
                      onClick={() => setStep((s) => s - 1)}
                      className="px-4 py-2 text-sm font-semibold text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
                    >
                      Back
                    </button>
                  )}
                  <button
                    onClick={goNext}
                    disabled={loading}
                    className="flex-1 py-2 text-sm font-semibold bg-orange-500 hover:bg-orange-600 disabled:bg-gray-300 text-white rounded-lg transition"
                  >
                    {loading ? "Submitting…" : step === 2 ? "Submit lead" : "Continue"}
                  </button>
                </div>
              </>
            )}

          </div>
        </div>
      )}
    </>
  );
}

export default Header;