'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase, Gallery } from '@/lib/supabase';
import { ArrowLeft, Calendar, FileText, Image as ImageIcon, Tag } from 'lucide-react';

export default function NewGalleryPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [imagePreview, setImagePreview] = useState('');
  const [formData, setFormData] = useState<Partial<Gallery>>({
    title: '',
    description: '',
    image_url: '',
    event_name: '',
    date: '',
  });



  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));

    // Update image preview
    if (name === 'image_url') {
      setImagePreview(value);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // Validate required fields
      if (!formData.title || !formData.description || !formData.image_url || !formData.date) {
        throw new Error('Please fill in all required fields');
      }

      const { data, error } = await supabase
        .from('gallery')
        .insert([{
          title: formData.title,
          description: formData.description,
          image_url: formData.image_url,
          event_name: formData.event_name || null,
          date: formData.date,
        }])
        .select();

      if (error) throw error;

      alert('Gallery item created successfully!');
      router.push('/admin/gallery');
    } catch (err: any) {
      setError(err.message || 'Failed to create gallery item');
      console.error('Error creating gallery item:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <button
          onClick={() => router.push('/admin/gallery')}
          className="flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-4 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Gallery
        </button>
        <h1 className="text-2xl font-bold text-slate-900 mb-2">Add New Gallery Item</h1>
        <p className="text-slate-500">Fill in the details to add a new gallery item</p>
      </div>

      {error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-600">
          {error}
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
          <div className="space-y-6">
            {/* Image Preview */}
          {imagePreview && (
            <div className="mb-6">
              <label className="text-sm font-medium text-slate-700 mb-2 block">Image Preview</label>
              <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="w-full h-full object-cover"
                  onError={() => setImagePreview('')}
                />
              </div>
            </div>
          )}

          {/* Title */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-slate-700 mb-2">
              <FileText className="w-4 h-4" />
              Title *
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-slate-900 placeholder-slate-400"
              placeholder="Enter gallery item title"
            />
          </div>

          {/* Image URL */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-slate-700 mb-2">
              <ImageIcon className="w-4 h-4" />
              Image URL *
            </label>
            <input
              type="url"
              name="image_url"
              value={formData.image_url}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-slate-900 placeholder-slate-400"
              placeholder="https://example.com/image.jpg"
            />
            <p className="mt-2 text-xs text-slate-500">
              Enter a direct URL to the image. For uploading files, consider using Supabase Storage or another image hosting service.
            </p>
          </div>

          {/* Description */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-slate-700 mb-2">
              <FileText className="w-4 h-4" />
              Description *
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-slate-900 placeholder-slate-400 resize-none"
              placeholder="Enter a description for this gallery item"
            />
          </div>

          {/* Event Name and Date */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-slate-700 mb-2">
                <Tag className="w-4 h-4" />
                Event Name
              </label>
              <input
                type="text"
                name="event_name"
                value={formData.event_name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-slate-900 placeholder-slate-400"
                placeholder="Optional event name"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-slate-700 mb-2">
                <Calendar className="w-4 h-4" />
                Date *
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-slate-900"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              disabled={isLoading}
              className="flex-1 px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white rounded-xl font-medium transition-colors shadow-sm"
            >
              {isLoading ? 'Creating...' : 'Create Gallery Item'}
            </button>
            <button
              type="button"
              onClick={() => router.push('/admin/gallery')}
              className="px-6 py-3 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-xl font-medium transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      </form>

      {/* Upload Instructions */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
        <h3 className="font-semibold text-blue-700 mb-2">📸 Image Upload Instructions</h3>
        <div className="text-sm text-slate-600 space-y-2">
          <p>To upload images, you have several options:</p>
          <ol className="list-decimal list-inside space-y-1 ml-2">
            <li>Upload to Supabase Storage and use the public URL</li>
            <li>Use an external image hosting service (Imgur, Cloudinary, etc.)</li>
            <li>Host images in your public folder and reference them</li>
          </ol>
          <p className="mt-3 text-xs">
            For production, we recommend setting up Supabase Storage with proper bucket policies.
          </p>
        </div>
      </div>
    </div>
  );
}
