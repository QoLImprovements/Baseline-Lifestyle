/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "serving-2-7-oz",
  "description": "Sausages and Luncheon Meats",
  "id": "usda-sr-legacy-174601",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 77.0,
      "key": "serving-2-7-oz",
      "kind": "unit",
      "label": "serving 2.7 oz"
    }
  ],
  "name": "Swisswurst, pork and beef, with swiss cheese, smoked",
  "nutritionPerBasis": {
    "calcium_mg": 74.0,
    "carbs_g": 1.6,
    "energy_kcal": 1290.0,
    "fat_g": 27.4,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 0.72,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 178.0,
    "potassium_mg": 206.0,
    "protein_g": 12.7,
    "salt_g": 2.0675,
    "sat_fat_g": 0.0,
    "sodium_mg": 827.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 100.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174601",
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
