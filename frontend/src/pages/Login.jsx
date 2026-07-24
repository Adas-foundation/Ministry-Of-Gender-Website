import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    phone: '',
    confirmPassword: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      if (isLogin) {
        alert('Login successful! Redirecting to dashboard...');
        navigate('/');
      } else {
        alert('Account created successfully! Please log in.');
        setIsLogin(true);
      }
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-6">
      <div className="w-full max-w-md">
        {/* Logo and Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-white rounded-full p-1 shadow-sm border border-gray-200 overflow-hidden">
              <img
                className="h-full object-contain"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6LAiD_t7dS_4s9hPpuW_AOXS_MUYHLuNDWy9EpKAlwUxPaxMdGTA69t7IB90GobXzSZW8KHTWV4qZuaj-3Fs9KFaCAwh_Qulc55XtJ0G7scRClmZWr1hTZ45h3_A5bZha6NNf7WJPLSoYBsnkriSP-mBJmDwwNp8a1B5s-6sBKPjN-fQmry6hutsY5mL13ZnDALc5Hse4LKIv9onp70L1ePO0QNxwaYkozbP_K79hMGqK28pfUXa06c0P0vqK-0F_y7QBL2bsuWE"
                alt="Malawi Crest"
              />
            </div>
            <span className="text-2xl font-bold text-gray-900">SafeReport</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {isLogin ? 'Welcome Back' : 'Create Account'}
          </h1>
          <p className="text-gray-600">
            {isLogin
              ? 'Sign in to access your dashboard and manage reports'
              : 'Register to track reports and access support services'}
          </p>
        </div>

        {/* Auth Card */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
          {/* Toggle Tabs */}
          <div className="flex mb-6 bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-semibold transition-all ${
                isLogin ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600'
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-semibold transition-all ${
                !isLogin ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600'
              }`}
            >
              Register
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-gray-600" htmlFor="name">
                    Full Name
                  </label>
                  <input
                    className="h-12 px-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-700 focus:border-blue-700 outline-none transition-all"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter your full name"
                    required={!isLogin}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-gray-600" htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    className="h-12 px-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-700 focus:border-blue-700 outline-none transition-all"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    type="tel"
                    placeholder="+265 XXX XXX XXX"
                    required={!isLogin}
                  />
                </div>
              </>
            )}

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-600" htmlFor="email">
                Email Address
              </label>
              <input
                className="h-12 px-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-700 focus:border-blue-700 outline-none transition-all"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                placeholder="your@email.com"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-600" htmlFor="password">
                Password
              </label>
              <input
                className="h-12 px-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-700 focus:border-blue-700 outline-none transition-all"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                type="password"
                placeholder="••••••••"
                required
              />
            </div>

            {!isLogin && (
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-600" htmlFor="confirmPassword">
                  Confirm Password
                </label>
                <input
                  className="h-12 px-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-700 focus:border-blue-700 outline-none transition-all"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  type="password"
                  placeholder="••••••••"
                  required={!isLogin}
                />
              </div>
            )}

            {isLogin && (
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-sm text-gray-600">
                  <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-700 focus:ring-blue-700" />
                  Remember me
                </label>
                <a href="#" className="text-sm text-blue-700 hover:underline">
                  Forgot password?
                </a>
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-700 text-white h-12 rounded-xl font-semibold hover:bg-blue-800 transition-all shadow-md active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined animate-spin">refresh</span>
                  Processing...
                </span>
              ) : (
                isLogin ? 'Sign In' : 'Create Account'
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-gray-200"></div>
            <span className="text-sm text-gray-500">or continue with</span>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 h-12 border border-gray-200 rounded-xl hover:bg-gray-50 transition-all">
              <span className="material-symbols-outlined text-gray-700">alternate_email</span>
              <span className="text-sm font-medium text-gray-700">Google</span>
            </button>
            <button className="flex items-center justify-center gap-2 h-12 border border-gray-200 rounded-xl hover:bg-gray-50 transition-all">
              <span className="material-symbols-outlined text-gray-700">facebook</span>
              <span className="text-sm font-medium text-gray-700">Facebook</span>
            </button>
          </div>
        </div>

        {/* Help Text */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            {isLogin ? "Don't have an account? " : 'Already have an account? '}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-blue-700 font-semibold hover:underline"
            >
              {isLogin ? 'Register' : 'Sign In'}
            </button>
          </p>
        </div>

        {/* Emergency Notice */}
        <div className="mt-8 bg-red-50 border border-red-200 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <span className="material-symbols-outlined text-red-600 mt-0.5">emergency</span>
            <div>
              <p className="text-sm font-semibold text-red-800">Need Immediate Help?</p>
              <p className="text-sm text-red-700">
                If you are in immediate danger, call the emergency hotline at{' '}
                <a href="tel:555" className="font-bold hover:underline">
                  555
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-6">
          <Link
            to="/"
            className="text-sm text-gray-600 hover:text-blue-700 flex items-center justify-center gap-2 transition-colors"
          >
            <span className="material-symbols-outlined text-lg">arrow_back</span>
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Login;
