import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const RoomPage = () => {
  const { roomId } = useParams();
  const meetingRef = useRef(null);

  useEffect(() => {
    const appId = 1944009137;
    const serverSecret = "44ba81a763acb40e36a2ae0a552d88e6";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appId, serverSecret, roomId, Date.now().toString(), "Suraj Raut");

    const zc = ZegoUIKitPrebuilt.create(kitToken);

    if (meetingRef.current) {
      zc.joinRoom({
        container: meetingRef.current,
        sharedLinks: [{
          name: 'Copy link',
          url: `http://localhost:3000/room/${roomId}`
        }],
        scenario: {
          mode: ZegoUIKitPrebuilt.OneONoneCall
        },
        showScreenSharingButton: true
      });
    }

    
  }, [roomId]);

  return <div>
    <div ref={meetingRef} />
  </div>;
}

export default RoomPage;
