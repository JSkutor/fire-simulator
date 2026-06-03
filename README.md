<div align="center">
  <h1>경제적 자립, 언제?</h1>
  <p>
    <b>FIRE 시뮬레이터</b> — 복리 성장 곡선 위에서 연도별 자산과<br />
    현금흐름을 직관적으로 시각화하는 인터랙티브 웹 앱
  </p>

  <p>
    <a href="https://jskutor.github.io/fire-simulator/">
      <b>🔗 Live Demo</b>
    </a>
  </p>

  <img src="https://github.com/user-attachments/assets/2fdca0a5-8daa-456a-920a-95894a41e4f7" alt="Preview" width="700" />
</div>

---

## Features

### 📈 복리 성장 시각화

기초자산과 연간 수익률을 입력하면 **40년간의 복리 성장 곡선**을 즉시 확인할 수 있습니다. Recharts 기반의 인터랙티브 차트에 호버하거나 클릭하면 원하는 시점의 자산 규모를 실시간으로 확인할 수 있습니다.

### 🏦 FIRE 시점 시뮬레이션

그래프 위에서 원하는 연도를 클릭해 **FIRE 시점**을 지정하세요. 해당 시점부터 매년 자산 잔액의 **4%** 를 인출하는 시나리오가 반영되며, 인출 전후의 자산 흐름을 한 차트에서 비교할 수 있습니다.

### 💰 구간별 저축 & 지출

연도 구간별로 **저축/지출 금액**을 자유롭게 설정할 수 있습니다. 양수는 저축, 음수는 지출을 의미하며 구간은 자유롭게 추가/삭제 가능하고 겹치는 구간은 합산됩니다.

### 🏷️ 명목 가치 & 실질 가치

**인플레이션 2.3%** (한국 CPI 연평균, 2005~2024년 기준)를 반영하여 명목 가치와 실질 가치를 동시에 제공합니다.

| 구분          | 의미                      |
| ------------- | ------------------------- |
| **명목 자산** | 미래 액면가 기준          |
| **실질 자산** | 현재 구매력 기준으로 환산 |

### 🔗 URL 공유

모든 시뮬레이션 상태(기초자산, 수익률, 저축/지출 구간, FIRE 시점)가 **URL 쿼리 파라미터**로 인코딩됩니다. 설정을 공유 버튼 하나로 클립보드에 복사하고, 링크만 보내면 상대방도 동일한 화면을 볼 수 있습니다.

### 📱 반응형 & 모바일 최적화

모바일에서는 터치 친화적인 **연도 슬라이더**와 하단 버튼을 통해 FIRE 시점을 설정할 수 있습니다.

---

## Tech Stack

| Category      | Tech                                                                                                          |
| ------------- | ------------------------------------------------------------------------------------------------------------- |
| **Framework** | [React 18](https://react.dev/)                                                                                |
| **Build**     | [Vite](https://vitejs.dev/)                                                                                   |
| **Styling**   | [Tailwind CSS](https://tailwindcss.com/)                                                                      |
| **Chart**     | [Recharts](https://recharts.org/)                                                                             |
| **Animation** | [framer-motion](https://www.framer.com/motion/), [react-countup](https://github.com/glennreyes/react-countup) |
| **Deploy**    | GitHub Pages                                                                                                  |
| **Test**      | Node.js built-in test runner                                                                                  |

---

## Simulation Model

```
시점 모델 (연초 기준)

  arr[y] = y년차 연초 시점의 스냅샷

  nominal[y]  → 연초 명목 자산
  real[y]     → 연초 실질 자산 (= nominal[y] / (1+INFLATION)^y)
  flow[y]     → 해당 연도 동안 발생하는 저축/지출 합산
  withdrawal  → 연초 인출 (= nominal[x] × 4%, FIRE 시점 이후부터)

연도 진행 식 (y → y+1):
  next = (nominal[y] - withdrawal + flow[y]) × (1 + r)
```

- **기간:** 40년 시뮬레이션
- **인플레이션:** 2.3% 고정 (통계청·World Bank 기준)
- **인출 전략:** **4% 정률 인출법** — 매년 자산 잔액의 4%를 인출
- **Flow 근사:** 연중 평균 발생 가정 → `flow × √(1+r)`

> 💡 전통적인 Trinity Study의 4% 룰은 초기 자산 기준 인출액 고정 방식이지만, 이 프로젝트는 **매년 자산 규모에 따라 인출액이 조정**되는 정률 방식을 채택하여 유동적인 현금흐름 상황에 더 적합합니다.

---

## Getting Started

```bash
git clone https://github.com/JSkutor/fire-simulator.git
cd fire-simulator
npm install
npm run dev
```

| Command           | Description                            |
| ----------------- | -------------------------------------- |
| `npm run dev`     | 개발 서버 실행 (http://localhost:5173) |
| `npm run build`   | 프로덕션 빌드 (`dist/`)                |
| `npm run preview` | 빌드 결과물 프리뷰                     |
| `npm test`        | 단위 테스트 실행                       |

---

## Background

이 프로젝트는 소득 변동이 큰 상황(창업 준비, 커리어 전환 등)에서 **연도별로 저축과 지출을 세밀하게 설정**하면서 자산 성장을 시뮬레이션할 수 있는 도구의 필요성에서 시작했습니다.

인출 전략은 **매년 자산 규모를 기준으로 4%를 인출하는 정률 방식**을 채택했습니다. 전통적인 Trinity Study의 4% 룰은 인출 시작 시점의 자산을 기준으로 인출액이 고정되지만, 이 프로젝트는 현금흐름이 유동적인 상황을 가정하므로 매년 잔액에 따라 조정되는 방식이 더 적합하다고 판단했습니다.

기능적인 측면에서는 특정 상황을 넘어, 개인 자산의 금융소득과 현금흐름을 시뮬레이션하는 범용적인 도구로 사용할 수 있습니다.

---

<div align="center">
  <sub>과거 수익률이 미래 수익을 보장하지 않습니다</sub>
</div>
