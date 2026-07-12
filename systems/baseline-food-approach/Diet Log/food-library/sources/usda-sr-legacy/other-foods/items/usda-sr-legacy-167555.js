/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "oz",
  "description": "Snacks",
  "id": "usda-sr-legacy-167555",
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
      "gramsPerUnit": 60.0,
      "key": "10-twists",
      "kind": "unit",
      "label": "10 twists"
    }
  ],
  "name": "Snacks, pretzels, hard, plain, salted",
  "nutritionPerBasis": {
    "calcium_mg": 27.0,
    "carbs_g": 80.4,
    "energy_kcal": 384.0,
    "fat_g": 2.93,
    "fibre_g": 3.4,
    "folate_ug": 166.0,
    "iron_mg": 4.58,
    "magnesium_mg": 29.0,
    "omega3_g": 0.063,
    "phosphorus_mg": 128.0,
    "potassium_mg": 223.0,
    "protein_g": 10.0,
    "salt_g": 3.1,
    "sat_fat_g": 0.391,
    "sodium_mg": 1240.0,
    "sugar_g": 2.21,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 2.1,
    "vitamin_e_mg": 0.47,
    "vitamin_k_ug": 2.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167555",
  "state": "Unspecified",
  "subcategory": "Snacks",
  "tags": [
    "other-foods",
    "snacks",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
