//react-bootstrap modal을 이용한 유튜브 팝업
//https://www.npmjs.com/package/react-youtube -react-youtube라이브러리 설치
//https://github.com/u-wave/react-youtube  -react-youtube라이브러리

import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import YouTube from 'react-youtube';

const Trailer = ({ item }) => {
	const [show, setShow] = useState(false);

	//"Official Trailer"가 있을때
	const trailer = item.results?.find((item) => {
    if (item.name === 'Official Trailer') {
      return item;
    }
  });

	// type에 "Trailer"가 있을때
	const trailer2 = item.results?.find((item) => {
    if (item.type === 'Trailer') {
      return item;
    }
  });

	const opts = {
    playerVars: {
      autoplay: 0,
    },
  };

  const _onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };



	return (
		<div>
			

			<p className="trailer-btn" onClick={() => setShow(true)}>
				🎬 Watch Trailer
			</p>

			<Modal
				show={show}
				onHide={() => setShow(false)}
				fullscreen={true}
				dialogClassName="modal-90w"
				aria-labelledby="example-custom-modal-styling-title"
			>
				<Modal.Header closeButton></Modal.Header>
				<Modal.Body>
					<YouTube videoId={trailer?.key ? trailer?.key : trailer2?.key } opts={opts}
            onReady={_onReady}/>
				</Modal.Body>
			</Modal>
		</div>
	);
};

export default Trailer;
