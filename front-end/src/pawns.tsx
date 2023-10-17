
import { Chessboard } from "react-chessboard";
import React, { forwardRef, useEffect, useRef, useState, useMemo } from "react";
import Root from "./routes/root";

function Pawns() {


    
    return (
      <div>
        <div style={{display: "flex", flexDirection: "row"}}>
        <Root></Root>
        <div style={{paddingLeft: "3rem"}}><h1>Liste des bases</h1>
        <ul>
          <li>Base 1: </li>
            
            <div style={{display: "flex", flexDirection: "row", gap: "3rem"}}>
            <div style={{width: "10rem",
                  height: "10rem"}}><Chessboard position="8/8/8/8/4P3/8/8/8 w - - 0 1"
                customBoardStyle={{
                  borderRadius: "4px",
                  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.5)",
                  width: "100%",
                  height: "100%"
                }}
              /></div>
              
            
            <div style={{width: "30rem"}}><p>Soit un pion en e4 si le roi blanc se trouve en d6 e6 ou f6 c'est gagnant.
              De même pour les autres pions sauf les pions Tour. Ceci est valable pour les pions
              de la deuxième rangée à la quatrième. Si le pion est à la cinquième rangée (par exemple
              en e5), alors il y a <b>5</b> cases clés (dans l'exemple: d6 et f6 sont deux les deux cases qui s'ajoutent).

            </p></div>
            </div>
            
          <li>Base 2: </li>
            <p>Cases correspondantes: En fonction des pions présents sur l'échiquier, puis des rois présents, on peut établir des paires de 
              cases correspondantes. Les exos pratiques sont la meilleure ressource pour comprendre cette notion. Cependant,
              on peut prendre exemple la base précédente comme exemple la case e5 pour le roi blanc est la case correspondante en e7 pour le roi noir.
            </p>
          <li>Base 3:</li>
          <div style={{display: "flex", flexDirection: "row", gap: "3rem"}}>
            <div style={{width: "10rem",
                  height: "10rem"}}><Chessboard position="8/8/1k1p4/3P1K2/8/8/8/8 w - - 0 1"
                customBoardStyle={{
                  borderRadius: "4px",
                  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.5)",
                  width: "100%",
                  height: "100%"
                }}
              /></div>
              
            
            <div style={{width: "30rem"}}><p> Les pions intouchables ! Il arrive parfois que une paire de pions soit intouchable dans le sens 
              où si un des rois attaque le pion adverse, l'autre couleur gagne. 
            </p></div>
            </div>
          <li></li>
        </ul></div>
        </div>
        
        
        


      </div>
    );
  }

  export default Pawns;