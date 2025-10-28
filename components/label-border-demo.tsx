"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

type LabelPosition = "top" | "bottom" | "left" | "right"
type BorderThickness = "none" | "thin" | "medium" | "thick"

export function LabelBorderDemo() {
  const [labelPosition, setLabelPosition] = useState<LabelPosition>("top")
  const [borderThickness, setBorderThickness] = useState<BorderThickness>("medium")
  const [borderColor, setBorderColor] = useState("#ef4444") // red-500

  const borderWidthMap = {
    none: "0",
    thin: "2px",
    medium: "4px",
    thick: "8px",
  }

  const getLabelPositionStyles = () => {
    const baseStyles = "absolute bg-blue-500 text-white px-3 py-1 rounded text-sm font-semibold"
    switch (labelPosition) {
      case "top":
        return `${baseStyles} top-2 left-1/2 -translate-x-1/2`
      case "bottom":
        return `${baseStyles} bottom-2 left-1/2 -translate-x-1/2`
      case "left":
        return `${baseStyles} left-2 top-1/2 -translate-y-1/2`
      case "right":
        return `${baseStyles} right-2 top-1/2 -translate-y-1/2`
    }
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-6">
        {/* Label Controls */}
        <div className="space-y-3">
          <h4 className="font-semibold text-sm text-blue-600">라벨 위치 조정</h4>
          <div className="grid grid-cols-2 gap-2">
            <Button
              size="sm"
              variant={labelPosition === "top" ? "default" : "outline"}
              onClick={() => setLabelPosition("top")}
              className="text-xs"
            >
              상단
            </Button>
            <Button
              size="sm"
              variant={labelPosition === "bottom" ? "default" : "outline"}
              onClick={() => setLabelPosition("bottom")}
              className="text-xs"
            >
              하단
            </Button>
            <Button
              size="sm"
              variant={labelPosition === "left" ? "default" : "outline"}
              onClick={() => setLabelPosition("left")}
              className="text-xs"
            >
              좌측
            </Button>
            <Button
              size="sm"
              variant={labelPosition === "right" ? "default" : "outline"}
              onClick={() => setLabelPosition("right")}
              className="text-xs"
            >
              우측
            </Button>
          </div>
        </div>

        {/* Border Controls */}
        <div className="space-y-3">
          <h4 className="font-semibold text-sm text-purple-600">테두리 두께 조정</h4>
          <div className="grid grid-cols-2 gap-2">
            <Button
              size="sm"
              variant={borderThickness === "none" ? "default" : "outline"}
              onClick={() => setBorderThickness("none")}
              className="text-xs"
            >
              없음
            </Button>
            <Button
              size="sm"
              variant={borderThickness === "thin" ? "default" : "outline"}
              onClick={() => setBorderThickness("thin")}
              className="text-xs"
            >
              얇게
            </Button>
            <Button
              size="sm"
              variant={borderThickness === "medium" ? "default" : "outline"}
              onClick={() => setBorderThickness("medium")}
              className="text-xs"
            >
              보통
            </Button>
            <Button
              size="sm"
              variant={borderThickness === "thick" ? "default" : "outline"}
              onClick={() => setBorderThickness("thick")}
              className="text-xs"
            >
              두껍게
            </Button>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-medium">테두리 색상</label>
            <div className="flex gap-2">
              {["#ef4444", "#8b5cf6", "#10b981", "#f59e0b"].map((color) => (
                <button
                  key={color}
                  onClick={() => setBorderColor(color)}
                  className={`w-8 h-8 rounded border-2 ${
                    borderColor === color ? "border-slate-900 dark:border-slate-100" : "border-slate-300"
                  }`}
                  style={{ backgroundColor: color }}
                  aria-label={`색상 ${color} 선택`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Preview */}
      <div className="bg-slate-100 dark:bg-slate-800 p-8 rounded-lg">
        <div
          className="relative h-40 bg-slate-200 dark:bg-slate-700 rounded flex items-center justify-center"
          style={{
            borderWidth: borderWidthMap[borderThickness],
            borderColor: borderThickness !== "none" ? borderColor : "transparent",
            borderStyle: "solid",
          }}
        >
          <div className={getLabelPositionStyles()}>Camera 01</div>
          <div className="text-slate-500 dark:text-slate-400 text-sm">콘텐츠 영역</div>
        </div>
        <p className="text-xs text-center text-muted-foreground mt-3">
          실시간으로 라벨 위치와 테두리 스타일을 조정해보세요
        </p>
      </div>
    </div>
  )
}
