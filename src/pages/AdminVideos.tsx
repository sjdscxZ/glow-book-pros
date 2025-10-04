import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Plus, Trash2, Eye, EyeOff } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Video {
  id: string;
  title: string;
  youtube_url: string;
  description: string | null;
  display_order: number;
  is_active: boolean;
}

const AdminVideos = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(false);
  const [newVideo, setNewVideo] = useState({
    title: "",
    youtube_url: "",
    description: "",
  });
  const { toast } = useToast();

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const { data, error } = await supabase
        .from("youtube_videos")
        .select("*")
        .order("display_order", { ascending: true });

      if (error) throw error;
      setVideos(data || []);
    } catch (error) {
      console.error("Error fetching videos:", error);
      toast({
        title: "Error",
        description: "Failed to fetch videos",
        variant: "destructive",
      });
    }
  };

  const handleAddVideo = async () => {
    if (!newVideo.title || !newVideo.youtube_url) {
      toast({
        title: "Error",
        description: "Title and YouTube URL are required",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabase.from("youtube_videos").insert([
        {
          ...newVideo,
          display_order: videos.length,
        },
      ]);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Video added successfully",
      });

      setNewVideo({ title: "", youtube_url: "", description: "" });
      fetchVideos();
    } catch (error) {
      console.error("Error adding video:", error);
      toast({
        title: "Error",
        description: "Failed to add video",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleToggleActive = async (id: string, currentState: boolean) => {
    try {
      const { error } = await supabase
        .from("youtube_videos")
        .update({ is_active: !currentState })
        .eq("id", id);

      if (error) throw error;

      toast({
        title: "Success",
        description: `Video ${!currentState ? "activated" : "deactivated"}`,
      });

      fetchVideos();
    } catch (error) {
      console.error("Error toggling video:", error);
      toast({
        title: "Error",
        description: "Failed to update video",
        variant: "destructive",
      });
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this video?")) return;

    try {
      const { error } = await supabase
        .from("youtube_videos")
        .delete()
        .eq("id", id);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Video deleted successfully",
      });

      fetchVideos();
    } catch (error) {
      console.error("Error deleting video:", error);
      toast({
        title: "Error",
        description: "Failed to delete video",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-4xl font-bold mb-8 text-foreground font-heading">
            Manage YouTube Videos
          </h1>

          {/* Add New Video Form */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Add New Video</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Title *
                  </label>
                  <Input
                    placeholder="Video title"
                    value={newVideo.title}
                    onChange={(e) =>
                      setNewVideo({ ...newVideo, title: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    YouTube URL *
                  </label>
                  <Input
                    placeholder="https://www.youtube.com/watch?v=..."
                    value={newVideo.youtube_url}
                    onChange={(e) =>
                      setNewVideo({ ...newVideo, youtube_url: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Description
                  </label>
                  <Textarea
                    placeholder="Video description"
                    value={newVideo.description}
                    onChange={(e) =>
                      setNewVideo({ ...newVideo, description: e.target.value })
                    }
                  />
                </div>
                <Button
                  onClick={handleAddVideo}
                  disabled={loading}
                  className="w-full md:w-auto"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Video
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Video List */}
          <div className="space-y-4">
            {videos.map((video) => (
              <Card key={video.id}>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-4 items-start">
                    <div className="w-full md:w-48 aspect-video">
                      <iframe
                        src={`https://www.youtube.com/embed/${
                          video.youtube_url.split("v=")[1]?.split("&")[0] ||
                          video.youtube_url.split("/").pop()
                        }`}
                        className="w-full h-full rounded-lg"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2">
                        {video.title}
                      </h3>
                      {video.description && (
                        <p className="text-sm text-muted-foreground mb-2">
                          {video.description}
                        </p>
                      )}
                      <p className="text-xs text-muted-foreground">
                        Display Order: {video.display_order}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() =>
                          handleToggleActive(video.id, video.is_active)
                        }
                      >
                        {video.is_active ? (
                          <Eye className="w-4 h-4" />
                        ) : (
                          <EyeOff className="w-4 h-4" />
                        )}
                      </Button>
                      <Button
                        variant="destructive"
                        size="icon"
                        onClick={() => handleDelete(video.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AdminVideos;
