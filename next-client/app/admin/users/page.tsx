import { Plus } from "lucide-react";

export default function AdminUsersPage() {
      return (
            <>
                  <div className="primary-card">
                        <div className="card-wrapper">
                              <div className="card-header flex justify-between ">
                                    <span className="content-center font-bold">Users</span>
                                    <button className="default-button">
                                          <Plus className="w-4 h-4"/>
                                          New
                                    </button>
                              </div>
                              <div className="card-body">

                              </div>
                        </div>
                  </div>
            </>
      );
}