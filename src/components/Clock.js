import React, { useState } from 'react';

function Clock() {
  const [ampm, setAmPm] = useState('');
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  // const [seconds, setSeconds] = useState('');

  if (!ampm && !hours && !minutes) {
    const now = new Date();
    const currentHours = now.getHours();
    const currentMinutes = now.getMinutes();
    // const currentSeconds = now.getSeconds();

    setAmPm(currentHours < 12 ? 'AM' : 'PM');
    setHours(currentHours % 12 || 12);
    setMinutes(currentMinutes < 10 ? '0' + currentMinutes : currentMinutes);
    // setSeconds(currentSeconds < 10 ? '0' + currentSeconds : currentSeconds);
  }

  return (
    <>
      {ampm} {hours}:{minutes}
    </>
  );
}

export default Clock;
