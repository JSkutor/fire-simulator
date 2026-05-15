import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CountUp from "react-countup";

export default function AnimationTestBoard() {
  // 마우스 호버 상태 관리
  const [isHovered, setIsHovered] = useState(false);

  // 호버 상태에 따른 가상의 데이터 변화 (15년차 -> 25년차)
  const year = isHovered ? 25 : 15;
  const asset = isHovered ? 707430000 : 279880000; // 7억 743만 vs 2억 7988만

  return (
    <div className="p-10 bg-gray-50 min-h-screen flex flex-col items-center justify-center gap-12">
      {/* 테스트용 가짜 그래프 영역 */}
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="px-10 py-16 bg-gray-200 border-2 border-dashed border-gray-400 rounded-xl cursor-pointer hover:bg-gray-300 transition-colors"
      >
        <p className="text-lg font-bold text-gray-600">
          이 박스(가짜 그래프) 위에 마우스를 올렸다 떼보세요 🖱️
        </p>
      </div>

      <div className="flex gap-8">
        {/* =========================================
            방법 1: Framer Motion (Fade & Slide)
            ========================================= */}
        <div className="w-72 p-6 bg-white rounded-xl shadow-lg border border-gray-100">
          <p className="text-xs font-bold text-gray-400 mb-4">
            방법 1. Framer Motion
          </p>
          <div className="flex justify-between items-end mb-2">
            <span className="text-sm text-gray-500">명목 자산</span>
            <span className="text-sm font-bold text-gray-400">{year}년차</span>
          </div>

          <div className="relative h-10 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={asset} // 값이 바뀔 때마다 애니메이션 트리거
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute text-2xl font-bold text-blue-600"
              >
                {(asset / 10000).toLocaleString()}만원
              </motion.div>
            </AnimatePresence>
          </div>
          <p className="text-xs text-gray-400 mt-2">
            값이 통째로 스르륵 교체되는 느낌
          </p>
        </div>

        {/* =========================================
            방법 2: React CountUp (Number Ticking)
            ========================================= */}
        <div className="w-72 p-6 bg-white rounded-xl shadow-lg border border-gray-100">
          <p className="text-xs font-bold text-gray-400 mb-4">
            방법 2. React CountUp
          </p>
          <div className="flex justify-between items-end mb-2">
            <span className="text-sm text-gray-500">실질 자산</span>
            <span className="text-sm font-bold text-gray-400">{year}년차</span>
          </div>

          <div className="h-10 flex items-center">
            <div className="text-2xl font-bold text-green-600">
              <CountUp
                end={asset}
                preserveValue={true} // 이전 값을 기억해서 거기서부터 카운트 시작
                duration={0.5} // 애니메이션 속도 (초)
                separator=","
                suffix="원"
              />
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-2">
            값이 다다다닥 굴러가는 역동적인 느낌
          </p>
        </div>
      </div>
    </div>
  );
}
