import { NextRequest, NextResponse } from "next/server";

// This is our new mock data logic.
// It checks the user's input for keywords and returns a specific response.
function getMockAnalysis(text: string) {
  const lowerCaseText = text.toLowerCase();

  if (lowerCaseText.includes("coffee") || lowerCaseText.includes("roaster")) {
    return {
      brand_voice: "Artisanal & Aromatic",
      suggested_tagline: "Your Daily Ritual, Perfected.",
    };
  }
  if (
    lowerCaseText.includes("tech") ||
    lowerCaseText.includes("saas") ||
    lowerCaseText.includes("software")
  ) {
    return {
      brand_voice: "Innovative & Efficient",
      suggested_tagline: "The Future of Productivity is Here.",
    };
  }
  if (
    lowerCaseText.includes("fashion") ||
    lowerCaseText.includes("clothing") ||
    lowerCaseText.includes("apparel")
  ) {
    return {
      brand_voice: "Elegant & Modern",
      suggested_tagline: "Dress Code: Unforgettable.",
    };
  }

  // A default response if no keywords are found
  return {
    brand_voice: "Creative & Professional",
    suggested_tagline: "Bringing Your Vision to Life.",
  };
}

// This function handles POST requests to the /api/analyze endpoint
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const text = body.text || "";

    // Get the appropriate mock response based on the input
    const mockResponse = getMockAnalysis(text);

    // --- Simulated API Delay ---
    // We add a 2.5-second delay to make the animation feel meaningful.
    await new Promise((resolve) => setTimeout(resolve, 2500));

    // Send the structured mock JSON back to our frontend
    return NextResponse.json(mockResponse);
  } catch (error) {
    console.error("Error in mock API:", error);
    return NextResponse.json(
      { error: "Failed to get mock analysis" },
      { status: 500 }
    );
  }
}
