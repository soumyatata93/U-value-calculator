function calculateWallUValue(UvalueType,HardboardID,PlywoodID,EPSID,MDFID,WPCID,SpruceID,EcofoilID,PIRID,GlassID,FermacellID,AirID){

      //getting values from user and converting all values to meter.

      var Hardboard = (document.getElementById(HardboardID));
      var Plywood= (document.getElementById(PlywoodID));
      var EPS= (document.getElementById(EPSID));
      var MDF= (document.getElementById(MDFID));
      var WPC= (document.getElementById(WPCID));
      var Spruce = (document.getElementById(SpruceID));
      var Ecofoil = (document.getElementById(EcofoilID));
      var PIR = (document.getElementById(PIRID));
      var Glass = (document.getElementById(GlassID));
      var Fermacell = (document.getElementById(FermacellID));
      var Air = (document.getElementById(AirID));


      let Rconstant = 0;

      if(Hardboard.value=='')
      {
            Hardboard.value = 0;
      }
      if(Plywood.value=='')
      {
            Plywood.value = 0;
      }
      if(EPS.value=='')
      {
            EPS.value = 0;
      }
      if(MDF.value=='')
      {
            MDF.value = 0;
      }
      if(WPC.value=='')
      { 
            WPC.value = 0;
      }
      if(Spruce.value=='')
      {
            Spruce.value = 0;
      }
      if(Ecofoil.value=='')
      {
            Ecofoil.value = 0;
      }
      if(PIR.value=='')
      {
            PIR.value = 0;
      }
      if(Glass.value=='')
      {
            Glass.value = 0;
      }
      if(Fermacell.value=='')
      {
            Fermacell.value = 0;
      }
      
      if(
            ((Hardboard.value>=3 && Hardboard.value<=3.2) || Hardboard.value == 0)&&
            ((Plywood.value>=3.6 && Plywood.value<=25) || Plywood.value == 0)&&
            ((EPS.value>=25 && EPS.value<=100) || EPS.value == 0)&&
            ((MDF.value>=6 && MDF.value<=25) || MDF.value == 0 )&&
            ((WPC.value>=10 && WPC.value<=25) || WPC.value == 0 )&&
            ((Spruce.value>=7.5 && Spruce.value<=20.5) || Spruce.value == 0 )&&
            ((PIR.value>=25 && PIR.value<=100) || PIR.value ==  0 )&&
            ((Glass.value>=8 && Glass.value<=10) || Glass.value == 0)&&
            ((Fermacell.value>=6 && Fermacell.value<=20) || Fermacell.value == 0 )
      )
      {     
            
            clearOtherClasses(Hardboard);
            clearOtherClasses(Plywood);
            clearOtherClasses(EPS);
            clearOtherClasses(MDF);
            clearOtherClasses(WPC);
            clearOtherClasses(Spruce);
            clearOtherClasses(PIR);
            clearOtherClasses(Glass);
            clearOtherClasses(Fermacell);
            clearOtherClasses(Ecofoil);
            clearOtherClasses(Air);
            
            //converting values to meter.

            var HardboardRvalue= Hardboard.value/1000;
            var PlywoodRvalue= Plywood.value/1000;
            var EPSRvalue= EPS.value/1000;
            var MDFRvalue= MDF.value/1000;
            var WPCRvalue= WPC.value/1000;
            var SpruceRvalue = Spruce.value/1000;
            var EcofoilRvalue = Ecofoil.value/1000;
            var PIRRvalue= PIR.value/1000;
            var GlassRvalue = Glass.value/1000;
            var FermacellRvalue = Fermacell.value/1000;
            //thermal conductivity Constants value.

            const hardboardConstant = 0.15;
            const plywoodConstant = 0.14;
            const EPSConstant = 0.034;
            const MDFConstant = 0.10;
            const WPCConstant = 0.156;
            const SpruceConstant = 0.12;
            const ecofoilConstant = Ecofoil.value >=0 ? 0.99 : 0;
            const PIRConstant = 0.026;
            const glassConstant = 0.96;
            const fermacellConstant = 0.32;
            let airConstant = 0;//airspace thickness 0
             
      
            
            // if(Air == 0)
            // {
            //       airConstant = 1;
            // }

            // if(Air == 0.5)
            // {
            //       airConstant = 0.11;
            // }

            // if(Air == 1)
            // {
            //       airConstant = 0.14;
            // }

            // if(Air == 2)
            // {
            //       airConstant = 0.16;
            // }

            // if(Air == 5)
            // {
            //       airConstant = 0.17;
            // }

            // if(Air == 10)
            // {
            //       airConstant = 0.17;
            // }

            // if(Air == 11)
            // {
            //       airConstant =0;
            // }
         
            
            //combined RSI+RSE Wall constant

            if(UvalueType == 'wall')
            {
                  Rconstant = 0.16;
            }

            if(UvalueType == 'roof')
            {
                  Rconstant = 0.14;
            }

            if(UvalueType == 'floor')
            {
                  Rconstant = 0.21;
            }
            
            HardboardRvalue = HardboardRvalue/hardboardConstant;
            PlywoodRvalue = PlywoodRvalue/plywoodConstant;
            EPSRvalue = EPSRvalue/EPSConstant; 
            MDFRvalue = MDFRvalue/MDFConstant;
            WPCRvalue = WPCRvalue/WPCConstant; 
            SpruceRvalue = SpruceRvalue/SpruceConstant ;
            EcofoilRvalue = EcofoilRvalue/ecofoilConstant ;
            PIRRvalue = PIRRvalue/PIRConstant ;
            GlassRvalue = GlassRvalue/glassConstant   ;
            FermacellRvalue = FermacellRvalue/fermacellConstant ;
            
            var Rvalue =      Rconstant + HardboardRvalue + PlywoodRvalue+ EPSRvalue
                              + MDFRvalue+ WPCRvalue+ SpruceRvalue+ PIRRvalue+ GlassRvalue
                              + FermacellRvalue+ airConstant+EcofoilRvalue;

            var Uvalue = 1/Rvalue;

            Uvalue=  (Math.round(Uvalue * 100) / 100).toFixed(2)

            if(UvalueType == 'wall')
            {
                  document.getElementById("WallUvalueResult").innerHTML = '<p>U value:</p>  '+Uvalue +'Km sq./W';
            }
            
            if(UvalueType == 'roof')
            {
                  document.getElementById("roofUvalueResult").innerHTML = '<p>U value:</p>  '+Uvalue +'Km sq./W';
            }

            if(UvalueType == 'floor')
            {
                  document.getElementById("floorUvalueResult").innerHTML = '<p>U value:</p>  '+Uvalue +'Km sq./W';
            }
              
          

            //alert(Uvalue);

      }
      else{
                  if((Hardboard.value<3 || Hardboard.value>3.2) && Hardboard.value!=0){

                        Hardboard.value="";
                        Hardboard.classList.add("red");           
                  }
                  if((Plywood.value<3.6  || Plywood.value>25) && Plywood.value!=0){

                        Plywood.value="";
                        Plywood.classList.add("red");                      
                  }
                  if((EPS.value<25 || EPS.value>100) && EPS.value!=0){

                        EPS.value="";
                        EPS.classList.add("red"); 
                  }
                 if((MDF.value<6 || MDF.value>25) && MDF.value!=0){

                        MDF.value="";
                        MDF.classList.add("red"); 
                  }
                  if((WPC.value<10 || WPC.value>25) && WPC.value!=0){

                        WPC.value="";
                        WPC.classList.add("red"); 
                  }
                  if((Spruce.value<7.5 || Spruce.value>20.5) && Spruce.value!=0){

                        Spruce.value="";
                        Spruce.classList.add("red"); 
                  }
                  if((PIR.value<25 || PIR.value>100) && PIR.value!=0){
                        PIR.value="";
                        PIR.classList.add("red"); 
                  
                  }
                  if((Glass.value<8 || Glass.value>10) && Glass.value!=0){

                        Glass.value="";
                        Glass.classList.add("red"); 
                  }
                  if((Fermacell.value<6 || Fermacell.value>20) && Fermacell.value!=0)
                  {
                        Fermacell.value="";
                        Fermacell.classList.add("red");
                  }
            }         
}
function clearOtherClasses(element){
      element.classList.remove("red");
}