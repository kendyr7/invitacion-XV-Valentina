"use client";

import React from "react";
import { InvitationContent } from "./InvitationContent";

export function InvitationContainer() {
  return (
    <div className="min-h-screen flex justify-center">
      <div className="w-full max-w-[500px]">
        <InvitationContent isVisible={true} />
      </div>
    </div>
  );
}
