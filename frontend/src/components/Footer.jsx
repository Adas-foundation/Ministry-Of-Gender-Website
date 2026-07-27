const Footer = () => {
  return (
    <footer className="bg-[#00236f] text-white w-full mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-10 py-8 gap-4 w-full max-w-[1280px] mx-auto">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-3">
            <span className="text-[20px] text-white font-bold font-['Poppins']">SafeReport</span>
            <span className="h-6 w-[1px] bg-white/30"></span>
            <span className="text-[14px] opacity-80 font-['Inter']">Republic of Malawi</span>
          </div>
          <p className="text-[16px] text-white/80 text-center md:text-left font-['Inter']">
            © 2026 Ministry of Gender, Community Development and Social Welfare 
          </p>
        </div>
        <nav className="flex flex-wrap justify-center gap-6">
          <a className="text-white/80 font-['Inter'] hover:text-white hover:underline transition-colors" href="#">Privacy Policy</a>
          <a className="text-white/80 font-['Inter'] hover:text-white hover:underline transition-colors" href="#">Terms of Service</a>
          <a className="text-white/80 font-['Inter'] hover:text-white hover:underline transition-colors" href="#">Help Desk</a>
          <a className="text-white/80 font-['Inter'] hover:text-white hover:underline transition-colors" href="#">Contact Us</a>
        </nav>
        <div className="flex gap-4">
          <a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors" href="#">
            <span className="material-symbols-outlined text-[20px]">public</span>
          </a>
          <a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors" href="#">
            <span className="material-symbols-outlined text-[20px]">share</span>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
