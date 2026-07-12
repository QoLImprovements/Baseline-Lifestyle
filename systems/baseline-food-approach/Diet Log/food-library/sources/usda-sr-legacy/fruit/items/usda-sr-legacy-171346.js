/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "oz",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-171346",
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
      "gramsPerUnit": 170.0,
      "key": "jar",
      "kind": "unit",
      "label": "jar"
    }
  ],
  "name": "Babyfood, fruit, apple and raspberry, junior",
  "nutritionPerBasis": {
    "calcium_mg": 5.0,
    "carbs_g": 15.4,
    "energy_kcal": 242.0,
    "fat_g": 0.2,
    "fibre_g": 2.1,
    "folate_ug": 1.0,
    "iron_mg": 0.22,
    "magnesium_mg": 4.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 8.0,
    "potassium_mg": 72.0,
    "protein_g": 0.2,
    "salt_g": 0.0,
    "sat_fat_g": 0.032,
    "sodium_mg": 0.0,
    "sugar_g": 13.0,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 28.9,
    "vitamin_e_mg": 0.07,
    "vitamin_k_ug": 0.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171346",
  "state": "Unspecified",
  "subcategory": "Baby Foods",
  "tags": [
    "baby-foods",
    "fruit",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
