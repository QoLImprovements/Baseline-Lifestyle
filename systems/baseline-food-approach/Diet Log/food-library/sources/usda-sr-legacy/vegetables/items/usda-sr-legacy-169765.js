/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "2-tablespoon",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169765",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 25.0,
      "key": "2-tablespoon",
      "kind": "unit",
      "label": "2 tablespoon"
    }
  ],
  "name": "Ginger root, pickled, canned, with artificial sweetener",
  "nutritionPerBasis": {
    "calcium_mg": 74.0,
    "carbs_g": 4.83,
    "energy_kcal": 85.0,
    "fat_g": 0.1,
    "fibre_g": 2.6,
    "folate_ug": 1.0,
    "iron_mg": 0.28,
    "magnesium_mg": 4.0,
    "omega3_g": 0.005,
    "phosphorus_mg": 2.0,
    "potassium_mg": 36.0,
    "protein_g": 0.33,
    "salt_g": 2.265,
    "sat_fat_g": 0.037,
    "sodium_mg": 906.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.18,
    "vitamin_k_ug": 2.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169765",
  "state": "Canned",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "canned",
    "vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
