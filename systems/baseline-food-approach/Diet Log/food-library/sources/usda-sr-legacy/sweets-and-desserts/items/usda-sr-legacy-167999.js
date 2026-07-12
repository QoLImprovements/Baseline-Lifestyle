/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "tablet",
  "description": "Sweets",
  "id": "usda-sr-legacy-167999",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "tablet",
      "kind": "unit",
      "label": "tablet"
    }
  ],
  "name": "Baking chocolate, mexican, squares",
  "nutritionPerBasis": {
    "calcium_mg": 34.0,
    "carbs_g": 77.4,
    "energy_kcal": 426.0,
    "fat_g": 15.6,
    "fibre_g": 4.0,
    "folate_ug": 5.0,
    "iron_mg": 2.18,
    "magnesium_mg": 95.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 142.0,
    "potassium_mg": 397.0,
    "protein_g": 3.64,
    "salt_g": 0.0075,
    "sat_fat_g": 8.61,
    "sodium_mg": 3.0,
    "sugar_g": 69.4,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.36,
    "vitamin_k_ug": 2.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167999",
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
