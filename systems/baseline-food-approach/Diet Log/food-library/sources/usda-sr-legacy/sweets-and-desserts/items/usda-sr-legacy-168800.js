/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "2-tablespoon",
  "description": "Sweets",
  "id": "usda-sr-legacy-168800",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 33.0,
      "key": "2-tablespoon",
      "kind": "unit",
      "label": "2 tablespoon"
    }
  ],
  "name": "Frostings, chocolate, creamy, dry mix, prepared with butter",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 71.8,
    "energy_kcal": 408.0,
    "fat_g": 13.1,
    "fibre_g": 1.9,
    "folate_ug": 3.0,
    "iron_mg": 0.93,
    "magnesium_mg": 30.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 51.0,
    "potassium_mg": 143.0,
    "protein_g": 1.11,
    "salt_g": 0.31,
    "sat_fat_g": 8.37,
    "sodium_mg": 124.0,
    "sugar_g": 0.01,
    "vitamin_a_ug": 76.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.26,
    "vitamin_k_ug": 0.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168800",
  "state": "Unspecified",
  "subcategory": "Sweets",
  "tags": [
    "sweets",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
