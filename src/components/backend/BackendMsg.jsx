import React from 'react'
import { Link } from 'react-router-dom'



function BackendMsg() {


    return (
        <>
            <div className="content col-10">
            <h3>訊息管理</h3>
      <hr />
      <div className="d-flex justify-content-end">
        <Link  className="btn btn-primary mb-2" to="/dashboard/msg/add">新增推播訊息</Link>
      </div>

      <div className="msgArea">


      <div className="card mb-4">
        <div className="card-header d-flex justify-content-between">
          <div className="account">訊息標題：
          </div>

        </div>
        <div className="card-body d-flex justify-content-between align-items-center">

          <div className="Msg">
            好茶推廣!!!限時一個禮拜紅茶9折起!!!
          </div>
          <button className="btn btn-primary">編輯訊息</button>

        </div>

        </div>
      </div>

      <div className="card mb-4">
        <div className="card-header d-flex justify-content-between">
          <div className="account">訊息標題：
          </div>

        </div>
        <div className="card-body d-flex justify-content-between align-items-center">

          <div className="Msg">
            好茶推廣!!!限時一個禮拜紅茶9折起!!!
          </div>
         <div>已推播</div>

        </div>

        </div>
      </div>







        </>
    )
}

export default BackendMsg