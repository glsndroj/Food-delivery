import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

export default function FoodCard() {
  return (
    <div>
      <Card className="w-[300px] h-[250px]">
        <CardHeader>
            <img src="" alt="FoodCard Image" />
        </CardHeader>
        <CardContent>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
        </CardContent>
      </Card>
    </div>
  );
}
