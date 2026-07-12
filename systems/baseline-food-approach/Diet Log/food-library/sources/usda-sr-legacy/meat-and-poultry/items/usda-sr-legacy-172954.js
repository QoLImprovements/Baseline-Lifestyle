/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "serving-2-67-oz",
  "description": "Sausages and Luncheon Meats",
  "id": "usda-sr-legacy-172954",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 76.0,
      "key": "serving-2-67-oz",
      "kind": "unit",
      "label": "serving 2.67 oz"
    }
  ],
  "name": "Sausage, Polish, pork and beef, smoked",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 1.98,
    "energy_kcal": 301.0,
    "fat_g": 26.6,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 1.0,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 107.0,
    "potassium_mg": 189.0,
    "protein_g": 12.1,
    "salt_g": 2.12,
    "sat_fat_g": 9.21,
    "sodium_mg": 848.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172954",
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
