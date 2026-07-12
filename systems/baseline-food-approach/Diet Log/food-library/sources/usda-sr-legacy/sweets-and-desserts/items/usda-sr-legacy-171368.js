/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "cookie",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-171368",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 8.0,
      "key": "cookie",
      "kind": "unit",
      "label": "cookie"
    }
  ],
  "name": "Babyfood, cookie, baby, fruit",
  "nutritionPerBasis": {
    "calcium_mg": 83.0,
    "carbs_g": 73.7,
    "energy_kcal": 1820.0,
    "fat_g": 12.6,
    "fibre_g": 3.4,
    "folate_ug": 110.0,
    "iron_mg": 2.9,
    "magnesium_mg": 30.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 189.0,
    "potassium_mg": 425.0,
    "protein_g": 6.8,
    "salt_g": 0.0225,
    "sat_fat_g": 2.7,
    "sodium_mg": 9.0,
    "sugar_g": 24.2,
    "vitamin_a_ug": 117.0,
    "vitamin_c_mg": 1.5,
    "vitamin_e_mg": 1.48,
    "vitamin_k_ug": 3.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171368",
  "state": "Unspecified",
  "subcategory": "Baby Foods",
  "tags": [
    "baby-foods",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
