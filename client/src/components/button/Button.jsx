import React, { useState, useEffect } from 'react';

function Button() {
  const [initialShowEntrance, setInitialShowEntrance] = useState(true);
  const [showEntrance, setShowEntrance] = useState(initialShowEntrance);
  const [isButtonEnabled, setIsButtonEnabled] = useState(initialShowEntrance);

  useEffect(() => {
    const storedShowEntrance = localStorage.getItem('showEntrance');
    const initial = storedShowEntrance !== null ? JSON.parse(storedShowEntrance) : true;
    setInitialShowEntrance(initial);
    setShowEntrance(initial);
    setIsButtonEnabled(initial);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowEntrance(prevState => !prevState);
      setIsButtonEnabled(prevState => !prevState);
      localStorage.setItem('showEntrance', JSON.stringify(!initialShowEntrance));
    }, 7200); // 2 hours in milliseconds

    return () => clearTimeout(timer);
  }, [initialShowEntrance]);

  const handleEntranceClick = () => {
    console.log("Entrance clicked");
    setShowEntrance(false);
  };

  const handleExitClick = () => {
    console.log("Exit clicked");
    setShowEntrance(true);
  };

  return (
    <div className="App">
      {showEntrance ? (
        <button onClick={handleEntranceClick}>Entrance</button>
      ) : (
        <button onClick={handleExitClick} disabled={!isButtonEnabled}>Exit</button>
      )}
    </div>
  );
}

export default Button;
