"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"

export function LabelBorderDemo() {
  const [showLabel, setShowLabel] = useState(true)
  const [labelText, setLabelText] = useState("Camera 01")
  const [showBorder, setShowBorder] = useState(true)
  const [contentOpacity, setContentOpacity] = useState(100)
  const [rotation, setRotation] = useState(0)

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {/* Label Controls */}
        <div className="space-y-3">
          <h4 className="font-semibold text-sm text-blue-600">라벨 설정</h4>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Button
                size="sm"
                variant={showLabel ? "default" : "outline"}
                onClick={() => setShowLabel(!showLabel)}
                className="text-xs flex-1"
              >
                {showLabel ? "라벨 켜짐" : "라벨 꺼짐"}
              </Button>
            </div>
            <div className="space-y-1">
              <label className="text-xs font-medium">라벨 텍스트</label>
              <Input
                type="text"
                value={labelText}
                onChange={(e) => setLabelText(e.target.value)}
                placeholder="라벨 입력..."
                className="text-sm"
              />
            </div>
          </div>
        </div>

        {/* Border Controls */}
        <div className="space-y-3">
          <h4 className="font-semibold text-sm text-purple-600">테두리 설정</h4>
          <div className="flex items-center gap-2">
            <Button
              size="sm"
              variant={showBorder ? "default" : "outline"}
              onClick={() => setShowBorder(!showBorder)}
              className="text-xs flex-1"
            >
              {showBorder ? "테두리 켜짐" : "테두리 꺼짐"}
            </Button>
          </div>
        </div>
      </div>

      <div className="space-y-3 border-t pt-4">
        <h4 className="font-semibold text-sm text-green-600">콘텐츠 설정</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div className="space-y-2">
            <label className="text-xs font-medium">콘텐츠 불투명도: {contentOpacity}%</label>
            <Slider
              value={[contentOpacity]}
              onValueChange={(value) => setContentOpacity(value[0])}
              min={0}
              max={100}
              step={5}
              className="w-full h-8"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-medium">콘텐츠 기울기: {rotation}°</label>
            <Slider
              value={[rotation]}
              onValueChange={(value) => setRotation(value[0])}
              min={0}
              max={360}
              step={5}
              className="w-full h-8"
            />
          </div>
        </div>
      </div>

      {/* Preview */}
      <div className="bg-slate-100 dark:bg-slate-800 p-6 sm:p-12 rounded-lg overflow-hidden flex items-center justify-center min-h-[250px]">
        <div
          className="relative h-32 w-48 sm:h-40 sm:w-64 rounded transition-transform shrink-0"
          style={{
            borderWidth: showBorder ? "4px" : "0",
            borderColor: "rgb(239, 68, 68)",
            borderStyle: "solid",
            transform: `rotate(${rotation}deg)`,
          }}
        >
          {/* Background layer with opacity */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded"
            style={{
              opacity: contentOpacity / 100,
            }}
          />

          {/* Content layer (always visible) */}
          <div className="relative h-full w-full flex items-center justify-center">
            {showLabel && (
              <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-white text-blue-600 px-3 py-1 rounded text-sm font-semibold shadow-md">
                {labelText}
              </div>
            )}
            <div className="text-black text-sm font-medium">콘텐츠 영역</div>
          </div>
        </div>
      </div>
    </div>
  )
}
