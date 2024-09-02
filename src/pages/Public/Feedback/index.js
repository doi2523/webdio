import React, { useState, useEffect } from "react";
import { database, storage } from "../../../Firebase/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { ref as dbRef, push, onValue, update, get } from "firebase/database";
import { getAuth } from "firebase/auth";
import FeedbackList from "./FeedbackList";
import FeedbackForm from "./FeedbackForm";
import { AddIcon } from "../../../Icons";

const Feedback = () => {
  const [content, setContent] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [feedbacks, setFeedbacks] = useState([]);
  const [formVisible, setFormVisible] = useState(false);
  const [error, setError] = useState("");
  const [user, setUser] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const feedbackRef = dbRef(database, "feedbacks");

    const unsubscribe = onValue(feedbackRef, (snapshot) => {
      const data = snapshot.val();
      const feedbackArray = [];

      for (const id in data) {
        feedbackArray.push({ id, ...data[id] });
      }

      // Sắp xếp phản hồi theo thời gian giảm dần (mới nhất lên trên cùng)
      feedbackArray.sort(
        (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
      );

      setFeedbacks(feedbackArray);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (formVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [formVisible]);

  const handleContentChange = (e) => setContent(e.target.value);
  const handleNameChange = (e) => setName(e.target.value);

  const handleImageChange = (e) => {
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      setImage(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!content || !name) {
      setError("Vui lòng điền đầy đủ thông tin.");
      return;
    }

    try {
      let imageUrl = "";
      if (image) {
        const storageRef = ref(storage, `feedback-images/${image.name}`);
        await uploadBytes(storageRef, image);
        imageUrl = await getDownloadURL(storageRef);
      }

      const newFeedback = {
        content,
        name,
        image: imageUrl,
        timestamp: new Date().toISOString(),
        likes: 0,
        shares: 0,
        likedBy: [],
        tag: "locketgold",
      };

      await push(dbRef(database, "feedbacks"), newFeedback);

      setContent("");
      setName("");
      setImage(null);
      setError("");
      setFormVisible(false);
    } catch (err) {
      setError("Đã xảy ra lỗi. Vui lòng thử lại.");
    }
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString("vi-VN", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const handleLike = async (feedbackId) => {
    if (!user) {
      alert("Vui lòng đăng nhập để thích.");
      return;
    }

    const feedbackRef = dbRef(database, `feedbacks/${feedbackId}`);
    const feedbackSnapshot = await get(feedbackRef);
    const feedbackData = feedbackSnapshot.val();

    if (feedbackData) {
      const userId = user.uid;
      const likedBy = feedbackData.likedBy || [];

      // Kiểm tra xem người dùng đã thả lượt thích chưa
      if (!likedBy.includes(userId)) {
        const newLikes = (feedbackData.likes || 0) + 1;
        likedBy.push(userId); // Thêm userId vào danh sách likedBy

        await update(feedbackRef, {
          likes: newLikes,
          likedBy: likedBy,
        });
      } else {
        alert("Bạn đã thả lượt thích cho phản hồi này.");
      }
    }
  };
  const handleComment = (feedbackId) => {
    if (!user) {
      alert("Vui lòng đăng nhập để bình luận.");
      return;
    }
    // Hiển thị form bình luận hoặc xử lý tương tác bình luận ở đây
  };

  const handleShare = async (feedbackId) => {
    if (!user) {
      alert("Vui lòng đăng nhập để chia sẻ.");
      return;
    }

    const feedbackRef = dbRef(database, `feedbacks/${feedbackId}`);
    const feedbackSnapshot = await get(feedbackRef);
    const feedbackData = feedbackSnapshot.val();

    if (feedbackData) {
      const newShares = (feedbackData.shares || 0) + 1;

      await update(feedbackRef, {
        shares: newShares,
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 dark:bg-gray-900">
      <div className="relative w-full max-w-3xl p-4">
        <button
          onClick={() => setFormVisible(true)}
          className="fixed bottom-4 right-4 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 z-50"
        >
          <AddIcon className="h-6 w-6" />
        </button>

        <FeedbackList
          feedbacks={feedbacks}
          onLike={handleLike}
          onComment={handleComment}
          onShare={handleShare}
          formatDate={formatDate}
          user={user}
        />
      </div>
      <FeedbackForm
        content={content}
        name={name}
        image={image}
        error={error}
        formVisible={formVisible}
        setFormVisible={setFormVisible}
        handleContentChange={handleContentChange}
        handleNameChange={handleNameChange}
        handleImageChange={handleImageChange}
        handleSubmit={handleSubmit}
        suggestions={suggestions}
        showSuggestions={showSuggestions}
        handleSuggestionClick={(suggestion) => {
          setContent((prevContent) => prevContent + suggestion);
          setShowSuggestions(false);
        }}
      />
    </div>
  );
};

export default Feedback;
