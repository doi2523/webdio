import React, { useState, useEffect } from "react";
import { AddIcon, CancelIconV2, CommentIcon, HeartIcon, RedHeartIcon, ShareIcon } from "../../../Icons";
import { database, storage } from "../../../Firebase/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { ref as dbRef, push, onValue, update, get } from "firebase/database";
import { getAuth } from "firebase/auth";
import './styles.css'

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
      feedbackArray.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
  
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

      const img = new Image();
      img.src = URL.createObjectURL(file);

      img.onload = () => {
        const width = img.width;
        const height = img.height;
        const aspectRatio = width / height;

        if (
          aspectRatio === 9 / 16 ||
          file.type.includes("image/png") ||
          file.type.includes("image/jpeg")
        ) {
          setImage(file);
          setError("");
        } else {
          setError("Vui lòng chọn ảnh có tỷ lệ 9:16 hoặc ảnh chụp màn hình.");
        }
      };
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (content.trim() && name.trim()) {
      let imageUrl = null;

      if (image) {
        const imageRef = ref(storage, `feedback-images/${image.name}`);
        await uploadBytes(imageRef, image);
        imageUrl = await getDownloadURL(imageRef);
      }

      const newFeedback = {
        content,
        name,
        image: imageUrl,
        timestamp: new Date().toISOString(),
        likes: 0,
        likedBy: [], // Danh sách người dùng đã thả lượt thích
        comments: [],
        shares: 0
      };

      const feedbackRef = dbRef(database, "feedbacks");
      await push(feedbackRef, newFeedback);

      setContent("");
      setName("");
      setImage(null);
      setFormVisible(false);
    }
  };

  const handleComment = (feedbackId) => {
    if (!user) {
      alert("Vui lòng đăng nhập để bình luận.");
      return;
    }
    // Hiển thị form bình luận hoặc xử lý tương tác bình luận ở đây
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

  const formatDate = (timestamp) => {
    try {
      const date = new Date(timestamp);
      if (isNaN(date.getTime())) {
        throw new Error("Invalid date");
      }
      return new Intl.DateTimeFormat("vi-VN", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }).format(date);
    } catch (error) {
      console.error("Error formatting date:", error);
      return "Ngày không hợp lệ";
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setContent(suggestion);
    setShowSuggestions(false); // Ẩn danh sách gợi ý sau khi chọn
  };

  const hasLiked = (likedBy) => {
    // Đảm bảo likedBy là một mảng trước khi gọi includes
    return user && Array.isArray(likedBy) && likedBy.includes(user.uid);
  };
  

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gray-100 p-6 dark:bg-gray-800">
      {/* Danh sách phản hồi */}
      <div className="w-full max-w-3xl bg-white shadow-md rounded-lg p-6 mb-4 dark:bg-gray-800 dark:text-gray-100">
        <h1 className="text-2xl font-bold mb-4">Phản hồi của người dùng</h1>
        <div className="space-y-4">
          {feedbacks.length === 0 ? (
            <p className="text-gray-500">Chưa có phản hồi nào.</p>
          ) : (
            feedbacks.map((feedback) => (
              <div
                key={feedback.id}
                className="border p-4 rounded-md shadow-sm"
              >
                <p className="font-bold">{feedback.name}</p>
                <p>{feedback.content}</p>
                {feedback.image && (
                  <img
                    src={feedback.image}
                    alt="Preview"
                    className="mt-2 w-40 h-auto rounded-lg"
                  />
                )}
                <p className="text-gray-500 mt-2 dark:text-gray-100">
                  {formatDate(feedback.timestamp)}
                </p>
                <div className="flex space-x-4 mt-2">
                  <button
                    onClick={() => handleLike(feedback.id)}
                    className="flex items-center text-gray-500 hover:text-gray-700 dark:text-gray-100"
                  >
                    {hasLiked(feedback.likedBy) ? (
                      <RedHeartIcon className="h-5 w-5 text-red-500 heart-animation" />
                    ) : (
                      <HeartIcon className="h-5 w-5" />
                    )}
                    <span className="ml-1">{feedback.likes || 0}</span>
                  </button>
                  <button
                    onClick={() => handleComment(feedback.id)}
                    className="flex items-center text-gray-500 hover:text-gray-700 dark:text-gray-100"
                  >
                    <CommentIcon className="h-5 w-5" />
                    <span className="ml-1"></span>
                  </button>
                  <button
                    onClick={() => handleShare(feedback.id)}
                    className="flex items-center text-gray-500 hover:text-gray-700 dark:text-gray-100"
                  >
                    <ShareIcon className="h-5 w-5" />
                    <span className="ml-1">{feedback.shares || 0}</span>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Nút hiện form */}
      <button
        onClick={() => setFormVisible(true)}
        className="fixed bottom-4 right-4 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
      >
        <AddIcon className="h-6 w-6" />
      </button>

      {/* Form phản hồi */}
      {formVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-70 z-50">
          <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-lg w-full max-w-sm relative">
            <button
              onClick={() => setFormVisible(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:text-gray-100 dark:hover:text-gray-300"
            >
              <CancelIconV2 className="h-6 w-6" />
            </button>
            <h2 className="text-2xl font-bold mb-4">Gửi phản hồi</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-300">
                  Họ và tên:
                  <input
                    type="text"
                    value={name}
                    onChange={handleNameChange}
                    className="w-full mt-1 p-2 border rounded dark:bg-gray-800 dark:text-gray-100"
                    required
                  />
                </label>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-300">
                  Nội dung phản hồi:
                  <textarea
                    value={content}
                    onChange={handleContentChange}
                    className="w-full mt-1 p-2 border rounded dark:bg-gray-800 dark:text-gray-100"
                    required
                  />
                </label>
                {showSuggestions && (
                  <ul className="mt-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 rounded-lg shadow-lg absolute z-10">
                    {suggestions.map((suggestion, index) => (
                      <li
                        key={index}
                        className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer"
                        onClick={() => handleSuggestionClick(suggestion)}
                      >
                        {suggestion}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-300">
                  Chọn ảnh:
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="w-full mt-1"
                  />
                </label>
                {error && <p className="text-red-500">{error}</p>}
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
              >
                Gửi phản hồi
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Feedback;
