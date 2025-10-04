-- Create table for YouTube videos
CREATE TABLE public.youtube_videos (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  youtube_url TEXT NOT NULL,
  description TEXT,
  display_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.youtube_videos ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access
CREATE POLICY "Anyone can view active videos" 
ON public.youtube_videos 
FOR SELECT 
USING (is_active = true);

-- Create policy for authenticated users to manage videos (admin functionality)
CREATE POLICY "Authenticated users can manage videos" 
ON public.youtube_videos 
FOR ALL 
USING (auth.role() = 'authenticated');

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_youtube_videos_updated_at
BEFORE UPDATE ON public.youtube_videos
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert some demo videos
INSERT INTO public.youtube_videos (title, youtube_url, description, display_order) VALUES
('Beauty Transformation Tutorial', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', 'Amazing makeup transformation', 1),
('Spa & Wellness Tips', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', 'Relaxation techniques', 2),
('Hair Styling Masterclass', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', 'Professional hair styling', 3),
('Skincare Routine', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', 'Daily skincare essentials', 4);