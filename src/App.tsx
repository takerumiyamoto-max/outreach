import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import NewsList from "./pages/NewsList";
import NewsPost from "./pages/NewsPost";
import BlogArchive from "./pages/BlogArchive";
import BlogYear from "./pages/BlogYear";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />

        <Route path="/news" element={<NewsList />} />
        <Route path="/news/:slug" element={<NewsPost />} />

        <Route path="/blog" element={<BlogArchive />} />
        <Route path="/blog/:year" element={<BlogYear />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}