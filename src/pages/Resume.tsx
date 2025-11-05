import { PDFDownloadLink } from '@react-pdf/renderer';
import ResumePDF from './ResumePDF';

function Resume() {
  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Resume</h1>
      <PDFDownloadLink document={<ResumePDF />} fileName="resume.pdf">
        {({ blob, url, loading, error }) =>
          loading ? 'Loading document...' : <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-8 inline-block">Download Resume</button>
        }
      </PDFDownloadLink>
      <p className="mb-4">I am a passionate professional with expertise in modern web development and a strong focus on creating user-friendly applications.</p>
      <p className="mb-4">My experience includes working with cutting-edge technologies and frameworks to deliver high-quality solutions.</p>
      <p className="mb-4">I am committed to continuous learning and staying up-to-date with the latest industry trends and best practices.</p>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Programming Skills</h2>
        <ul className="space-y-4">
          <li className="flex items-center">
            <span className="w-32">Python</span>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div className="bg-blue-500 h-4 rounded-full" style={{ width: '90%' }}></div>
            </div>
          </li>
          <li className="flex items-center">
            <span className="w-32">JavaScript</span>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div className="bg-blue-500 h-4 rounded-full" style={{ width: '95%' }}></div>
            </div>
          </li>
          <li className="flex items-center">
            <span className="w-32">TypeScript</span>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div className="bg-blue-500 h-4 rounded-full" style={{ width: '85%' }}></div>
            </div>
          </li>
          <li className="flex items-center">
            <span className="w-32">React</span>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div className="bg-blue-500 h-4 rounded-full" style={{ width: '95%' }}></div>
            </div>
          </li>
          <li className="flex items-center">
            <span className="w-32">Node.js</span>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div className="bg-blue-500 h-4 rounded-full" style={{ width: '80%' }}></div>
            </div>
          </li>
          <li className="flex items-center">
            <span className="w-32">CSS</span>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div className="bg-blue-500 h-4 rounded-full" style={{ width: '90%' }}></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Resume
