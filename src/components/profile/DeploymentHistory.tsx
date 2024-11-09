"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { format } from 'date-fns';
import { userData } from "@/lib/data";

export default function DeploymentHistory() {
  const deployments = userData.deployments.slice(0, 5); // Show only last 5 deployments

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Deployments</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {deployments.map((deployment, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
              <div>
                <h3 className="font-medium">{deployment.projectName}</h3>
                <p className="text-sm text-muted-foreground">
                  {format(new Date(deployment.deployedAt), 'PPp')}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Badge variant={deployment.status === 'success' ? 'default' : 'destructive'}>
                  {deployment.status}
                </Badge>
                <a
                  href={deployment.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  View
                </a>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}