
import Particles from '../blocks/Backgrounds/Particles/Particles'
import { useEffect, useRef, useState } from 'react';
import { useParams } from "react-router-dom";

const problems = [
    {
        title: "1. Set Matrix Zeroes",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/set-matrix-zeroes/",
        topic: "Arrays"
    },
    {
        title: "2. Pascal’s Triangle",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/pascals-triangle/",
        topic: "Arrays"
    },
    {
        title: "3. Next Permutation",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/next-permutation/",
        topic: "Arrays"
    },
    {
        title: "4. Maximum Subarray Sum",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/maximum-subarray/",
        topic: "Arrays"
    },
    {
        title: "5. Merge Two Sorted Lists",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/merge-two-sorted-lists/",
        topic: "Linked List"
    },
    {
        title: "6. Add Two Numbers",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/add-two-numbers/",
        topic: "Linked List"
    },
    {
        title: "7. LRU Cache",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/lru-cache/",
        topic: "Design"
    },
    {
        title: "8. Valid Parentheses",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/valid-parentheses/",
        topic: "Stack"
    },
    {
        title: "9. Evaluate Reverse Polish Notation",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/evaluate-reverse-polish-notation/",
        topic: "Stack"
    },
    {
        title: "10. Binary Tree Inorder Traversal",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/binary-tree-inorder-traversal/",
        topic: "Tree"
    },
    {
        title: "11. Lowest Common Ancestor of a Binary Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/",
        topic: "Tree"
    },
    {
        title: "12. Word Ladder",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/word-ladder/",
        topic: "Graph"
    },
    {
        title: "13. Number of Islands",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/number-of-islands/",
        topic: "Graph"
    },
    {
        title: "14. Longest Substring Without Repeating Characters",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
        topic: "Hash Table"
    },
    {
        title: "15. Median of Two Sorted Arrays",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/median-of-two-sorted-arrays/",
        topic: "Binary Search"
    }
];

function useFadeOnNav(problemsLength: number, navbarHeight = 72) {
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [visibleArr, setVisibleArr] = useState<boolean[]>(Array(problemsLength).fill(true));

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    itemRefs.current = itemRefs.current.slice(0, problemsLength);

    for (let i = 0; i < problemsLength; i++) {
      if (!itemRefs.current[i]) continue;
      const observer = new IntersectionObserver(
        ([entry]) => {
          setVisibleArr(prev => {
            const updated = [...prev];
            updated[i] = entry.intersectionRatio > 0;
            return updated;
          });
        },
        {
          root: null,
          rootMargin: `-${navbarHeight}px 0px 1px 0px`,
          threshold: 0,
        }
      );
      observer.observe(itemRefs.current[i]!);
      observers.push(observer);
    }

    return () => {
      observers.forEach((observer, i) => {
        if (itemRefs.current[i]) observer.unobserve(itemRefs.current[i]!);
        observer.disconnect();
      });
    };
  }, [problemsLength, navbarHeight]);

  return { itemRefs, visibleArr };
}

export default function ProblemsPage() {
  useFadeOnNav(problems.length, 72);
  const { difficulty } = useParams();
  
  const filteredProblems = difficulty
    ? problems.filter(
        (problem) => problem.difficulty.toLowerCase() === difficulty.toLowerCase()
      )
    : problems;

  return (
    <>
      {/* Background Layer */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 0,
          pointerEvents: "none",
          backgroundColor: "black"
        }}
      >
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={400}
          particleSpread={15}
          speed={0.3}
          particleBaseSize={200}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      {/* Foreground Content */}
      <main
        className="flex flex-col items-center justify-center pt-32 px-4"
        style={{
          background: "transparent",
          color: "#fff",
          minHeight: "100vh",
          position: "relative",
          zIndex: 1,
        }}
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {difficulty
            ? `Striver's DSA Sheet – ${difficulty.charAt(0).toUpperCase() + difficulty.slice(1)} Problems`
            : "Striver's DSA Sheet – Top Coding Interview Problems"}
        </h1>
        <ul className="w-full max-w-2xl mx-auto mt-8 space-y-4">
          {filteredProblems.length === 0 ? (
            <li className="text-center text-gray-400">No problems found.</li>
          ) : (
            filteredProblems.map((problem) => (
              <li
                key={problem.title}
                className="bg-[#18181b] rounded-lg p-4 flex flex-col md:flex-row md:items-center md:justify-between shadow hover:shadow-lg transition-transform duration-200 ease-in-out transform hover:scale-120"
              >
                <div>
                  <a
                    href={problem.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-semibold text-indigo-400 hover:underline"
                  >
                    {problem.title}
                  </a>
                  <span className="ml-2 text-sm text-gray-400">({problem.topic})</span>
                </div>
                <span
                  className={`mt-2 md:mt-0 inline-block px-3 py-1 rounded-full text-xs font-medium ${
                    problem.difficulty === "Easy"
                      ? "bg-green-900 text-green-300"
                      : problem.difficulty === "Medium"
                      ? "bg-yellow-900 text-yellow-300"
                      : "bg-red-900 text-red-300"
                  }`}
                >
                  {problem.difficulty}
                </span>
              </li>
            ))
          )}
        </ul>
      </main>
    </>
  );
}