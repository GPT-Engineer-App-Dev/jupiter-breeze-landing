import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const jupiterFacts = [
    "Jupiter is the largest planet in our solar system.",
    "It has a Great Red Spot, a giant storm that has been raging for over 400 years.",
    "Jupiter has at least 79 moons, with the four largest called the Galilean moons.",
    "It's primarily composed of hydrogen and helium.",
    "A day on Jupiter is only about 10 hours long, but a year is nearly 12 Earth years."
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Discover Jupiter: The Giant of Our Solar System</h1>
      
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <img src="/placeholder.svg" alt="Jupiter" className="mx-auto object-cover w-full h-[400px] rounded-lg shadow-lg" />
        </div>
        
        <div className="md:w-1/2">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="facts">Facts</TabsTrigger>
              <TabsTrigger value="exploration">Exploration</TabsTrigger>
            </TabsList>
            <TabsContent value="overview">
              <Card>
                <CardHeader>
                  <CardTitle>Jupiter Overview</CardTitle>
                  <CardDescription>The fifth planet from the Sun and the largest in the Solar System</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Jupiter is a gas giant with a mass more than two and a half times that of all the other planets in the Solar System combined. Its iconic Great Red Spot and band-like cloud patterns make it one of the most recognizable planets.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="facts">
              <Card>
                <CardHeader>
                  <CardTitle>Fascinating Jupiter Facts</CardTitle>
                  <CardDescription>Discover interesting facts about the gas giant</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    {jupiterFacts.map((fact, index) => (
                      <li key={index}>{fact}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="exploration">
              <Card>
                <CardHeader>
                  <CardTitle>Exploring Jupiter</CardTitle>
                  <CardDescription>Missions and discoveries about the gas giant</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Several spacecraft have visited Jupiter, including Pioneer 10 and 11, Voyager 1 and 2, Galileo, and Juno. These missions have provided invaluable data about Jupiter's atmosphere, moons, and magnetic field.</p>
                  <Button className="mt-4">Learn More About Jupiter Missions</Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Index;
