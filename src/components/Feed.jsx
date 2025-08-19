import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faCode,
  faBriefcase,
  faStar,
  faCertificate,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/Feed.css";

const iconMap = { faGraduationCap, faCode, faBriefcase, faStar, faCertificate };
const baseApiUrl =
  "https://script.google.com/macros/s/AKfycbxPCbv7lMZw-tTq-RqPR5Z2iOJzIEnykQVrR-uhxiIXizTJorZo7a6Q3BniMZVGLnU/exec";

const PostCard = ({ post }) => {
  const [likeCount, setLikeCount] = useState(post.likes || 0);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const likedPosts = JSON.parse(localStorage.getItem("likedPosts")) || {};
    if (Object.prototype.hasOwnProperty.call(likedPosts, post.id)) {
      setIsLiked(true);
    }
  }, [post.id]);

  const handleLike = () => {
    if (isLiked) return;
    setIsLiked(true);
    setLikeCount((prevCount) => Number(prevCount) + 1);

    const likedPosts = JSON.parse(localStorage.getItem("likedPosts")) || {};
    if (!Object.prototype.hasOwnProperty.call(likedPosts, post.id)) {
      likedPosts[post.id] = true;
    }
    localStorage.setItem("likedPosts", JSON.stringify(likedPosts));

    fetch(baseApiUrl, {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: JSON.stringify({ postId: post.id }),
    })
      .then((res) => res.json())
      .then((data) =>
        console.log(
          "Like registrado para o post",
          post.id,
          "Novo total:",
          data.newLikes
        )
      )
      .catch(console.error);
  };

  return (
    <div className="post-card">
      <div className="post-card-header">
        <img src="/logo.png" alt="Avatar" className="post-avatar" />
        <div className="post-author-info">
          <span className="post-author-name">Marcio Junior</span>
          <span className="post-date">{post.date}</span>
        </div>
      </div>
      <div className="post-content">
        <div className="post-content-title">
          {iconMap[post.icon] && (
            <FontAwesomeIcon
              icon={iconMap[post.icon]}
              className="post-title-icon"
            />
          )}
          <h3 className="post-title">{post.title}</h3>
        </div>
        <p className="post-description">{post.description}</p>
      </div>
      {post.imageUrl && (
        <div className="post-image-container">
          <img src={post.imageUrl} alt={post.title} className="post-image" />
        </div>
      )}
      <div className="post-footer">
        <button
          onClick={handleLike}
          className={`like-button ${isLiked ? "liked" : ""}`}
          disabled={isLiked}
        >
          <FontAwesomeIcon icon={faHeart} />
          <span>Apoiar</span>
        </button>
        <span className="like-count">
          {likeCount} apoios{" "}
          <span className="anonimato-nota">(apoio anônimo)</span>
        </span>
      </div>
    </div>
  );
};

const SkeletonPost = () => (
  <div className="post-card skeleton-post">
    <div className="post-card-header">
      <div className="skeleton-avatar"></div>
      <div className="skeleton-author-info">
        <div className="skeleton-text skeleton-name"></div>
        <div className="skeleton-text skeleton-date"></div>
      </div>
    </div>
    <div className="skeleton-text skeleton-desc"></div>
    <div className="skeleton-text skeleton-desc" style={{ width: "80%" }}></div>
    <div className="skeleton-image"></div>
  </div>
);

export default function Feed({ refs }) {
  const [selectedYear, setSelectedYear] = useState(
    new Date().getFullYear().toString()
  );
  const [availableYears, setAvailableYears] = useState([]);
  const [posts, setPosts] = useState([]);
  const [loadingPosts, setLoadingPosts] = useState(true);
  const [loadingYears, setLoadingYears] = useState(true);

  useEffect(() => {
    fetch(baseApiUrl)
      .then((res) => res.json())
      .then((data) => {
        setAvailableYears(data);
        setLoadingYears(false);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    if (!selectedYear) return;
    setLoadingPosts(true);
    fetch(`${baseApiUrl}?year=${selectedYear}`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoadingPosts(false);
      })
      .catch((error) => {
        console.error("Erro ao buscar posts:", error);
        setLoadingPosts(false);
      });
  }, [selectedYear]);

  return (
    <div className="feed-view">
      <header className="feed-header">
        <h1 ref={refs.feed_titulo}>Minha Jornada</h1>
        <p className="feed-description" ref={refs.feed_descricao}>
          Esta seção funciona como um diário profissional. Deixe seu apoio
          anônimo!
        </p>
        <nav className="mini-timeline" ref={refs.feed_timeline}>
          {loadingYears ? (
            <>
              <div className="timeline-year-skeleton"></div>
              <div className="timeline-year-skeleton"></div>
              <div className="timeline-year-skeleton"></div>
              <div className="timeline-year-skeleton"></div>
            </>
          ) : (
            availableYears.map((year) => (
              <button
                key={year}
                className={`timeline-year ${
                  year == selectedYear ? "active" : ""
                }`}
                onClick={() => setSelectedYear(year.toString())}
              >
                {year}
              </button>
            ))
          )}
        </nav>
      </header>
      <main className="feed-container" ref={refs.feed_container}>
        {loadingPosts ? (
          <>
            <SkeletonPost />
            <SkeletonPost />
          </>
        ) : (
          posts.map((post) => <PostCard key={post.id} post={post} />)
        )}
      </main>
    </div>
  );
}
