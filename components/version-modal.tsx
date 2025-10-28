"use client"

import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface VersionModalProps {
  version: string
  isOpen: boolean
  onClose: () => void
}

const versionDetails = {
  "8.0": {
    title: "Version 8.0 - 협업의 시작",
    previousVersion: "7.x",
    newFeatures: [
      {
        name: "HiperZones",
        description: "독립적인 영역 관리 시스템 도입",
        impact: "여러 사용자가 동시에 작업 가능, 콘텐츠 무결성 보호",
      },
      {
        name: "HiperSource Streamer+",
        description: "NVIDIA GPU 기반 고성능 스트리밍",
        impact: "UHD 해상도 및 고프레임레이트 지원, 더 많은 소스 처리",
      },
      {
        name: "HiperCast Pull",
        description: "여러 시스템 간 안전한 콘텐츠 공유",
        impact: "암호화된 연결, 방화벽 설정 간소화",
      },
      {
        name: "HiperView+",
        description: "성능 향상 버전 (무료 업그레이드)",
        impact: "NVIDIA GPU 기반 렌더링, 동기화된 비디오 디코딩",
      },
    ],
    changes: [
      "단일 사용자 환경 → 다중 사용자 협업 환경",
      "기본 스트리밍 → 하드웨어 가속 고성능 스트리밍",
      "독립 시스템 → 네트워크 기반 콘텐츠 공유",
    ],
    keyImprovement: "협업 기능의 혁신적 도입으로 여러 팀이 동시에 안전하게 작업할 수 있는 환경 구축",
  },
  "8.5": {
    title: "Version 8.5 - 사용성의 혁신",
    previousVersion: "8.0",
    newFeatures: [
      {
        name: "HiperOperator 완전 재설계",
        description: "직관적인 3단 레이아웃 UI",
        impact: "학습 곡선 최소화, 누구나 쉽게 사용 가능",
      },
      {
        name: "Drag-and-Drop & SmartSnap™",
        description: "드래그로 정확한 콘텐츠 배치",
        impact: "그리드 기반 자동 정렬, 빠르고 정확한 레이아웃",
      },
      {
        name: "SmartSwap™",
        description: "Ctrl 키로 콘텐츠 즉시 교체",
        impact: "콘텐츠 전환 시간 단축, 레이아웃 유지",
      },
      {
        name: "Multi-Zone Environments",
        description: "전체 시스템 상태 저장/복원",
        impact: "관리자가 모든 Zone의 상태를 한 번에 관리",
      },
      {
        name: "Dark Mode",
        description: "어두운 테마 지원",
        impact: "어두운 환경에서 눈의 피로 감소",
      },
    ],
    changes: [
      "복잡한 메뉴 구조 → 직관적인 3단 레이아웃",
      "수동 위치 조정 → 자동 스냅 및 스왑",
      "단일 Zone 환경 → Multi-Zone 환경 지원",
      "밝은 테마만 → Dark Mode 추가",
    ],
    keyImprovement: "UI/UX 전면 개선으로 전문가가 아니어도 쉽게 사용할 수 있는 직관적인 인터페이스 제공",
  },
  "9.0": {
    title: "Version 9.0 - 유연성과 안정성",
    previousVersion: "8.5",
    newFeatures: [
      {
        name: "HiperLayout (기본 제공)",
        description: "이전 유료 옵션을 모든 사용자에게 무료 제공",
        impact: "다중 벽면, HD/4K 혼합, 디스플레이 회전 등 자유로운 구성",
      },
      {
        name: "Labels",
        description: "콘텐츠에 사용자 정의 라벨 부착",
        impact: "다국어 지원, 검색 가능, 비디오 월에 표시",
      },
      {
        name: "Borders",
        description: "콘텐츠에 색상 테두리 추가",
        impact: "중요 콘텐츠 강조, 투명도 제어, 애니메이션 가능",
      },
      {
        name: "Direct Stream Source",
        description: "저프레임레이트 스트림 최적화",
        impact: "패킷 손실에 강한 안정적인 스트리밍",
      },
      {
        name: "Settings Backup",
        description: "시스템 설정 자동 백업",
        impact: "하드웨어 장애 시 빠른 복구, 템플릿 활용",
      },
    ],
    changes: [
      "HiperLayout 유료 옵션 → 기본 제공",
      "단순 콘텐츠 표시 → 라벨과 테두리로 시각적 강조",
      "수동 설정 관리 → 자동 백업 및 복구",
      "고정된 디스플레이 구성 → 완전히 자유로운 구성",
    ],
    keyImprovement: "엔터프라이즈급 유연성과 안정성 확보로 대규모 시스템에서도 안정적이고 다양한 구성 가능",
  },
}

export function VersionModal({ version, isOpen, onClose }: VersionModalProps) {
  if (!isOpen) return null

  const details = versionDetails[version as keyof typeof versionDetails]
  if (!details) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white dark:bg-slate-900 rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">{details.title}</h2>
            <p className="text-sm opacity-90 mt-1">이전 버전: {details.previousVersion}</p>
          </div>
          <Button onClick={onClose} variant="ghost" size="icon" className="text-white hover:bg-white/20">
            <X className="h-6 w-6" />
          </Button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          {/* Key Improvement */}
          <div className="bg-yellow-50 dark:bg-yellow-950 border-l-4 border-yellow-500 p-4 rounded-r-lg mb-6">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">핵심 개선사항</h3>
            <p className="text-yellow-900 dark:text-yellow-100">{details.keyImprovement}</p>
          </div>

          {/* New Features */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <span className="text-green-600">✨</span>
              새로운 기능
            </h3>
            <div className="space-y-4">
              {details.newFeatures.map((feature, index) => (
                <div key={index} className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-lg text-blue-600 dark:text-blue-400 mb-1">{feature.name}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{feature.description}</p>
                  <p className="text-sm">
                    <strong>효과:</strong> {feature.impact}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Changes from Previous Version */}
          <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <span className="text-blue-600">🔄</span>
              이전 버전과의 차이점
            </h3>
            <div className="space-y-3">
              {details.changes.map((change, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-950 rounded-lg">
                  <span className="text-blue-600 font-bold">→</span>
                  <span>{change}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t p-4 flex justify-end">
          <Button onClick={onClose} variant="default">
            닫기
          </Button>
        </div>
      </div>
    </div>
  )
}
