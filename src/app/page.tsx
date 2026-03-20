"use client";

import { useState } from "react";

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }}
      className="text-muted hover:text-text transition-colors text-xs font-mono cursor-pointer"
    >
      {copied ? "copied" : "copy"}
    </button>
  );
}

function InstallTabs() {
  const [tab, setTab] = useState<"mac" | "win">("mac");
  const cmds = {
    mac: "curl -fsSL https://raw.githubusercontent.com/NewTurn2017/vibe-skills/main/install.sh | bash",
    win: 'irm https://raw.githubusercontent.com/NewTurn2017/vibe-skills/main/install.ps1 | iex',
  };
  return (
    <div className="flex flex-col">
      <div className="inline-flex mb-3 bg-elevated rounded-md p-0.5 text-xs font-mono">
        <button
          onClick={() => setTab("mac")}
          className={`px-3 py-1 rounded cursor-pointer transition-colors ${tab === "mac" ? "bg-card text-text" : "text-dim hover:text-muted"}`}
        >
          macOS / Linux
        </button>
        <button
          onClick={() => setTab("win")}
          className={`px-3 py-1 rounded cursor-pointer transition-colors ${tab === "win" ? "bg-card text-text" : "text-dim hover:text-muted"}`}
        >
          Windows
        </button>
      </div>
      <div className="inline-flex items-center gap-4 bg-card border border-border rounded-lg px-5 py-3 max-w-full overflow-x-auto">
        <span className="text-dim font-mono text-sm select-none">
          {tab === "mac" ? "$" : ">"}
        </span>
        <code className="font-mono text-sm text-text/90 whitespace-nowrap">
          {cmds[tab]}
        </code>
        <CopyButton text={cmds[tab]} />
      </div>
    </div>
  );
}

const phases = [
  {
    num: "01",
    name: "Research",
    label: "분석",
    cmd: '/vibe "인증 시스템 성능 분석"',
    desc: "코드를 변경하지 않고 코드베이스를 심층 분석합니다. 파일 맵, 데이터 플로우, 의존성 그래프, 리스크 평가가 포함된 구조화된 리서치 문서를 생성합니다.",
    tags: ["ast-grep", "ripgrep", "mermaid", "의존성 그래프"],
  },
  {
    num: "02",
    name: "Plan",
    label: "계획",
    cmd: '/vibe "구현 계획 세워줘"',
    desc: "AI 리뷰 점수가 포함된 상세 구현 계획을 수립합니다. 파일 변경 목록, 타입/인터페이스 diff, 롤백 전략, 그리고 코드 작성 전 승인 게이트를 포함합니다.",
    tags: ["AI 리뷰", "리스크 분석", "승인 게이트", "MEMO 시스템"],
  },
  {
    num: "03",
    name: "Implement",
    label: "구현",
    cmd: '/vibe "구현해"',
    desc: "승인된 계획을 기계적으로 실행합니다. 의존성 기반 파일 그룹핑, 4단계 지속적 검증, 자동 체크포인트, 범위 외 변경 감지를 지원합니다.",
    tags: ["병렬 실행", "자동 롤백", "타입 체크", "체크포인트"],
  },
  {
    num: "04",
    name: "Review",
    label: "리뷰",
    cmd: '/vibe "코드 리뷰"',
    desc: "보안(OWASP), 성능, 품질, 테스트 커버리지를 아우르는 다차원 코드 리뷰를 수행합니다. 심각도별로 분류된 액션 아이템과 PR 체크리스트를 생성합니다.",
    tags: ["OWASP 스캔", "PR 체크리스트", "자동 수정", "심각도 분류"],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 border-b border-border bg-bg/80 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="font-mono text-sm tracking-tight">
            <span className="text-accent">vibe</span>
            <span className="text-dim"> skills</span>
          </span>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/NewTurn2017/vibe-skills"
              className="text-muted hover:text-text transition-colors text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="#install"
              className="text-xs font-mono px-3 py-1.5 bg-accent/10 text-accent rounded-md hover:bg-accent/20 transition-colors"
            >
              설치하기
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="animate-fade-up">
            <p className="text-accent font-mono text-xs tracking-widest uppercase mb-6">
              Claude Code Skills
            </p>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight leading-[1.1] mb-6 animate-fade-up animate-delay-1">
            하나의 명령어.
            <br />
            <span className="text-muted">네 개의 단계.</span>
            <br />
            <span className="text-muted">열한 개의 에이전트.</span>
            <br />
            체계적인 개발.
          </h1>
          <p className="text-muted text-lg max-w-xl mb-12 animate-fade-up animate-delay-2">
            자연어를 분석, 계획, 구현, 리뷰된 코드로 바꾸는 AI 기반 워크플로우.
            더 이상 즉흥적인 프롬프팅은 필요 없습니다.
          </p>

          <div className="animate-fade-up animate-delay-3">
            <InstallTabs />
          </div>
        </div>
      </section>

      {/* Pipeline */}
      <section className="pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 overflow-x-auto pb-2">
            {phases.map((phase, i) => (
              <div key={phase.name} className="flex items-center gap-3 shrink-0">
                <div className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg">
                  <span className="text-accent font-mono text-xs">
                    0{i + 1}
                  </span>
                  <span className="text-sm">{phase.label}</span>
                </div>
                {i < phases.length - 1 && (
                  <span className="text-dim text-xs font-mono">&rarr;</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Phases */}
      <section className="pb-32 px-6">
        <div className="max-w-5xl mx-auto space-y-16">
          {phases.map((phase) => (
            <div
              key={phase.num}
              className="grid md:grid-cols-[140px_1fr] gap-8"
            >
              <div>
                <span className="text-accent/30 font-mono text-5xl font-light">
                  {phase.num}
                </span>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-1">{phase.name}</h3>
                <p className="text-muted text-sm mb-3">{phase.label}</p>
                <div className="bg-card border border-border rounded-md px-4 py-2 mb-4 inline-block">
                  <code className="font-mono text-sm text-accent">
                    {phase.cmd}
                  </code>
                </div>
                <p className="text-muted leading-relaxed mb-4 max-w-2xl">
                  {phase.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {phase.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono text-dim px-2 py-0.5 bg-elevated rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Mode */}
      <section id="team" className="pb-32 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-accent font-mono text-xs tracking-widest uppercase mb-6">
            NEW in v2.1
          </p>
          <h2 className="text-2xl font-light mb-4">
            복잡한 작업은 <span className="text-accent">팀</span>으로
          </h2>
          <p className="text-muted leading-relaxed mb-8 max-w-2xl">
            AI가 작업 복잡도를 자동으로 판단하여, 필요할 때 11개 전문 에이전트를
            병렬로 투입합니다. 하나의 명령어로 분석부터 리뷰까지 — 혼자 또는
            팀으로.
          </p>

          <div className="bg-card border border-border rounded-md px-4 py-2 mb-10 inline-block">
            <code className="font-mono text-sm text-accent">
              /vibe &quot;team 인증 시스템 전체 분석&quot;
            </code>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="p-6 bg-card border border-border rounded-lg">
              <h3 className="text-sm font-medium mb-3">자동 감지</h3>
              <p className="text-muted text-sm leading-relaxed mb-4">
                분석 옵션 2개 이상, 변경 파일 6개 이상, 다중 리뷰 포커스 등
                복잡도가 임계치를 넘으면 자동으로 Team Mode가 활성화됩니다.
              </p>
              <div className="flex flex-wrap gap-2">
                {["auto-detect", "team 키워드", "solo 오버라이드", "N:agent-type"].map((tag) => (
                  <span key={tag} className="text-xs font-mono text-dim px-2 py-0.5 bg-elevated rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-6 bg-card border border-border rounded-lg">
              <h3 className="text-sm font-medium mb-3">단일 팀, 워커 로테이션</h3>
              <p className="text-muted text-sm leading-relaxed mb-4">
                세션당 하나의 팀을 생성하고, 각 단계마다 전문 에이전트를
                교체합니다. 분석이 끝나면 분석 에이전트를 해제하고 계획 에이전트를
                투입합니다.
              </p>
              <div className="flex flex-wrap gap-2">
                {["TeamCreate", "워커 로테이션", "TeamDelete", "handoff"].map((tag) => (
                  <span key={tag} className="text-xs font-mono text-dim px-2 py-0.5 bg-elevated rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <h3 className="text-lg font-light mb-6">
            단계별 <span className="text-accent">전문 에이전트</span>
          </h3>
          <div className="grid md:grid-cols-4 gap-4 mb-10">
            {[
              {
                phase: "분석",
                agents: [
                  { name: "explore", desc: "코드베이스 구조 탐색" },
                  { name: "analyst", desc: "성능/패턴 분석" },
                  { name: "architect", desc: "의존성/리스크 분석" },
                ],
              },
              {
                phase: "계획",
                agents: [
                  { name: "planner", desc: "구현 전략 수립" },
                  { name: "architect", desc: "아키텍처 리뷰" },
                  { name: "critic", desc: "계획 도전/리스크" },
                ],
              },
              {
                phase: "구현",
                agents: [
                  { name: "executor", desc: "코드 구현" },
                  { name: "designer", desc: "UI 컴포넌트" },
                  { name: "test-engineer", desc: "테스트 작성" },
                ],
              },
              {
                phase: "리뷰",
                agents: [
                  { name: "code-reviewer", desc: "품질/SOLID" },
                  { name: "security", desc: "OWASP 스캔" },
                  { name: "verifier", desc: "테스트/빌드 검증" },
                ],
              },
            ].map((group) => (
              <div key={group.phase} className="p-4 bg-card border border-border rounded-lg">
                <p className="text-accent font-mono text-xs mb-3">{group.phase}</p>
                <div className="space-y-2">
                  {group.agents.map((agent) => (
                    <div key={agent.name}>
                      <p className="text-sm font-mono">{agent.name}</p>
                      <p className="text-xs text-dim">{agent.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 bg-elevated border border-border rounded-lg">
            <p className="text-xs text-dim">
              <span className="text-accent font-mono">사전 요구사항</span>
              {" — "}
              Team Mode는{" "}
              <a
                href="https://github.com/nicobailey-omc/oh-my-claudecode"
                className="text-accent hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                oh-my-claudecode
              </a>{" "}
              플러그인이 필요합니다. 미설치 시 기존 Single Mode로 동작합니다.
            </p>
          </div>
        </div>
      </section>

      {/* Why structured */}
      <section className="pb-32 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-light mb-12">
            왜 <span className="text-accent">체계적</span>인 방식이 즉흥보다
            나은가
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "관심사의 분리",
                body: "생각(리서치 + 계획)과 실행(구현)이 분리됩니다. 코드를 작성하기 전에 아키텍처를 먼저 승인합니다.",
              },
              {
                title: "재현 가능한 산출물",
                body: "매 단계마다 .vibe/ 문서를 생성합니다 \u2014 research.md, plan.md, review.md. 지식이 세션을 넘어 축적됩니다.",
              },
              {
                title: "내장된 품질 게이트",
                body: "AI가 승인 전 계획을 채점합니다. 4단계 검증이 파일마다 코드를 확인합니다. OWASP 스캔이 리뷰에서 취약점을 잡아냅니다.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 bg-card border border-border rounded-lg"
              >
                <h3 className="text-sm font-medium mb-3">{item.title}</h3>
                <p className="text-muted text-sm leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Install */}
      <section id="install" className="pb-32 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-light mb-4">시작하기</h2>
          <p className="text-muted mb-8 text-sm">
            <a
              href="https://claude.ai/code"
              className="text-accent hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Claude Code
            </a>{" "}
            CLI가 설치되어 있어야 합니다.
          </p>
          <div className="mb-10 flex justify-center">
            <InstallTabs />
          </div>
          <div className="flex justify-center gap-10 text-sm text-muted">
            <div>
              <span className="text-accent font-mono text-2xl font-light">
                5
              </span>
              <p className="mt-1">스킬</p>
            </div>
            <div className="w-px bg-border" />
            <div>
              <span className="text-accent font-mono text-2xl font-light">
                1
              </span>
              <p className="mt-1">명령어</p>
            </div>
            <div className="w-px bg-border" />
            <div>
              <span className="text-accent font-mono text-2xl font-light">
                0
              </span>
              <p className="mt-1">설정</p>
            </div>
            <div className="w-px bg-border" />
            <div>
              <span className="text-accent font-mono text-2xl font-light">
                11
              </span>
              <p className="mt-1">에이전트</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-6">
        <div className="max-w-5xl mx-auto flex items-center justify-between text-xs text-dim">
          <span className="font-mono">
            <span className="text-accent/60">vibe</span> skills
          </span>
          <div className="flex gap-6">
            <a
              href="https://github.com/NewTurn2017/vibe-skills"
              className="hover:text-muted transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://github.com/NewTurn2017/vibe-skills/issues"
              className="hover:text-muted transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              이슈
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
