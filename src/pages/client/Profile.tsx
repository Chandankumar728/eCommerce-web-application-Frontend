import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Profile = () => {
  const [name, setName] = useState("Sahil Raj");
  const [email, setEmail] = useState("sahil.raj@example.com");
  const [bio, setBio] = useState("MERN Stack Developer | Passionate about building scalable web apps");
  const [address, setAddress] = useState("1234 Main St, New York, NY");
  const [phone, setPhone] = useState("+1 234 567 890");
  const [website, setWebsite] = useState("https://sahilraj.dev");

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <Card className="w-full max-w-lg p-6 shadow-lg">
        <CardHeader className="text-center">
          <Avatar className="mx-auto w-20 h-20">
            <AvatarImage src="https://via.placeholder.com/150" alt="User Avatar" />
            <AvatarFallback>SR</AvatarFallback>
          </Avatar>
          <CardTitle className="mt-4 text-2xl font-semibold">{name}</CardTitle>
          <p className="text-gray-500">{email}</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="text-sm text-gray-600">Full Name</label>
            <Input value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div>
            <label className="text-sm text-gray-600">Email</label>
            <Input value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <label className="text-sm text-gray-600">Bio</label>
            <Input value={bio} onChange={(e) => setBio(e.target.value)} />
          </div>
          <div>
            <label className="text-sm text-gray-600">Address</label>
            <Input value={address} onChange={(e) => setAddress(e.target.value)} />
          </div>
          <div>
            <label className="text-sm text-gray-600">Phone</label>
            <Input value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>
          <div>
            <label className="text-sm text-gray-600">Website</label>
            <Input value={website} onChange={(e) => setWebsite(e.target.value)} />
          </div>
          <Button className="w-full mt-4">Save Changes</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;
