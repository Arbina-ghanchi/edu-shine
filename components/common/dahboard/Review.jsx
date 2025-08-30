// components/common/dashboard/ReviewManagement.jsx
"use client";
import React, { useState, useEffect } from "react";
import {
  Star,
  User,
  BookOpen,
  Calendar,
  Search,
  Filter,
  Plus,
  Edit,
  Trash2,
  Download,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

export const ReviewManagement = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      studentName: "Emily Johnson",
      studentId: "STU001",
      course: "Mathematics 101",
      rating: 4.5,
      review: "Emily shows excellent problem-solving skills but needs to improve attendance.",
      date: "2024-03-15",
      status: "published",
    },
    {
      id: 2,
      studentName: "Michael Chen",
      studentId: "STU002",
      course: "Physics 201",
      rating: 3.8,
      review: "Michael is engaged in class but struggles with lab reports.",
      date: "2024-03-10",
      status: "published",
    },
    {
      id: 3,
      studentName: "Sarah Williams",
      studentId: "STU003",
      course: "Literature 150",
      rating: 4.2,
      review: "Sarah's essays are thoughtful but often submitted late.",
      date: "2024-03-05",
      status: "draft",
    },
    {
      id: 4,
      studentName: "David Brown",
      studentId: "STU004",
      course: "History 210",
      rating: 4.7,
      review: "David participates actively and demonstrates deep understanding of historical contexts.",
      date: "2024-02-28",
      status: "published",
    },
    {
      id: 5,
      studentName: "Jessica Martinez",
      studentId: "STU005",
      course: "Chemistry 101",
      rating: 3.5,
      review: "Jessica needs to improve her performance in practical experiments.",
      date: "2024-02-20",
      status: "published",
    },
  ]);

  const [filteredReviews, setFilteredReviews] = useState(reviews);
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("date");
  const [sortOrder, setSortOrder] = useState("desc");
  const [showAddForm, setShowAddForm] = useState(false);
  const [newReview, setNewReview] = useState({
    studentName: "",
    studentId: "",
    course: "",
    rating: 0,
    review: "",
    status: "draft",
  });

  useEffect(() => {
    let result = reviews;

    // Apply filter
    if (filter !== "all") {
      result = result.filter((review) => review.status === filter);
    }

    // Apply search
    if (searchTerm) {
      result = result.filter(
        (review) =>
          review.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          review.course.toLowerCase().includes(searchTerm.toLowerCase()) ||
          review.studentId.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply sorting
    result.sort((a, b) => {
      if (sortBy === "date") {
        return sortOrder === "asc" 
          ? new Date(a.date) - new Date(b.date) 
          : new Date(b.date) - new Date(a.date);
      } else if (sortBy === "rating") {
        return sortOrder === "asc" ? a.rating - b.rating : b.rating - a.rating;
      } else if (sortBy === "name") {
        return sortOrder === "asc" 
          ? a.studentName.localeCompare(b.studentName) 
          : b.studentName.localeCompare(a.studentName);
      }
      return 0;
    });

    setFilteredReviews(result);
  }, [filter, searchTerm, reviews, sortBy, sortOrder]);

  const handleSort = (column) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(column);
      setSortOrder("desc");
    }
  };

  const addReview = () => {
    if (newReview.studentName && newReview.course && newReview.rating > 0) {
      const review = {
        id: reviews.length + 1,
        ...newReview,
        date: new Date().toISOString().split("T")[0],
      };
      setReviews([review, ...reviews]);
      setNewReview({
        studentName: "",
        studentId: "",
        course: "",
        rating: 0,
        review: "",
        status: "draft",
      });
      setShowAddForm(false);
    }
  };

  const deleteReview = (id) => {
    setReviews(reviews.filter((review) => review.id !== id));
  };

  const toggleStatus = (id) => {
    setReviews(
      reviews.map((review) =>
        review.id === id
          ? {
              ...review,
              status: review.status === "published" ? "draft" : "published",
            }
          : review
      )
    );
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />);
      } else {
        stars.push(<Star key={i} className="w-4 h-4 text-gray-300" />);
      }
    }

    return <div className="flex">{stars}</div>;
  };

  const getStatusBadge = (status) => {
    return status === "published" ? (
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
        Published
      </span>
    ) : (
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
        Draft
      </span>
    );
  };

  const SortIcon = ({ column }) => {
    if (sortBy !== column) return <ChevronDown className="w-4 h-4 opacity-50" />;
    return sortOrder === "asc" ? (
      <ChevronUp className="w-4 h-4" />
    ) : (
      <ChevronDown className="w-4 h-4" />
    );
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
      <div className="flex items-center gap-2 mb-6">
        <Star className="w-6 h-6 text-yellow-500" />
        <h2 className="text-xl font-semibold">Student Reviews</h2>
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="ml-auto inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
        >
          <Plus className="w-4 h-4 mr-1" />
          Add Review
        </button>
      </div>

      {/* Add Review Form */}
      {showAddForm && (
        <div className="mb-6 p-4 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-medium mb-3">Add New Review</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Student Name
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                value={newReview.studentName}
                onChange={(e) =>
                  setNewReview({ ...newReview, studentName: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Student ID
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                value={newReview.studentId}
                onChange={(e) =>
                  setNewReview({ ...newReview, studentId: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Course
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                value={newReview.course}
                onChange={(e) =>
                  setNewReview({ ...newReview, course: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Rating (0-5)
              </label>
              <input
                type="number"
                min="0"
                max="5"
                step="0.5"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                value={newReview.rating}
                onChange={(e) =>
                  setNewReview({ ...newReview, rating: parseFloat(e.target.value) })
                }
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Review
              </label>
              <textarea
                rows="3"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                value={newReview.review}
                onChange={(e) =>
                  setNewReview({ ...newReview, review: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Status
              </label>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                value={newReview.status}
                onChange={(e) =>
                  setNewReview({ ...newReview, status: e.target.value })
                }
              >
                <option value="draft">Draft</option>
                <option value="published">Publish</option>
              </select>
            </div>
          </div>
          <div className="flex justify-end mt-4 space-x-2">
            <button
              onClick={() => setShowAddForm(false)}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
            >
              Cancel
            </button>
            <button
              onClick={addReview}
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
            >
              Save Review
            </button>
          </div>
        </div>
      )}

      {/* Stats Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="text-sm font-medium text-blue-800">Total Reviews</div>
          <div className="text-2xl font-bold text-blue-900">{reviews.length}</div>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <div className="text-sm font-medium text-green-800">Published</div>
          <div className="text-2xl font-bold text-green-900">
            {reviews.filter((r) => r.status === "published").length}
          </div>
        </div>
        <div className="bg-yellow-50 p-4 rounded-lg">
          <div className="text-sm font-medium text-yellow-800">Drafts</div>
          <div className="text-2xl font-bold text-yellow-900">
            {reviews.filter((r) => r.status === "draft").length}
          </div>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg">
          <div className="text-sm font-medium text-purple-800">Avg. Rating</div>
          <div className="text-2xl font-bold text-purple-900">
            {(
              reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
            ).toFixed(1)}
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setFilter("all")}
            className={`px-3 py-1.5 text-sm rounded-md ${
              filter === "all"
                ? "bg-blue-100 text-blue-800"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("published")}
            className={`px-3 py-1.5 text-sm rounded-md ${
              filter === "published"
                ? "bg-green-100 text-green-800"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            Published
          </button>
          <button
            onClick={() => setFilter("draft")}
            className={`px-3 py-1.5 text-sm rounded-md ${
              filter === "draft"
                ? "bg-yellow-100 text-yellow-800"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            Drafts
          </button>
        </div>

        <div className="flex gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search students or courses..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="inline-flex items-center px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
            <Download className="w-4 h-4 mr-1" />
            Export
          </button>
        </div>
      </div>

      {/* Reviews Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => handleSort("name")}
              >
                <div className="flex items-center">
                  Student
                  <SortIcon column="name" />
                </div>
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Course
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => handleSort("rating")}
              >
                <div className="flex items-center">
                  Rating
                  <SortIcon column="rating" />
                </div>
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Review
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => handleSort("date")}
              >
                <div className="flex items-center">
                  Date
                  <SortIcon column="date" />
                </div>
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Status
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredReviews.map((review) => (
              <tr key={review.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <User className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {review.studentName}
                      </div>
                      <div className="text-xs text-gray-500">
                        {review.studentId}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <div className="flex items-center">
                    <BookOpen className="w-4 h-4 mr-1 text-gray-400" />
                    {review.course}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    {renderStars(review.rating)}
                    <span className="ml-2 text-sm text-gray-500">
                      ({review.rating})
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500 max-w-xs">
                  <div className="line-clamp-2">{review.review}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1 text-gray-400" />
                    {review.date}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {getStatusBadge(review.status)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <div className="flex space-x-2">
                    <button
                      onClick={() => toggleStatus(review.id)}
                      className={`p-1 rounded ${
                        review.status === "published"
                          ? "text-yellow-600 hover:bg-yellow-100"
                          : "text-green-600 hover:bg-green-100"
                      }`}
                    >
                      {review.status === "published" ? "Unpublish" : "Publish"}
                    </button>
                    <button className="p-1 text-blue-600 rounded hover:bg-blue-100">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => deleteReview(review.id)}
                      className="p-1 text-red-600 rounded hover:bg-red-100"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredReviews.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No reviews found
          </div>
        )}
      </div>
    </div>
  );
};