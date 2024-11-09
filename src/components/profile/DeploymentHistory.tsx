"use client";
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { userData } from "@/lib/data";
import Link from "next/link";

export default function DeploymentHistory() {
  const [deployments, setDeployments] = useState([]);

  useEffect(() => {
    // This ensures deployments are only rendered on the client
    setDeployments(userData.deployments.slice(0, 5));
  }, []);

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Recent Uploads</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {deployments.length === 0 ? (
            <p>No deployments found.</p>
          ) : (
            deployments.map((deployment, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-[#2187e62f] rounded-lg cursor-pointer hover:bg-gray-200"
              >
                <div>
                  <h3 className="font-medium">{deployment.projectName}</h3>
                  <p className="text-sm text-muted-foreground">
                    {deployment.deployedAt
                      ? format(new Date(deployment.deployedAt), "PPp")
                      : "N/A"}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant={deployment.status === "success" ? "default" : "destructive"}>
                    {deployment.status}
                  </Badge>
                  <Link href={deployment.url || "#"} className="text-sm text-primary hover:underline">
                    View
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  );
}
