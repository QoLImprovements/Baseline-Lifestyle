/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "pretzel",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-171370",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 6.0,
      "key": "pretzel",
      "kind": "unit",
      "label": "pretzel"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Babyfood, pretzels",
  "nutritionPerBasis": {
    "calcium_mg": 25.0,
    "carbs_g": 82.2,
    "energy_kcal": 1660.0,
    "fat_g": 2.0,
    "fibre_g": 2.3,
    "folate_ug": 85.0,
    "iron_mg": 3.77,
    "magnesium_mg": 28.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 110.0,
    "potassium_mg": 137.0,
    "protein_g": 10.8,
    "salt_g": 0.6725,
    "sat_fat_g": 0.4,
    "sodium_mg": 269.0,
    "sugar_g": 3.08,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 3.8,
    "vitamin_e_mg": 0.28,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171370",
  "state": "Unspecified",
  "subcategory": "Baby Foods",
  "tags": [
    "baby-foods",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
