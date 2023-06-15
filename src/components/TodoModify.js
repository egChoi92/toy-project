import { useState } from "react";

export default function TodoUtil() {
  const [isModify, setIsModify] = useState(false);
  return (
    <span>
      <button data-testid="modify-button">수정</button>
      {isModify && (
        <span>
          <input data-testid="modify-input" />
          <button data-testid="submit-button">제출</button>
          <button data-testid="cancel-button">취소</button>
        </span>
      )}
    </span>
  );
}
