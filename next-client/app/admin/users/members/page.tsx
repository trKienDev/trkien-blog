'use client';

import { useState } from "react";
import AddMemberModal from "./components/add-member-modal";

export default function AdminUsersMembersPage() {
      const [open, setOpen] = useState(false);
      
      return (
            <>
                  <div className="primary-card">
                        <div className="card-wrapper">
                              <div className="card-header flex justify-between ">
                                    <span className="content-center font-bold">Members</span>

                                    <button onClick={() => setOpen(true)} className="default-button">
                                          New member
                                    </button>
                              </div>
                              <div className="card-body">

                              </div>
                        </div>
                  </div>

                  <AddMemberModal open={open} onClose={() => setOpen(false)}/>
            </>
      )
}