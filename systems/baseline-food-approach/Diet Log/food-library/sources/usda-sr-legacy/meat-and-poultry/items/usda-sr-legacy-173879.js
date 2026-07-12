/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "link",
  "description": "Sausages and Luncheon Meats",
  "id": "usda-sr-legacy-173879",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 396.0,
      "key": "link",
      "kind": "unit",
      "label": "link"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    }
  ],
  "name": "Kielbasa, fully cooked, unheated",
  "nutritionPerBasis": {
    "calcium_mg": 24.0,
    "carbs_g": 3.72,
    "energy_kcal": 325.0,
    "fat_g": 29.6,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 0.75,
    "magnesium_mg": 14.0,
    "omega3_g": 0.273,
    "phosphorus_mg": 168.0,
    "potassium_mg": 217.0,
    "protein_g": 10.8,
    "salt_g": 2.32,
    "sat_fat_g": 9.68,
    "sodium_mg": 928.0,
    "sugar_g": 2.05,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 19.1,
    "vitamin_e_mg": 0.42,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173879",
  "state": "Cooked",
  "subcategory": "Sausages and Luncheon Meats",
  "tags": [
    "cooked",
    "meat-and-poultry",
    "sausages-and-luncheon-meats"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
