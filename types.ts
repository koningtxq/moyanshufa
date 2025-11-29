export interface Course {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

export interface Teacher {
  name: string;
  title: string;
  description: string;
  achievements: string[];
  image: string;
}

export interface AiConsultationResult {
  poem: string;
  styleRecommendation: string;
  meaning: string;
}
