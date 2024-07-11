'use client'

import { useState } from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function Page() {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // I will implement this later to handle submissions.
  };

  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 items-center p-4">
        <img src="https://openmenu.com/images/openmenu-250-49.png" alt="OpenMenu Logo" className="h-full" />
        </div>
      <div className="flex h-20 items-center bg-teal-600 p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Contact Us</h1>
      <div>
      <p className="text-center mb-8">Feel free to ask your questions details.</p>
      </div>
      </div>
      <div className="flex flex-col mt-4 p-6 bg-gray-50 rounded-lg md:flex-row md:gap-4">
        <div className="md:w-1/2">
          
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input 
              type="text" 
              name="fullName" 
              value={form.fullName} 
              onChange={handleChange} 
              placeholder="Full Name" 
              className="p-3 border rounded-md" 
              required 
            />
            <input 
              type="email" 
              name="email" 
              value={form.email} 
              onChange={handleChange} 
              placeholder="Email Address" 
              className="p-3 border rounded-md" 
              required 
            />
            <select 
              name="subject" 
              value={form.subject} 
              onChange={handleChange} 
              className="p-3 border rounded-md" 
              required
            >
              <option value="" disabled>(select a subject)</option>
              {/* Add more options as needed */}
              <option value="general">General Inquiry</option>
              <option value="support">Support</option>
              <option value="feedback">Feedback</option>
            </select>
            <textarea 
              name="message" 
              value={form.message} 
              onChange={handleChange} 
              placeholder="Message" 
              className="p-3 border rounded-md h-32" 
              required 
            />
            <div className="flex items-center">
              <input type="checkbox" id="robot" name="robot" className="mr-2" required />
              <label htmlFor="robot">I'm not a robot</label>
            </div>
            <button 
              type="submit" 
              className="bg-green-600 text-white p-3 rounded-md"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <h2 className="text-xl font-bold mb-2">Tell us What's on Your Mind</h2>
          <p className="text-justify mb-4">
            Contact us if you have ideas on how to improve OpenMenu to better meet your needs. Feedback from our users is what drives us forward.
          </p>
          <p className="mb-4"><strong>Email Address</strong></p>
          <p className="mb-4">support@openmenu.com</p>
          <div className="flex justify-center gap-4">
            <a href="https://www.facebook.com" className="text-gray-600">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAY1BMVEX///8AAADz8/OMjIzr6+s0NDSqqqpqamro6OjQ0NBcXFz29vaCgoKwsLD8/Pzh4eELCwtjY2O+vr4nJydMTEyWlpZRUVFFRUUaGhoTExOgoKA/Pz/W1tZ8fHzExMQ5OTlycnJz72qpAAAE2ElEQVR4nO2c63aqMBBGy0UUkYAoF+Wi7/+Up9oetRqGAekkXevbf13tytZkMpkJfHwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAI1ahVlwzHMvPwZZuDI9nOkkcVuU9WJXVYc0PVTVblGXRRsnpsc1nmx5qFJHQ1odzpnp0Y1AdYVO45F1p0yPkkOU5NWQyoXqmESmxzqAG244Jl94oWt6vAQq9PgqXzrWzrbmuBvncplsjelRa4niwWWvo4gtnGtJy1r3mh+ntW7n6eppKhfqzvTof3I8THdxnMPR9PgfWb6jcmFp2uCGGh3EXtlZEqPdGVw+bawIaslpDhfHOVkQ1JL9PC6Oszduk6zncvlMpQ3brM7zuTjO2ehR1M3ndHHS3GQUyLSHyT7WeRYmnzRdnLfapZYaPIMmY0y6SN33EqVU5IeaFMjYsnH5+djZ1/0DTfCoTU009oIpezJJXSQ0lKaxJ9m5b+5ow7qZiVYyXdremaOV2Us6/Cdmuqy1y+WKfsONBSW+cRdMGWLa6GVO8jGAu/qpBd2TCuViEt/4zBVDZvY9MmX/xPwdcuY5mVwAPTIH4Z/G3fJcHDJ17Mu4t7KrJmDWlTbksPpkdrIBjVtR1iaOKnKvqN6z0EbSJeQeLzXF11UTe5srXm9034eCMgHTZfGyyUQdqywVyLlE3GL/+nn9RzGvlOPJ9W4abom8fd4xQmbeUMg1BzKmi+M9BTOX3YoSO3Iq7pJ5kUm4CZ0TSFU4/XaqTMP9Q2cjldIk3JPMi0zIlhGrCPKHNF3GkdppOgkZoQaU4p4x35KJZSJAxC9jviGTy2ybLjuYvSND59uz4XPPMm/JLGVis8/v978hQxR15mTFr8q+IbOXaW+s+H2/N2RqG2ROeXDj+HzPxz/ePwxi8k7HyQaZNT8K5VR3R+qXIVOzl/NYP2QLsZSRoaMZX0aRB+hCKDSTg+DLJOSXIrTP0MdFvkxHrj2hDIDOzfgydCFRKDejs2a+DF3iEcqa6a2PL0MXN6QOZ/PI0HFETIa8+8OWacgSr1gNgKzOsGUysrb5Uj78LdRxDhm6+CZWNyMrmuxzCPWNCFY0yeleNP7qhvvz+1X3j/yEPHzv5WrNVA6w2y5vbIOfO597fviMrNQK7f9X6Cly5+lw5rOvpkreoAmZBdpnGW7dvJTsnHF7mlNlRHua3G7zRJlKsAt4GRbv0uxEGaEy0w2PdTtzoown68Isnk2TqcXvz7EaztNkZJf/dWCcEDBJppK+1PTB2zgnyYhfN7vA+GkmyRh5kobROp4iI7r53xluOk2QMfXAVjSYN06QMfbAczN0t3G8jKFJ9nE5Pw/kAaNlhEp/WoYunoyVESow97Cim7UjZQrDz2nR1a9xMrJHMh0NlXGOkllY8IhzQwToMTKVBS6f62YeGeNz7As1h4zxJ05v9BVr2DKVRS8LUq1+4TBl0hH9dgFUrA1qPJnF80UO44RnTaLGkikyS94F8ICv+XEYMgfPnqX/SPNS5BiW2Vr7ViC3OY+TOWRGM8sB3GY7QiawKCBrUY9dJEqmCmydYD/pyu8XtfXJpNXaznc0aXHjbbmotDLprrby/Uw0TdA+tQH9ul5vvezPmWiJstDm6AUAAAAAAAAAAAAAAAAAAAAAAAAAAMCf5R+LR0CEyGiMggAAAABJRU5ErkJggg==" 
            alt="Facebook" className="h-full" />
            </a>
            <a href="https://www.twitter.com" className="text-gray-600">
            <img src="data:image/png;base64,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" 
            alt="Twitter" className="h-full" />
            </a>
            <a href="https://www.linkedin.com" className="text-gray-600">
            <img src="data:image/png;base64,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" 
            alt="Instagram" className="h-full" />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
