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
  "id": "usda-sr-legacy-167956",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 34.0,
      "key": "2-tablespoon",
      "kind": "unit",
      "label": "2 tablespoon"
    }
  ],
  "name": "Topping, SMUCKER'S MAGIC SHELL",
  "nutritionPerBasis": {
    "calcium_mg": 0.0,
    "carbs_g": 50.1,
    "energy_kcal": 609.0,
    "fat_g": 44.1,
    "fibre_g": 2.9,
    "folate_ug": 6.0,
    "iron_mg": 0.0,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 54.0,
    "potassium_mg": 73.0,
    "protein_g": 2.94,
    "salt_g": 0.0725,
    "sat_fat_g": 20.6,
    "sodium_mg": 29.0,
    "sugar_g": 47.1,
    "vitamin_a_ug": 6.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 9.85,
    "vitamin_k_ug": 1.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167956",
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
