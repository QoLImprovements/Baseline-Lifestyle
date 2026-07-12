/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "2-oz-1-serving",
  "description": "Sausages and Luncheon Meats",
  "id": "usda-sr-legacy-172940",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 56.0,
      "key": "2-oz-1-serving",
      "kind": "unit",
      "label": "2 oz 1 serving"
    }
  ],
  "name": "Thuringer, cervelat, summer sausage, beef, pork",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 3.33,
    "energy_kcal": 1510.0,
    "fat_g": 30.4,
    "fibre_g": 0.0,
    "folate_ug": 2.0,
    "iron_mg": 2.04,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 111.0,
    "potassium_mg": 260.0,
    "protein_g": 17.4,
    "salt_g": 3.25,
    "sat_fat_g": 11.5,
    "sodium_mg": 1300.0,
    "sugar_g": 0.85,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 16.6,
    "vitamin_e_mg": 0.22,
    "vitamin_k_ug": 1.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172940",
  "state": "Unspecified",
  "subcategory": "Sausages and Luncheon Meats",
  "tags": [
    "meat-and-poultry",
    "sausages-and-luncheon-meats",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
