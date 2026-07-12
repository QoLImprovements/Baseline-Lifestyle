/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "sausage-10-long-x-1-1-4-dia",
  "description": "Sausages and Luncheon Meats",
  "id": "usda-sr-legacy-174577",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 227.0,
      "key": "sausage-10-long-x-1-1-4-dia",
      "kind": "unit",
      "label": "sausage (10\" long x 1-1/4\" dia)"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    }
  ],
  "name": "Polish sausage, pork",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 1.63,
    "energy_kcal": 1360.0,
    "fat_g": 28.7,
    "fibre_g": 0.0,
    "folate_ug": 2.0,
    "iron_mg": 1.44,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 136.0,
    "potassium_mg": 237.0,
    "protein_g": 14.1,
    "salt_g": 2.19,
    "sat_fat_g": 10.3,
    "sodium_mg": 876.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174577",
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
