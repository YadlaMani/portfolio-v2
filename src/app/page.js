import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  Twitter,
  LinkedinIcon,
  Mail,
  DiscIcon as Discord,
  Youtube,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-cols-12 grid-rows-6 gap-4 h-screen p-4 bg-background">
      {/* Coding Profile */}
      <Card className="col-span-2 row-span-2">
        <CardHeader>
          <CardTitle>Coding Profile</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex justify-between items-center">
            <span>LeetCode</span>
            <Badge>500+</Badge>
          </div>
          <div className="flex justify-between items-center">
            <span>CodeForces</span>
            <Badge variant="secondary">1200</Badge>
          </div>
        </CardContent>
      </Card>

      {/* Web2 Projects */}
      <Card className="col-span-7 row-span-2">
        <CardHeader>
          <CardTitle>Web2 Projects</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <h3 className="font-medium">Project 1</h3>
            <p className="text-sm text-muted-foreground">Description here</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-medium">Project 2</h3>
            <p className="text-sm text-muted-foreground">Description here</p>
          </div>
        </CardContent>
      </Card>

      {/* Social Links */}
      <div className="col-span-3 row-span-1 grid grid-cols-3 gap-2">
        <Button variant="outline" size="icon">
          <Github className="h-[64px] w-[64px]" />
        </Button>
        <Button variant="outline" size="icon">
          <Twitter className="h-6 w-6" />
        </Button>
        <Button variant="outline" size="icon">
          <LinkedinIcon className="h-6 w-6" />
        </Button>
        <Button variant="outline" size="icon">
          <Mail className="h-6 w-6" />
        </Button>
        <Button variant="outline" size="icon">
          <Discord className="h-6 w-6" />
        </Button>
        <Button variant="outline" size="icon">
          <Youtube className="h-6 w-6" />
        </Button>
      </div>

      {/* Web3 Projects */}
      <Card className="col-span-3 row-span-3">
        <CardHeader>
          <CardTitle>Web3 Projects</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <h3 className="font-medium">DeFi Project</h3>
            <p className="text-sm text-muted-foreground">Description here</p>
            <Badge>Solidity</Badge>
          </div>
          <div className="space-y-2">
            <h3 className="font-medium">NFT Project</h3>
            <p className="text-sm text-muted-foreground">Description here</p>
            <Badge>Web3.js</Badge>
          </div>
        </CardContent>
      </Card>

      {/* Achievements */}
      <Card className="col-span-3 row-span-2">
        <CardHeader>
          <CardTitle>Achievements</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex items-center gap-2">
            <Badge variant="secondary">🏆</Badge>
            <span>Hackathon Winner</span>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="secondary">🎯</Badge>
            <span>Open Source Contributor</span>
          </div>
        </CardContent>
      </Card>

      {/* Profile Card */}
      <Card className="col-span-6 row-span-2">
        <CardContent className="p-0 h-full">
          <div className="flex h-full">
            <div className="w-1/3 relative">
              <Image
                src="/placeholder.svg?height=400&width=300"
                alt="Profile"
                width={300}
                height={400}
                className="object-cover h-full"
              />
            </div>
            <div className="w-2/3 p-6 flex flex-col justify-center">
              <h2 className="text-2xl font-bold mb-2">John Doe</h2>
              <p className="text-muted-foreground mb-4">Full Stack Developer</p>
              <div className="flex gap-2">
                <Badge>Available</Badge>
                <Badge variant="outline">Remote</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tech Stack */}
      <Card className="col-span-9 row-span-2">
        <CardHeader>
          <CardTitle>Tech Stack</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-4 gap-4">
          <div className="space-y-2">
            <h3 className="font-medium">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">React</Badge>
              <Badge variant="outline">Next.js</Badge>
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="font-medium">Backend</h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">Node.js</Badge>
              <Badge variant="outline">Python</Badge>
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="font-medium">Database</h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">MongoDB</Badge>
              <Badge variant="outline">PostgreSQL</Badge>
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="font-medium">Tools</h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">Git</Badge>
              <Badge variant="outline">Docker</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Personal */}
      <Card className="col-span-3 row-span-2">
        <CardHeader>
          <CardTitle>Personal</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <p className="text-sm text-muted-foreground">
            🌍 Based in San Francisco
          </p>
          <p className="text-sm text-muted-foreground">🎓 Computer Science</p>
          <p className="text-sm text-muted-foreground">🎮 Gaming Enthusiast</p>
        </CardContent>
      </Card>
    </div>
  );
}
