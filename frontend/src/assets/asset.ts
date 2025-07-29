
import JohnImg from '../assets/profileimage2.jpg';
import SarahImg from '../assets/profileimage1.jpg';
import AliImg from '../assets/profileimage3.jpg';
import EmilyImg from '../assets/profileimage5.jpg';
import DavidImg from '../assets/profileimage4.jpg';
import icon1 from '../assets/icone1.png'
import icon2 from '../assets/icone2.png'
import icon3 from '../assets/icone3.png'
import icon4 from '../assets/icone4.png'
import icon5 from '../assets/icone5.png'
import icon6 from '../assets/icone6.png'



export interface AiTool {
  title: string;
  description: string;
  icon: string; 
  bg: { from: string; to: string };
  path: string;
}

export interface Testimonial {
  image: string;
  name: string;
  title: string;
  content: string;
  rating: number;
}

export interface Creation {
  id: number;
  user_id: number;
  prompt: string;
   type: string;
  createdAt: string;
   content?: string;
}


export const AiToolsData: AiTool[] = [
  {
    title: 'AI Article Writer',
    description: 'Generate high-quality, engaging articles on any topic using AI writing technology.',
    icon: icon1,
    bg: { from: '#3588F2', to: '#0BB0D7' },
    path: '/ai/writer-article',
  },
  {
    title: 'Blog Title Generator',
    description: 'Create captivating blog titles effortlessly with AI.',
    icon: icon2,
    bg: { from: '#F29C18', to: '#F26F18' },
    path: '/ai/blog-tittles',
  },
  {
    title: 'AI Image Generator',
    description: 'Turn text prompts into stunning visuals using AI image generation.',
    icon: icon3,
    bg: { from: '#6C63FF', to: '#3F3DFF' },
    path: '/ai/image-generator',
  },
  {
    title: 'Background Removal',
    description: 'Easily remove image backgrounds with our AI-powered tool.',
    icon: icon4,
    bg: { from: '#2BC0E4', to: '#EAECC6' },
    path: '/ai/bg-removal',
  },
  {
    title: 'Object Removal',
    description: 'Remove unwanted objects from images quickly and seamlessly.',
    icon:icon5,
    bg: { from: '#F54EA2', to: '#FF7676' },
    path: '/ai/object-removal',
  },
  {
    title: 'Resume Reviewer',
    description: 'Enhance your resume with AI-powered review and suggestions.',
    icon:icon6,
    bg: { from: '#11998E', to: '#38EF7D' },
    path: '/ai/resume-review',
  },
];


export const TestimonialData: Testimonial[] = [
  {
    image: JohnImg,
    name: 'John Yeyo',
    title: 'Marketing Director',
    content: 'ContentAi has revolutionized our content creation process. It saves hours of work.',
    rating: 4,
  },
  {
    image: SarahImg,
    name: 'Sarah Lynn',
    title: 'Content Manager',
    content: 'Amazing tools for content planning and visuals. Highly recommended!',
    rating: 5,
  },
  {
    image: AliImg,
    name: 'Ali Khan',
    title: 'Freelance Writer',
    content: 'Perfect for drafting articles and creating fresh ideas instantly.',
    rating: 4,
  },
  {
    image: EmilyImg,
    name: 'Emily Jones',
    title: 'UX Designer',
    content: 'Visual tools like background removal are a lifesaver!',
    rating: 5,
  },
  {
    image: DavidImg,
    name: 'David Smith',
    title: 'Recruiter',
    content: 'The resume reviewer gave me helpful insights. Very impressed!',
    rating: 5,
  },
];


export const CreationData: Creation[] = [
  {
    id: 1,
    user_id: 1001,
    prompt: 'Write an article about the future of renewable energy.',
    type: 'Article',
    createdAt: '2025-07-18',
    content: 'The future of renewable energy lies in decentralized grids, solar AI systems, and smart energy storage...',
  },
  {
    id: 2,
    user_id: 1002,
    prompt: 'Generate a blog title about productivity hacks for remote work.',
    type: 'Blog Title',
    createdAt: '2025-07-17',
    content: '10 Productivity Hacks for Remote Workers You Should Know',
  },
  {
    id: 3,
    user_id: 1003,
    prompt: 'Create an image of a futuristic city with flying cars.',
    type: 'Image',
    createdAt: '2025-07-16',
    content: 'https://via.placeholder.com/300x200.png?text=Futuristic+City', 
  },
  {
    id: 4,
    user_id: 1004,
    prompt: 'Remove background from a photo of a person in a crowded street.',
    type: 'Background Removal',
    createdAt: '2025-07-15',
    content: 'https://via.placeholder.com/300x200.png?text=Background+Removed', 
  },
  {
    id: 5,
    user_id: 1005,
    prompt: 'Review a resume for a software developer with 5 years of experience.',
    type: 'Resume Review',
    createdAt: '2025-07-14',
    
  },
];
