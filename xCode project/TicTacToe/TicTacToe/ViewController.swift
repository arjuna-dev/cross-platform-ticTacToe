//
//  ViewController.swift
//  TicTacToe
//
//  Created by i5 on 10/17/18.
//  Copyright © 2018 appYeah. All rights reserved.
//

import UIKit
import WebKit

class ViewController: UIViewController {

    @IBOutlet weak var webView1: WKWebView!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        let url = Bundle.main.url(forResource: "index", withExtension: "html", subdirectory: "TTT")!
        webView1.loadFileURL(url, allowingReadAccessTo: url)
        let request = URLRequest(url: url)
        webView1.load(request)
    
    }
    


}

