"use client"

import { useState, useEffect } from "react"
import {
  ChevronLeft,
  ChevronRight,
  Monitor,
  Users,
  Grid3x3,
  Layers,
  Tag,
  Frame,
  Database,
  Zap,
  ArrowRight,
  Info,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { DragDropDemo } from "@/components/drag-drop-demo"
import { VersionModal } from "@/components/version-modal"
import { LabelBorderDemo } from "@/components/label-border-demo"

const slides = [
  {
    title: "Hiperwall 소프트웨어",
    subtitle: "v8.0 ~ v9.0 주요 신기능",
    content: (
      <div className="flex flex-col items-center justify-center h-full gap-8">
        <div className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Hiperwall
        </div>
        <div className="text-3xl text-muted-foreground">비디오 월 관리 솔루션</div>
        <div className="text-xl text-muted-foreground mt-8">버전 8.0 → 8.5 → 9.0</div>
      </div>
    ),
  },
  {
    title: "1. 개요",
    content: (
      <div className="space-y-8">
        <div className="space-y-4">
          <h3 className="text-3xl font-semibold text-blue-600 flex items-center gap-3">
            <Monitor className="h-8 w-8" />
            Hiperwall란?
          </h3>
          <ul className="space-y-3 text-xl ml-8">
            <li className="flex items-start gap-3">
              <span className="text-blue-500 mt-1">•</span>
              <span>비디오 월(Video Wall) 관리 소프트웨어</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-500 mt-1">•</span>
              <span>여러 디스플레이를 하나의 대형 화면으로 통합 제어</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-500 mt-1">•</span>
              <span>버전 8.0 → 8.5 → 9.0으로 진화하며 강력한 기능 추가</span>
            </li>
          </ul>
        </div>
        <div className="bg-blue-50 dark:bg-blue-950 p-6 rounded-lg">
          <p className="text-lg leading-relaxed">
            Hiperwall은 통제실, 회의실, 모니터링 센터 등에서 사용되는 대형 비디오 월을 효율적으로 관리하는
            엔터프라이즈급 솔루션입니다. 최근 3개 메이저 버전을 통해 단순한 디스플레이 관리를 넘어 다중 사용자 협업,
            직관적인 UI, 그리고 유연한 구성 관리 기능을 갖춘 종합 플랫폼으로 발전했습니다.
          </p>
        </div>
        <VersionComparisonButtons />
      </div>
    ),
  },
  {
    title: "2. Version 8.0 - HiperZones",
    content: (
      <div className="space-y-6">
        <div className="bg-blue-50 dark:bg-blue-950 p-6 rounded-lg">
          <h3 className="text-2xl font-semibold text-blue-600 mb-4 flex items-center gap-3">
            <Grid3x3 className="h-7 w-7" />
            독립적인 영역(Zone) 관리 시스템
          </h3>
          <p className="text-lg mb-4 leading-relaxed">
            HiperZones는 8.0 버전의 가장 혁신적인 기능으로, 하나의 비디오 월을 논리적으로 분할하여 각 영역을 독립적으로
            관리할 수 있게 합니다. 이를 통해 여러 팀이 동시에 작업하면서도 서로의 콘텐츠를 방해하지 않는 안전한 협업
            환경을 제공합니다.
          </p>
          <ul className="space-y-3 text-lg ml-6">
            <li className="flex items-start gap-3">
              <span className="text-blue-500">✓</span>
              <span>하나의 비디오 월을 여러 독립 영역으로 분할</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-500">✓</span>
              <span>각 영역을 다른 사용자가 동시에 제어 가능</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-500">✓</span>
              <span>한 영역의 콘텐츠가 다른 영역에 간섭하지 않음</span>
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-4 gap-2 p-4 bg-slate-100 dark:bg-slate-900 rounded-lg">
          <div className="aspect-square bg-blue-500 rounded flex items-center justify-center text-white font-semibold">
            Zone 1
          </div>
          <div className="aspect-square bg-purple-500 rounded flex items-center justify-center text-white font-semibold">
            Zone 2
          </div>
          <div className="aspect-square bg-green-500 rounded flex items-center justify-center text-white font-semibold">
            Zone 3
          </div>
          <div className="aspect-square bg-orange-500 rounded flex items-center justify-center text-white font-semibold">
            Zone 4
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-purple-50 dark:bg-purple-950 p-4 rounded-lg">
            <h4 className="font-semibold text-purple-600 mb-2">Wall Zone</h4>
            <p className="text-sm">자동 생성되는 기본 영역 - 전체 벽면을 커버</p>
          </div>
          <div className="bg-purple-50 dark:bg-purple-950 p-4 rounded-lg">
            <h4 className="font-semibold text-purple-600 mb-2">Created Zone</h4>
            <p className="text-sm">사용자가 그리드 기반으로 생성하는 커스텀 영역</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "2. Version 8.0 - 활용 사례",
    content: (
      <div className="space-y-6">
        <div className="grid grid-cols-1 gap-6">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-3 flex items-center gap-2">
              <Users className="h-6 w-6" />
              통제실 (Control Room)
            </h3>
            <p className="text-lg mb-2">여러 팀이 동시에 각자 영역 관리</p>
            <p className="text-sm text-muted-foreground">
              보안팀, 운영팀, 모니터링팀이 각자의 Zone에서 독립적으로 작업하며 중요 정보가 실수로 삭제되거나 가려지는
              것을 방지합니다.
            </p>
          </div>
          <div className="bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-purple-700 dark:text-purple-300 mb-3 flex items-center gap-2">
              <Layers className="h-6 w-6" />
              다중 벽면 시스템
            </h3>
            <p className="text-lg mb-2">회의실과 통제실을 독립적으로 운영</p>
            <p className="text-sm text-muted-foreground">
              하나의 HiperController로 여러 물리적 벽면을 관리하면서 각 벽면의 콘텐츠가 서로 간섭하지 않도록 보호합니다.
            </p>
          </div>
          <div className="bg-gradient-to-r from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-green-700 dark:text-green-300 mb-3 flex items-center gap-2">
              <Database className="h-6 w-6" />
              콘텐츠 무결성 보호
            </h3>
            <p className="text-lg mb-2">중요 정보가 실수로 삭제되지 않도록 보호</p>
            <p className="text-sm text-muted-foreground">
              Zone별 접근 권한 관리로 권한이 없는 사용자는 해당 Zone의 콘텐츠를 보거나 수정할 수 없어 보안과 안정성이
              크게 향상됩니다.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "2. Version 8.0 - 추가 기능",
    content: (
      <div className="space-y-6">
        <div className="space-y-4">
          <div className="border-l-4 border-blue-500 pl-4 bg-blue-50 dark:bg-blue-950 p-4 rounded-r-lg">
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <Zap className="h-6 w-6 text-blue-500" />
              HiperSource Streamer+
            </h3>
            <p className="text-base mb-3 text-muted-foreground">
              NVIDIA GPU의 하드웨어 가속을 활용한 차세대 스트리밍 솔루션
            </p>
            <ul className="space-y-2 text-lg ml-4">
              <li>• UHD 해상도 및 고프레임레이트 지원</li>
              <li>• Magewell 캡처 카드 지원</li>
              <li>• 기존 Streamer 대비 더 많은 소스를 단일 시스템에서 처리</li>
            </ul>
          </div>
          <div className="border-l-4 border-purple-500 pl-4 bg-purple-50 dark:bg-purple-950 p-4 rounded-r-lg">
            <h3 className="text-xl font-semibold mb-2">HiperCast Pull</h3>
            <p className="text-base mb-3 text-muted-foreground">여러 Hiperwall 시스템 간 안전한 콘텐츠 공유</p>
            <ul className="space-y-2 text-lg ml-4">
              <li>• 암호화된 아웃바운드 연결로 방화벽 설정 간소화</li>
              <li>• 필요한 소스만 선택적으로 구독 가능</li>
              <li>• 지사와 본사 간 실시간 콘텐츠 공유</li>
            </ul>
          </div>
          <div className="border-l-4 border-green-500 pl-4 bg-green-50 dark:bg-green-950 p-4 rounded-r-lg">
            <h3 className="text-xl font-semibold mb-2">HiperView+</h3>
            <p className="text-base mb-3 text-muted-foreground">HiperView Quantum 기술 기반의 성능 향상 버전</p>
            <ul className="space-y-2 text-lg ml-4">
              <li>• NVIDIA GPU 기반 고성능 렌더링</li>
              <li>• 기존 라이선스 보유 고객에게 무료 제공</li>
              <li>• 동기화된 비디오 디코딩 지원</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "3. Version 8.5 - HiperOperator 재설계",
    content: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-6 rounded-lg">
          <h3 className="text-2xl font-bold mb-2">완전히 새로운 UI</h3>
          <p className="text-lg">사용자 경험을 최우선으로 고려한 직관적인 인터페이스로 전면 재설계</p>
        </div>

        <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-lg">
          <h4 className="font-semibold text-lg mb-4">실제로 체험해보세요!</h4>
          <DragDropDemo />
        </div>

        <div className="bg-yellow-50 dark:bg-yellow-950 p-4 rounded-lg">
          <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-3">주요 기능</h4>
          <ul className="space-y-2 ml-4 text-base">
            <li>
              • <strong>SmartSnap™</strong>: 그리드에 자동으로 정렬되는 스냅 기능
            </li>
            <li>
              • <strong>SmartSwap™</strong>: Ctrl 키로 콘텐츠를 즉시 교체
            </li>
            <li>
              • <strong>실시간 검색</strong>: 타이핑과 동시에 콘텐츠 필터링
            </li>
            <li>
              • <strong>원격 Browser 제어</strong>: HiperOperator에서 직접 웹 페이지 조작
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "3. Version 8.5 - 추가 개선사항",
    content: (
      <div className="space-y-6">
        <div className="space-y-4">
          <div className="bg-blue-50 dark:bg-blue-950 p-5 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-600 mb-3">HiperController 개선</h3>
            <ul className="space-y-3 ml-4">
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                <div>
                  <strong>Drag-and-Drop 지원</strong>
                  <p className="text-sm text-muted-foreground">Shift 키로 SmartSnap, Ctrl 키로 SmartSwap</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                <div>
                  <strong>우클릭 컨텍스트 메뉴</strong>
                  <p className="text-sm text-muted-foreground">콘텐츠 닫기, 스냅, Zone 이동, 레이어 조정 등</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                <div>
                  <strong>Multi-Zone Environments</strong>
                  <p className="text-sm text-muted-foreground">관리자가 전체 시스템 상태를 한 번에 저장/복원</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="bg-purple-50 dark:bg-purple-950 p-5 rounded-lg">
            <h3 className="text-xl font-semibold text-purple-600 mb-3">기타 개선</h3>
            <ul className="space-y-3 ml-4">
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-1">•</span>
                <div>
                  <strong>Dark Mode 추가</strong>
                  <p className="text-sm text-muted-foreground">어두운 환경에서 눈의 피로 감소</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-1">•</span>
                <div>
                  <strong>Streamer+ KVM 기능 강화</strong>
                  <p className="text-sm text-muted-foreground">창 모드 및 HiperOperator에서도 KVM 사용 가능</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 mt-1">•</span>
                <div>
                  <strong>Quantum 동기화 자동 복구</strong>
                  <p className="text-sm text-muted-foreground">동기화 문제 자동 감지 및 복구</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "4. Version 9.0 - HiperLayout",
    content: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-6 rounded-lg">
          <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
            <Grid3x3 className="h-7 w-7" />
            모든 사용자에게 기본 제공
          </h3>
          <p className="text-lg mb-2">이전 유료 옵션 → 이제 무료!</p>
          <p className="text-base opacity-90">
            강력한 디스플레이 구성 기능이 모든 Hiperwall 시스템에 기본으로 포함되어 더욱 유연하고 다양한 비디오 월
            구성이 가능해졌습니다.
          </p>
        </div>

        <div className="flex gap-2 p-4 bg-slate-100 dark:bg-slate-1000 rounded-lg items-center justify-center">
          <div className="w-48 h-28 bg-gradient-to-br from-blue-400 to-blue-600 rounded flex items-center justify-center text-white text-sm font-semibold">
            HD
          </div>
          <div className="w-48 h-28 bg-gradient-to-br from-purple-400 to-purple-600 rounded flex items-center justify-center text-white text-sm font-semibold">
            4K
          </div>
          <div className="w-48 h-28 bg-gradient-to-br from-green-400 to-green-600 rounded flex items-center justify-center text-white text-sm font-semibold">
            Portrait
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-600 mb-2">✓ 다중 벽면 지원</h4>
            <p className="text-sm text-muted-foreground">하나의 Controller로 여러 벽면 관리</p>
          </div>
          <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-600 mb-2">✓ HD/4K 혼합 사용</h4>
            <p className="text-sm text-muted-foreground">다양한 해상도 디스플레이 통합</p>
          </div>
          <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-600 mb-2">✓ 디스플레이 회전</h4>
            <p className="text-sm text-muted-foreground">Portrait 모드 및 임의 각도 회전</p>
          </div>
          <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-600 mb-2">✓ 스케일링 지원</h4>
            <p className="text-sm text-muted-foreground">LED와 LCD 벽면 간 원활한 전환</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "4. Version 9.0 - Labels & Borders",
    content: (
      <div className="space-y-6">
        <div className="bg-gradient-to-br from-blue-50 to-purple-100 dark:from-blue-950 dark:to-purple-900 p-6 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
            <Tag className="h-7 w-7 text-blue-600" />
            <span className="text-blue-600">Labels</span>
            <span className="text-muted-foreground">&</span>
            <Frame className="h-7 w-7 text-purple-600" />
            <span className="text-purple-600">Borders</span>
          </h3>
          <p className="text-base mb-4 text-muted-foreground">
            콘텐츠에 라벨과 테두리를 추가하여 식별성을 높이고 중요한 정보를 시각적으로 강조합니다.
          </p>
        </div>

        <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-lg">
          <h4 className="font-semibold text-lg mb-4">실제로 체험해보세요!</h4>
          <LabelBorderDemo />
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-blue-50 dark:bg-blue-950 p-5 rounded-lg">
            <h4 className="text-lg font-semibold text-blue-600 mb-3 flex items-center gap-2">
              <Tag className="h-5 w-5" />
              Labels 기능
            </h4>
            <ul className="space-y-2 text-sm">
              <li>• 다국어 문자 지원</li>
              <li>• 실시간 검색 가능</li>
              <li>• 비디오 월에 표시 옵션</li>
              <li>• 긴 라벨은 자동 스크롤</li>
              <li>• 위치 조정 가능 (상/하/좌/우)</li>
            </ul>
          </div>
          <div className="bg-purple-50 dark:bg-purple-950 p-5 rounded-lg">
            <h4 className="text-lg font-semibold text-purple-600 mb-3 flex items-center gap-2">
              <Frame className="h-5 w-5" />
              Borders 기능
            </h4>
            <ul className="space-y-2 text-sm">
              <li>• 임의의 색상 선택</li>
              <li>• 투명도 제어 (0-100%)</li>
              <li>• HiperInterface로 애니메이션</li>
              <li>• 벽면 크기에 비례한 두께</li>
              <li>• 테두리의 ON/OFF</li>
            </ul>
          </div>
        </div>

        <div className="bg-yellow-50 dark:bg-yellow-900 p-5 rounded-lg">
          <h4 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">활용 예시</h4>
          <p className="text-base">
            긴급 상황 시 경고 콘텐츠에 빨간 테두리를 깜빡이게 하거나, VIP 방문 시 중요 카메라 피드에 라벨과 테두리를
            추가하여 주목도를 높일 수 있습니다. 라벨 위치를 조정하여 콘텐츠와 겹치지 않게 배치할 수 있습니다.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "4. Version 9.0 - 추가 기능",
    content: (
      <div className="space-y-5">
        <div className="border-l-4 border-blue-500 pl-5 py-3 bg-blue-50 dark:bg-blue-950 rounded-r-lg">
          <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
            <Zap className="h-6 w-6 text-blue-500" />
            Direct Stream Source
          </h3>
          <p className="text-base mb-2 text-muted-foreground">
            저프레임레이트 스트림(15 FPS 이하)을 위한 최적화된 렌더링 방식
          </p>
          <ul className="space-y-2 text-base ml-4">
            <li>• 복잡한 동기화 처리를 우회하여 효율성 향상</li>
            <li>• 패킷 손실에 강한 안정적인 스트리밍</li>
            <li>• HiperView+ 및 Quantum에서 지원</li>
          </ul>
        </div>
        <div className="border-l-4 border-purple-500 pl-5 py-3 bg-purple-50 dark:bg-purple-950 rounded-r-lg">
          <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
            <Database className="h-6 w-6 text-purple-500" />
            Settings Backup
          </h3>
          <p className="text-base mb-2 text-muted-foreground">시스템 설정을 자동으로 백업하여 장애 복구를 간소화</p>
          <ul className="space-y-2 text-base ml-4">
            <li>• HiperCare 구독자 전용 기능</li>
            <li>• HiperController 및 HiperSource 설정 자동 저장</li>
            <li>• 하드웨어 교체 시 빠른 복구 (동일한 ID 유지)</li>
            <li>• 템플릿으로 사용하여 새 시스템 구성 가능</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "5. 주요 개선 흐름 요약",
    content: (
      <div className="space-y-6">
        <div className="overflow-hidden rounded-lg border">
          <table className="w-full">
            <thead className="bg-blue-100 dark:bg-blue-900">
              <tr>
                <th className="px-6 py-4 text-left text-lg font-semibold">버전</th>
                <th className="px-6 py-4 text-left text-lg font-semibold">핵심 키워드</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr className="bg-blue-50 dark:bg-blue-950">
                <td className="px-6 py-4 font-semibold text-lg">8.0</td>
                <td className="px-6 py-4 text-lg">HiperZones, Streamer+, 다중 사용자 제어</td>
              </tr>
              <tr className="bg-purple-50 dark:bg-purple-950">
                <td className="px-6 py-4 font-semibold text-lg">8.5</td>
                <td className="px-6 py-4 text-lg">UI 혁신, Drag-and-Drop, Multi-Zone</td>
              </tr>
              <tr className="bg-green-50 dark:bg-green-950">
                <td className="px-6 py-4 font-semibold text-lg">9.0</td>
                <td className="px-6 py-4 text-lg">HiperLayout 기본화, Labels, Borders, 백업</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-lg">
          <h4 className="font-semibold text-lg mb-3">버전별 발전 방향</h4>
          <div className="space-y-3 text-base">
            <p>
              <strong className="text-blue-600">v8.0</strong>은 협업의 기반을 마련했습니다. HiperZones를 통해 여러
              사용자가 동시에 작업할 수 있는 환경을 구축했습니다.
            </p>
            <p>
              <strong className="text-purple-600">v8.5</strong>는 사용성에 집중했습니다. 직관적인 UI와 드래그 앤
              드롭으로 누구나 쉽게 사용할 수 있게 되었습니다.
            </p>
            <p>
              <strong className="text-green-600">v9.0</strong>은 유연성과 안정성을 강화했습니다. HiperLayout 기본 제공과
              백업 기능으로 엔터프라이즈급 안정성을 확보했습니다.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "5. 발전 방향",
    content: (
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-lg">
            <div className="text-4xl mb-3">🤝</div>
            <h3 className="text-xl font-bold mb-2">협업 강화</h3>
            <p className="text-base">여러 사용자가 간섭 없이 동시 작업</p>
            <p className="text-sm mt-2 opacity-90">Zone 기반 권한 관리로 안전한 협업 환경 제공</p>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-lg">
            <div className="text-4xl mb-3">✨</div>
            <h3 className="text-xl font-bold mb-2">사용성 개선</h3>
            <p className="text-base">직관적인 UI, 드래그 앤 드롭</p>
            <p className="text-sm mt-2 opacity-90">학습 곡선을 최소화하여 누구나 쉽게 사용</p>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-lg">
            <div className="text-4xl mb-3">🎨</div>
            <h3 className="text-xl font-bold mb-2">유연성 증대</h3>
            <p className="text-base">다양한 디스플레이 구성</p>
            <p className="text-sm mt-2 opacity-90">HD, 4K, Portrait 등 자유로운 조합</p>
          </div>
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-lg">
            <div className="text-4xl mb-3">🛡️</div>
            <h3 className="text-xl font-bold mb-2">안정성 향상</h3>
            <p className="text-base">자동 백업, 동기화 복구</p>
            <p className="text-sm mt-2 opacity-90">장애 상황에서도 빠른 복구 가능</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "6. 결론",
    content: (
      <div className="space-y-8">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg">
          <h3 className="text-3xl font-bold mb-4">Hiperwall의 진화</h3>
          <div className="space-y-3 text-xl">
            <p>
              단순 비디오 월 → <strong>협업 플랫폼</strong>
            </p>
            <p>
              기술적 복잡성 → <strong>직관적 사용성</strong>
            </p>
            <p>
              고정된 구성 → <strong>유연한 커스터마이징</strong>
            </p>
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-lg mb-4">적용 분야 및 활용</h4>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 dark:bg-blue-950 p-5 rounded-lg">
              <h5 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <Users className="h-5 w-5 text-blue-600" />
                통제실 (Control Room)
              </h5>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-blue-600">보안팀</span>
                  <ArrowRight className="h-4 w-4 text-blue-400" />
                  <span className="text-muted-foreground">CCTV 모니터링 Zone</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-600">운영팀</span>
                  <ArrowRight className="h-4 w-4 text-blue-400" />
                  <span className="text-muted-foreground">시스템 상태 Zone</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-600">관리팀</span>
                  <ArrowRight className="h-4 w-4 text-blue-400" />
                  <span className="text-muted-foreground">데이터 분석 Zone</span>
                </div>
              </div>
            </div>
            <div className="bg-purple-50 dark:bg-purple-950 p-5 rounded-lg">
              <h5 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <Monitor className="h-5 w-5 text-purple-600" />
                회의실 (Briefing Room)
              </h5>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-purple-600">발표자료</span>
                  <ArrowRight className="h-4 w-4 text-purple-400" />
                  <span className="text-muted-foreground">전체 화면 표시</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-purple-600">실시간 데이터</span>
                  <ArrowRight className="h-4 w-4 text-purple-400" />
                  <span className="text-muted-foreground">측면 Zone에 고정</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-purple-600">화상회의</span>
                  <ArrowRight className="h-4 w-4 text-purple-400" />
                  <span className="text-muted-foreground">하단 Zone 배치</span>
                </div>
              </div>
            </div>
            <div className="bg-green-50 dark:bg-green-950 p-5 rounded-lg">
              <h5 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <Layers className="h-5 w-5 text-green-600" />
                모니터링 센터
              </h5>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-green-600">네트워크 상태</span>
                  <ArrowRight className="h-4 w-4 text-green-400" />
                  <span className="text-muted-foreground">실시간 대시보드</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600">알람 발생</span>
                  <ArrowRight className="h-4 w-4 text-green-400" />
                  <span className="text-muted-foreground">빨간 Border로 강조</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600">카메라 피드</span>
                  <ArrowRight className="h-4 w-4 text-green-400" />
                  <span className="text-muted-foreground">Label로 위치 표시</span>
                </div>
              </div>
            </div>
            <div className="bg-orange-50 dark:bg-orange-950 p-5 rounded-lg">
              <h5 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <Grid3x3 className="h-5 w-5 text-orange-600" />
                디지털 사이니지
              </h5>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-orange-600">광고 콘텐츠</span>
                  <ArrowRight className="h-4 w-4 text-orange-400" />
                  <span className="text-muted-foreground">Scheduler로 자동 전환</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-orange-600">긴급 공지</span>
                  <ArrowRight className="h-4 w-4 text-orange-400" />
                  <span className="text-muted-foreground">Wall Zone으로 전체 표시</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-orange-600">다국어 안내</span>
                  <ArrowRight className="h-4 w-4 text-orange-400" />
                  <span className="text-muted-foreground">Label 다국어 지원</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
]

function VersionComparisonButtons() {
  const [selectedVersion, setSelectedVersion] = useState<string | null>(null)

  return (
    <>
      <div className="bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 p-6 rounded-lg">
        <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
          <Info className="h-5 w-5 text-blue-600" />
          버전별 상세 정보
        </h4>
        <div className="grid grid-cols-3 gap-4">
          <Button
            onClick={() => setSelectedVersion("8.0")}
            variant="outline"
            className="h-auto py-4 flex flex-col items-center gap-2 hover:bg-blue-50 dark:hover:bg-blue-950"
          >
            <span className="text-2xl font-bold text-blue-600">v8.0</span>
            <span className="text-sm text-muted-foreground">협업의 시작</span>
            <span className="text-xs text-blue-600">자세히 보기 →</span>
          </Button>
          <Button
            onClick={() => setSelectedVersion("8.5")}
            variant="outline"
            className="h-auto py-4 flex flex-col items-center gap-2 hover:bg-purple-50 dark:hover:bg-purple-950"
          >
            <span className="text-2xl font-bold text-purple-600">v8.5</span>
            <span className="text-sm text-muted-foreground">사용성의 혁신</span>
            <span className="text-xs text-purple-600">자세히 보기 →</span>
          </Button>
          <Button
            onClick={() => setSelectedVersion("9.0")}
            variant="outline"
            className="h-auto py-4 flex flex-col items-center gap-2 hover:bg-green-50 dark:hover:bg-green-950"
          >
            <span className="text-2xl font-bold text-green-600">v9.0</span>
            <span className="text-sm text-muted-foreground">유연성과 안정성</span>
            <span className="text-xs text-green-600">자세히 보기 →</span>
          </Button>
        </div>
      </div>

      <VersionModal
        version={selectedVersion || ""}
        isOpen={selectedVersion !== null}
        onClose={() => setSelectedVersion(null)}
      />
    </>
  )
}

export default function PresentationPage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        nextSlide()
      } else if (e.key === "ArrowLeft") {
        prevSlide()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [currentSlide])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 flex flex-col">
      {/* Slide Container */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-6xl aspect-[16/9] bg-white dark:bg-slate-950 rounded-2xl shadow-2xl overflow-hidden">
          {/* Slide Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
            <h1 className="text-3xl font-bold">{slides[currentSlide].title}</h1>
            {slides[currentSlide].subtitle && (
              <p className="text-xl mt-2 opacity-90">{slides[currentSlide].subtitle}</p>
            )}
          </div>

          {/* Slide Content */}
          <div className="p-12 h-[calc(100%-88px)] overflow-auto">{slides[currentSlide].content}</div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="pb-8 px-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            variant="outline"
            size="lg"
            className="gap-2 bg-transparent"
          >
            <ChevronLeft className="h-5 w-5" />
            이전
          </Button>

          <div className="flex items-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentSlide ? "w-8 bg-blue-600" : "w-2 bg-slate-300 dark:bg-slate-600 hover:bg-slate-400"
                }`}
                aria-label={`슬라이드 ${index + 1}로 이동`}
              />
            ))}
          </div>

          <Button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            variant="outline"
            size="lg"
            className="gap-2 bg-transparent"
          >
            다음
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        <div className="text-center mt-4 text-sm text-muted-foreground">
          {currentSlide + 1} / {slides.length} | 키보드 화살표 또는 스페이스바로 이동
        </div>
      </div>
    </div>
  )
}
