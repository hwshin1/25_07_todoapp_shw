import "./globals.css";

export const metadata = {
  title: "대전 너와 함께 웃고 너와 함께 울고 항상 함께 해",
  description: "TodoList Manange",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
