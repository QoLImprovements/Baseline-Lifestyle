/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "serving",
  "description": "Snacks",
  "id": "usda-sr-legacy-173156",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "Snack, Pretzel, hard chocolate coated",
  "nutritionPerBasis": {
    "calcium_mg": 141.0,
    "carbs_g": 70.1,
    "energy_kcal": 467.0,
    "fat_g": 17.6,
    "fibre_g": 3.5,
    "folate_ug": 74.0,
    "iron_mg": 2.54,
    "magnesium_mg": 35.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 128.0,
    "potassium_mg": 199.0,
    "protein_g": 7.05,
    "salt_g": 1.235,
    "sat_fat_g": 8.61,
    "sodium_mg": 494.0,
    "sugar_g": 38.8,
    "vitamin_a_ug": 25.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.62,
    "vitamin_k_ug": 11.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173156",
  "state": "Unspecified",
  "subcategory": "Snacks",
  "tags": [
    "snacks",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
