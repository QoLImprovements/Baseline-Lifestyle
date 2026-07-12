/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "1-cup",
  "description": "Other dark green vegetables",
  "id": "usda-fndds-2709571",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 75.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Beet greens, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 122.0,
    "carbs_g": 4.51,
    "energy_kcal": 48.0,
    "fat_g": 2.87,
    "fibre_g": 3.9,
    "folate_ug": 12.0,
    "iron_mg": 2.68,
    "magnesium_mg": 73.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 43.0,
    "potassium_mg": 794.0,
    "protein_g": 2.3,
    "salt_g": 0.9125,
    "sat_fat_g": 0.737,
    "sodium_mg": 365.0,
    "sugar_g": 0.53,
    "vitamin_a_ug": 325.0,
    "vitamin_c_mg": 21.9,
    "vitamin_e_mg": 1.97,
    "vitamin_k_ug": 419.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709571",
  "state": "Cooked",
  "subcategory": "Other dark green vegetables",
  "tags": [
    "cooked",
    "other-dark-green-vegetables",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
