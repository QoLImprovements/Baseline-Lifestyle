/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "oz",
  "description": "Sausages and Luncheon Meats",
  "id": "usda-sr-legacy-173869",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 38.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    }
  ],
  "name": "Liver cheese, pork",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 2.1,
    "energy_kcal": 1270.0,
    "fat_g": 25.6,
    "fibre_g": 0.0,
    "folate_ug": 104.0,
    "iron_mg": 10.8,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 207.0,
    "potassium_mg": 226.0,
    "protein_g": 15.2,
    "salt_g": 3.05,
    "sat_fat_g": 8.96,
    "sodium_mg": 1220.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 5250.0,
    "vitamin_c_mg": 3.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173869",
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
