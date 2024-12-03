import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";

const TextConverter = () => {
  const [inputText, setInputText] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [results, setResults] = useState({
    uppercase: "",
    lowercase: "",
    capitalize: "",
    titlecase: "",
  });
  const [splitResults, setSplitResults] = useState({});

  useEffect(() => {
    const textArray = inputText
      .split(",")
      .map((item) => item.trim())
      .filter((item) => item !== "");

    setWordCount(textArray.length);

    // Generate results for overall transformations
    const newResults = {
      uppercase: textArray.map((text) => text.toUpperCase()).join("\n"),
      lowercase: textArray.map((text) => text.toLowerCase()).join("\n"),
      capitalize: textArray
        .map(
          (text) => text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
        )
        .join("\n"),
      titlecase: textArray
        .map((text) =>
          text
            .split(" ")
            .map(
              (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
            )
            .join(" ")
        )
        .join("\n"),
    };

    setResults(newResults);

    // Handle splitting and transformation for groups if word count > 6
    if (textArray.length > 6) {
      const midIndex = Math.ceil(textArray.length / 2);
      const group1 = textArray.slice(0, midIndex);
      const group2 = textArray.slice(midIndex);

      const transformGroup = (group) => ({
        uppercase: group.map((text) => text.toUpperCase()).join("\n"),
        lowercase: group.map((text) => text.toLowerCase()).join("\n"),
        capitalize: group
          .map(
            (text) => text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
          )
          .join("\n"),
        titlecase: group
          .map((text) =>
            text
              .split(" ")
              .map(
                (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
              )
              .join(" ")
          )
          .join("\n"),
      });

      setSplitResults({
        group1: transformGroup(group1),
        group2: transformGroup(group2),
      });
    } else {
      setSplitResults({});
    }
  }, [inputText]);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    Swal.fire({
        icon: "success",
        title: "Sao chép thành công!",
        text: "Thông báo bởi Webdio.",
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-8 pt-12">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">
        {/* Chuyển Đổi Chữ */}
      </h1>
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl">
        <label
          htmlFor="inputText"
          className="block text-lg font-medium text-gray-700 mb-2"
        >
          Nhập dãy chữ (cách nhau bằng dấu phẩy):
        </label>
        <textarea
          id="inputText"
          rows="4"
          className="w-full border rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Ví dụ: am,dio,web"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        ></textarea>
        <p className="mt-2 text-gray-600">Số từ: {wordCount}</p>
      </div>

      {/* Hiển thị kết quả */}
      {wordCount > 6 ? (
        <div className="mt-6 w-full max-w-4xl">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Kết quả chia nhóm
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {["group1", "group2"].map((groupKey, index) => (
              <div key={groupKey} className="bg-gray-100 p-4 rounded-lg shadow">
                <h3 className="text-lg font-medium mb-2">
                  Nhóm {index + 1} ({groupKey === "group1" ? "Nhiều hơn" : "Ít hơn"})
                </h3>
                {Object.entries(splitResults[groupKey] || {}).map(
                  ([key, value]) => (
                    <div key={key} className="mb-4">
                      <h4 className="text-md font-semibold capitalize mb-1">
                        {key === "uppercase"
                          ? "Chữ Hoa"
                          : key === "lowercase"
                          ? "Chữ Thường"
                          : key === "capitalize"
                          ? "Viết Hoa Chữ Cái Đầu"
                          : "Viết Hoa Mỗi Từ"}
                      </h4>
                      <div className="relative">
                        <pre className="overflow-y-auto max-h-24 bg-white p-3 border rounded whitespace-pre-wrap">
                          {value || "Không có kết quả"}
                        </pre>
                        <button
                          onClick={() => handleCopy(value)}
                          className="absolute top-2 right-2 text-blue-500 hover:text-blue-700"
                        >
                          Sao chép
                        </button>
                      </div>
                    </div>
                  )
                )}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
          {Object.entries(results).map(([key, value]) => (
            <div key={key} className="bg-gray-100 p-4 rounded-lg shadow">
              <h3 className="text-lg font-medium capitalize mb-2">
                {key === "uppercase"
                  ? "Chữ Hoa"
                  : key === "lowercase"
                  ? "Chữ Thường"
                  : key === "capitalize"
                  ? "Viết Hoa Chữ Cái Đầu"
                  : "Viết Hoa Mỗi Từ"}
              </h3>
              <div className="relative">
                <pre className="overflow-y-auto max-h-24 bg-white p-3 border rounded whitespace-pre-wrap">
                  {value || "Không có kết quả"}
                </pre>
                <button
                  onClick={() => handleCopy(value)}
                  className="absolute top-2 right-2 text-blue-500 hover:text-blue-700"
                >
                  Sao chép
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TextConverter;
