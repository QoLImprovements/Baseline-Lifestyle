/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "lb-whole",
  "description": "Pork Products",
  "id": "usda-sr-legacy-168345",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 453.6,
      "key": "lb-whole",
      "kind": "unit",
      "label": "lb whole"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz-whole",
      "kind": "unit",
      "label": "3 oz whole"
    }
  ],
  "name": "Pork, cured, ham -- water added, whole, boneless, separable lean and fat, unheated",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 1.42,
    "energy_kcal": 121.0,
    "fat_g": 5.38,
    "fibre_g": 0.0,
    "folate_ug": 2.0,
    "iron_mg": 0.85,
    "magnesium_mg": 19.0,
    "omega3_g": 0.028,
    "phosphorus_mg": 262.0,
    "potassium_mg": 312.0,
    "protein_g": 17.1,
    "salt_g": 2.825,
    "sat_fat_g": 1.89,
    "sodium_mg": 1130.0,
    "sugar_g": 1.42,
    "vitamin_a_ug": 13.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.23,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168345",
  "state": "Unspecified",
  "subcategory": "Pork Products",
  "tags": [
    "meat-and-poultry",
    "pork-products",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
