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
  "id": "usda-sr-legacy-168852",
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
  "name": "Frostings, glaze, chocolate, prepared-from-recipe, with butter, NFSMI Recipe No. C-32",
  "nutritionPerBasis": {
    "calcium_mg": 32.0,
    "carbs_g": 72.2,
    "energy_kcal": 1500.0,
    "fat_g": 7.17,
    "fibre_g": 1.1,
    "folate_ug": 2.0,
    "iron_mg": 0.6,
    "magnesium_mg": 20.0,
    "omega3_g": 0.026,
    "phosphorus_mg": 48.0,
    "potassium_mg": 130.0,
    "protein_g": 1.42,
    "salt_g": 0.33,
    "sat_fat_g": 4.48,
    "sodium_mg": 132.0,
    "sugar_g": 64.3,
    "vitamin_a_ug": 69.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.19,
    "vitamin_k_ug": 0.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168852",
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
