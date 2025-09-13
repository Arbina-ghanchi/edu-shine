"use client";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Head from "next/head";
import { getTeacherDetails } from "@/service/adminService";

const TeacherDetailsPage = () => {
  const router = useRouter();
  const { id } = useParams();
  const [teacher, setTeacher] = useState(null);
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeacherDetails = async () => {
      if (!id) return;

      try {
        setLoading(true);
        const response = await getTeacherDetails(id);

        if (response.success) {
          setTeacher(response.data.teacherFormDetails);
          setUserDetails(response.data.userDetails);
        } else {
          setError("Failed to load teacher details");
        }
      } catch (err) {
        setError("Error fetching teacher details");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTeacherDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="container">
        <div className="loading">Loading teacher details...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container">
        <div className="error">{error}</div>
      </div>
    );
  }

  if (!teacher || !userDetails) {
    return (
      <div className="container">
        <div className="error">Teacher not found</div>
      </div>
    );
  }

  return (
    <div className="container">
      <Head>
        <title>{teacher.fullName} - Teacher Details</title>
      </Head>

      <button onClick={() => router.back()} className="back-button">
        ← Back to Dashboard
      </button>

      <div className="teacher-header">
        <div className="teacher-avatar">
          {teacher.fullName?.charAt(0).toUpperCase() || "T"}
        </div>
        <div className="teacher-info">
          <h1>{teacher.fullName}</h1>
          <p className="teacher-email">{userDetails.email}</p>
          <span className={`role-badge ${userDetails.role}`}>
            {userDetails.role}
          </span>
        </div>
      </div>

      <div className="teacher-details">
        <div className="detail-section">
          <h2>Personal Information</h2>
          <div className="detail-grid">
            <div className="detail-item">
              <label>Phone</label>
              <span>{teacher.phone || "Not provided"}</span>
            </div>
            <div className="detail-item">
              <label>Address</label>
              <span>{teacher.address || "Not provided"}</span>
            </div>
            <div className="detail-item">
              <label>Gender</label>
              <span>{teacher.gender || "Not provided"}</span>
            </div>
            <div className="detail-item">
              <label>Date of Birth</label>
              <span>
                {teacher.dateOfBirth
                  ? new Date(teacher.dateOfBirth).toLocaleDateString()
                  : "Not provided"}
              </span>
            </div>
          </div>
        </div>

        <div className="detail-section">
          <h2>Professional Information</h2>
          <div className="detail-grid">
            <div className="detail-item">
              <label>Highest Qualification</label>
              <span>{teacher.highestQualification || "Not provided"}</span>
            </div>
            <div className="detail-item">
              <label>Current Profession</label>
              <span>{teacher.currentProfession || "Not provided"}</span>
            </div>
            <div className="detail-item">
              <label>Years of Experience</label>
              <span>{teacher.yearsOfExperience || "Not provided"}</span>
            </div>
            <div className="detail-item">
              <label>Languages Spoken</label>
              <span>{teacher.languagesSpoken || "Not provided"}</span>
            </div>
          </div>
        </div>

        <div className="detail-section">
          <h2>Teaching Information</h2>
          <div className="detail-grid">
            <div className="detail-item">
              <label>Grade Levels Taught</label>
              <span>{teacher.gradeLevelsTaught || "Not provided"}</span>
            </div>
            <div className="detail-item">
              <label>Curriculum Expertise</label>
              <span>{teacher.curriculumExpertise || "Not provided"}</span>
            </div>
            <div className="detail-item">
              <label>Teaching Certifications</label>
              <span>{teacher.teachingCertifications || "Not provided"}</span>
            </div>
            <div className="detail-item">
              <label>Teaching Methodology</label>
              <span>{teacher.teachingMethodology || "Not provided"}</span>
            </div>
          </div>
        </div>

        <div className="detail-section">
          <h2>Availability</h2>
          <div className="detail-grid">
            <div className="detail-item">
              <label>Teaching Mode</label>
              <span>{teacher.teachingMode || "Not provided"}</span>
            </div>
            <div className="detail-item">
              <label>Available Days</label>
              <span>
                {teacher.availableDays && teacher.availableDays.length > 0
                  ? teacher.availableDays.join(", ")
                  : "Not provided"}
              </span>
            </div>
            <div className="detail-item">
              <label>Available Time Slots</label>
              <span>{teacher.availableTimeSlots || "Not provided"}</span>
            </div>
            <div className="detail-item">
              <label>Preferred Session Duration</label>
              <span>{teacher.preferredSessionDuration || "Not provided"}</span>
            </div>
          </div>
        </div>

        <div className="detail-section">
          <h2>Tuition Preferences</h2>
          <div className="detail-grid">
            <div className="detail-item">
              <label>Minimum Fee</label>
              <span>
                {teacher.minimumFee ? `₹${teacher.minimumFee}` : "Not provided"}
              </span>
            </div>
            <div className="detail-item">
              <label>Preferred Payment Method</label>
              <span>{teacher.preferredPaymentMethod || "Not provided"}</span>
            </div>
            <div className="detail-item">
              <label>Travel Radius</label>
              <span>{teacher.travelRadius || "Not provided"}</span>
            </div>
            <div className="detail-item">
              <label>Online Teaching Tools</label>
              <span>{teacher.onlineTeachingTools || "Not provided"}</span>
            </div>
          </div>
        </div>

        <div className="detail-section">
          <h2>Additional Information</h2>
          <div className="detail-grid-full">
            <div className="detail-item-full">
              <label>Bio</label>
              <p>{teacher.bio || "Not provided"}</p>
            </div>
            <div className="detail-item-full">
              <label>Teaching Philosophy</label>
              <p>{teacher.teachingPhilosophy || "Not provided"}</p>
            </div>
            <div className="detail-item-full">
              <label>Achievements</label>
              <p>{teacher.achievements || "Not provided"}</p>
            </div>
          </div>
        </div>

        <div className="detail-section">
          <h2>Application Status</h2>
          <div className="detail-grid">
            <div className="detail-item">
              <label>Status</label>
              <span
                className={`status-badge ${teacher.applicationStatus?.toLowerCase()}`}
              >
                {teacher.applicationStatus || "Not provided"}
              </span>
            </div>
            <div className="detail-item">
              <label>Created At</label>
              <span>
                {teacher.createdAt
                  ? new Date(teacher.createdAt).toLocaleDateString()
                  : "Not provided"}
              </span>
            </div>
            <div className="detail-item">
              <label>Last Updated</label>
              <span>
                {teacher.updatedAt
                  ? new Date(teacher.updatedAt).toLocaleDateString()
                  : "Not provided"}
              </span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .container {
          max-width: 1000px;
          margin: 0 auto;
          padding: 20px;
        }
        .back-button {
          background: none;
          border: none;
          color: #3b82f6;
          cursor: pointer;
          font-size: 16px;
          margin-bottom: 20px;
          padding: 8px 0;
        }
        .back-button:hover {
          color: #2563eb;
        }
        .teacher-header {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 30px;
          padding: 20px;
          background: white;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .teacher-avatar {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: #3b82f6;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 32px;
          font-weight: bold;
        }
        .teacher-info h1 {
          margin: 0 0 8px 0;
          color: #1f2937;
        }
        .teacher-email {
          color: #6b7280;
          margin: 0 0 12px 0;
        }
        .role-badge {
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 14px;
          text-transform: capitalize;
        }
        .role-badge.teacher {
          background-color: #fce7f3;
          color: #be185d;
        }
        .status-badge {
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 14px;
          text-transform: capitalize;
        }
        .status-badge.pending {
          background-color: #fef3c7;
          color: #d97706;
        }
        .status-badge.approved {
          background-color: #d1fae5;
          color: #065f46;
        }
        .status-badge.rejected {
          background-color: #fee2e2;
          color: #dc2626;
        }
        .teacher-details {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .detail-section {
          background: white;
          padding: 24px;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .detail-section h2 {
          margin: 0 0 20px 0;
          color: #374151;
          border-bottom: 2px solid #f3f4f6;
          padding-bottom: 12px;
        }
        .detail-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 16px;
        }
        .detail-grid-full {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .detail-item,
        .detail-item-full {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .detail-item label,
        .detail-item-full label {
          font-weight: 600;
          color: #6b7280;
          font-size: 14px;
        }
        .detail-item span {
          color: #1f2937;
          font-size: 16px;
        }
        .detail-item-full p {
          color: #1f2937;
          margin: 0;
          line-height: 1.5;
          background: #f9fafb;
          padding: 12px;
          border-radius: 6px;
          border-left: 4px solid #3b82f6;
        }
        .loading,
        .error {
          text-align: center;
          padding: 40px;
          font-size: 18px;
        }
        .error {
          color: #ef4444;
        }

        @media (max-width: 768px) {
          .teacher-header {
            flex-direction: column;
            text-align: center;
          }
          .detail-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default TeacherDetailsPage;
