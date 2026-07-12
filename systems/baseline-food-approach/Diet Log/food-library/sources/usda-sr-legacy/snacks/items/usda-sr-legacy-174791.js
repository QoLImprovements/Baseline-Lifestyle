/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Snacks",
  "defaultMeasure": "oz",
  "description": "Snacks",
  "id": "usda-sr-legacy-174791",
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
    }
  ],
  "name": "Snacks, vegetable chips, HAIN CELESTIAL GROUP, TERRA CHIPS",
  "nutritionPerBasis": {
    "calcium_mg": 79.0,
    "carbs_g": 58.0,
    "energy_kcal": 2160.0,
    "fat_g": 29.8,
    "fibre_g": 10.9,
    "folate_ug": 87.0,
    "iron_mg": 1.64,
    "magnesium_mg": 86.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 198.0,
    "potassium_mg": 1270.0,
    "protein_g": 4.13,
    "salt_g": 0.615,
    "sat_fat_g": 1.89,
    "sodium_mg": 246.0,
    "sugar_g": 9.75,
    "vitamin_a_ug": 97.0,
    "vitamin_c_mg": 12.1,
    "vitamin_e_mg": 8.16,
    "vitamin_k_ug": 44.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174791",
  "state": "Unspecified",
  "subcategory": "Snacks",
  "tags": [
    "snacks",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
