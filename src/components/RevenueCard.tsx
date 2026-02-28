"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrency, formatNumber } from "@/lib/utils";
import { DollarSign, TrendingUp, Users, Video } from "lucide-react";

export interface RevenueCardProps {
  title: string;
  value: number;
  description?: string;
  type?: "currency" | "number" | "views";
  icon?: "dollar" | "trend" | "users" | "video";
}

export function RevenueCard({
  title,
  value,
  description,
  type = "currency",
  icon = "dollar",
}: RevenueCardProps) {
  const icons = {
    dollar: <DollarSign className="h-4 w-4" />,
    trend: <TrendingUp className="h-4 w-4" />,
    users: <Users className="h-4 w-4" />,
    video: <Video className="h-4 w-4" />,
  };

  const formatValue = () => {
    switch (type) {
      case "currency":
        return formatCurrency(value);
      case "views":
        return formatNumber(value);
      case "number":
      default:
        return value.toLocaleString();
    }
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icons[icon]}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{formatValue()}</div>
        {description && (
          <p className="text-xs text-muted-foreground mt-1">{description}</p>
        )}
      </CardContent>
    </Card>
  );
}
