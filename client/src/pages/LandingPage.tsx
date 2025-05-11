import { ArrowRight, CreditCard, Smartphone, Zap } from "lucide-react"

export const LandingPage = () => {
    return (
        <div className="flex flex-col min-h-screen">

          <header className="border-b border-gray-100">
            <div className="container flex items-center justify-between h-16 px-4 mx-auto md:px-6">
              <a href="/" className="flex items-center">
                <span className="text-2xl font-bold text-blue-900">PayTM</span>
              </a>
              <nav className="hidden space-x-6 md:flex ">
                <a href="#" className="text-sm font-medium text-gray-600 hover:text-blue-600 duration-300">
                  Personal
                </a>
                <a href="#" className="text-sm font-medium text-gray-600 hover:text-blue-600 duration-300">
                  Business
                </a>
                <a href="#" className="text-sm font-medium text-gray-600 hover:text-blue-600 duration-300">
                  Features
                </a>
                <a href="#" className="text-sm font-medium text-gray-600 hover:text-blue-600 duration-300">
                  About
                </a>
              </nav>
              <div className="flex items-center space-x-4">
                <a href="#" className="hidden text-sm font-medium text-gray-600 hover:text-blue-600 md:block">
                  Login
                </a>
                <button className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded-lg text-white">Sign Up</button>
              </div>
            </div>
          </header>
    
          <section className="py-20 bg-white">
            <div className="container px-4 mx-auto md:px-6">
              <div className="grid items-center gap-12 md:grid-cols-2">
                <div className="space-y-6">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                    Fast, secure payments for everyone
                  </h1>
                  <p className="text-lg text-gray-600">
                    Send money, pay bills, recharge mobile, and make secure payments with PayEase - the simplest payment
                    solution.
                  </p>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <button className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded-lg text-white">Download App</button>
                    <button className="border-blue-600 text-blue-600 hover:bg-blue-50 px-3 py-1 rounded-lg duration-200">
                      Learn More
                    </button>
                  </div>
                </div>
                <div className="relative h-[400px] w-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl transform rotate-3 opacity-10"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src="https://imgs.search.brave.com/RE-KXKZbJPgfZ7lSHKRmP-WO7l3USRDjt6CGfM2GeNI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by90/ZWNobm9sb2d5LWJh/bmtpbmctc3BhY2Ut/aG9sZGluZy1jYXJk/LWJ1c2luZXNzXzE0/MjEtMjU3LmpwZz9z/ZW10PWFpc19oeWJy/aWQmdz03NDA"
                      alt="PayEase Mobile App"
                      className="h-auto max-w-full rounded-xl shadow-lg "
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
    
          <section className="py-20 bg-gray-50">
            <div className="container px-4 mx-auto md:px-6">
              <div className="flex flex-col items-center mb-12 text-center">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Why choose PayEase?</h2>
                <p className="mt-4 text-lg text-gray-600 max-w-2xl">
                  Experience the simplest way to manage all your payments in one place
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-3">
                <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-lg hover:shadow-black/20 duration-300">
                  <div className="flex items-center justify-center w-12 h-12 mb-4 bg-blue-100 rounded-full ">
                    <Zap className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">Lightning Fast</h3>
                  <p className="text-gray-600">Instant transfers and payments processed within seconds, not days.</p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-lg hover:shadow-black/20 duration-300">
                  <div className="flex items-center justify-center w-12 h-12 mb-4 bg-blue-100 rounded-full">
                    <CreditCard className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">Secure Payments</h3>
                  <p className="text-gray-600">Bank-grade security with end-to-end encryption for all transactions.</p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-lg hover:shadow-black/20 duration-300">
                  <div className="flex items-center justify-center w-12 h-12 mb-4 bg-blue-100 rounded-full">
                    <Smartphone className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">Mobile First</h3>
                  <p className="text-gray-600">Designed for the modern user with intuitive mobile experience.</p>
                </div>
              </div>
            </div>
          </section>
    
          <section className="py-20 bg-white">
            <div className="container px-4 mx-auto md:px-6">
              <div className="flex flex-col items-center mb-12 text-center">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">How It Works</h2>
                <p className="mt-4 text-lg text-gray-600 max-w-2xl">Get started with PayEase in three simple steps</p>
              </div>
              <div className="grid gap-8 md:grid-cols-3">
                <div className="relative p-6">
                  <div className="flex items-center justify-center w-12 h-12 mb-4 text-white bg-blue-600 rounded-full">
                    1
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">Download the App</h3>
                  <p className="text-gray-600">Get our app from the App Store or Google Play Store.</p>
                  <div className="absolute top-0 right-0 hidden w-16 h-0.5 bg-blue-200 md:block"></div>
                </div>
                <div className="relative p-6">
                  <div className="flex items-center justify-center w-12 h-12 mb-4 text-white bg-blue-600 rounded-full">
                    2
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">a Your Account</h3>
                  <p className="text-gray-600">Connect your bank account or cards securely.</p>
                  <div className="absolute top-0 right-0 hidden w-16 h-0.5 bg-blue-200 md:block"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-center w-12 h-12 mb-4 text-white bg-blue-600 rounded-full">
                    3
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">Start Transacting</h3>
                  <p className="text-gray-600">Send money, pay bills, or shop online instantly.</p>
                </div>
              </div>
            </div>
          </section>
    
          <section className="py-20 bg-blue-600 text-white">
            <div className="container px-4 mx-auto text-center md:px-6">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to get started?</h2>
              <p className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto">
                Join millions of users who trust PayEase for their daily transactions
              </p>
              <div className="flex flex-col items-center justify-center gap-4 mt-8 sm:flex-row">
                <button className="bg-white text-blue-600 hover:bg-gray-100 px-3 py-1 rounded-lg duration-200">Download App</button>
                <button className="border-white flex items-center px-3 py-1 rounded-lg duration-200 text-white hover:bg-blue-700">
                  Learn More <ArrowRight className="ml-2 h-4 w-4 hover:translate-x-1 duration-300" />
                </button>
              </div>
            </div>
          </section>
    
          <footer className="py-12 bg-gray-50">
            <div className="container px-4 mx-auto md:px-6">
              <div className="grid gap-8 md:grid-cols-4">
                <div>
                  <a href="/" className="flex items-center mb-4">
                    <span className="text-xl font-bold text-blue-600">PayTM</span>
                  </a>
                  <p className="text-sm text-gray-600">Making payments simple, fast, and secure for everyone.</p>
                </div>
                <div>
                  <h3 className="mb-4 text-sm font-semibold">Product</h3>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a href="#" className="text-gray-600 hover:text-blue-600">
                        Features
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-600 hover:text-blue-600">
                        Security
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-600 hover:text-blue-600">
                        Business
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-600 hover:text-blue-600">
                        Enterprise
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="mb-4 text-sm font-semibold">Company</h3>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a href="#" className="text-gray-600 hover:text-blue-600">
                        About
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-600 hover:text-blue-600">
                        Careers
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-600 hover:text-blue-600">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-600 hover:text-blue-600">
                        Press
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="mb-4 text-sm font-semibold">Legal</h3>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a href="#" className="text-gray-600 hover:text-blue-600">
                        Privacy
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-600 hover:text-blue-600">
                        Terms
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-600 hover:text-blue-600">
                        Cookies
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-600 hover:text-blue-600">
                        Licenses
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="pt-8 mt-8 border-t border-gray-200">
                <p className="text-sm text-center text-gray-600">
                  © {new Date().getFullYear()} PayTM. All rights reserved.
                </p>
              </div>
            </div>
          </footer>
        </div>
      )
} 