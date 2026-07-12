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
  "id": "usda-fndds-2709577",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 130.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 65.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Collards, fresh, cooked, no added fat",
  "nutritionPerBasis": {
    "calcium_mg": 249.0,
    "carbs_g": 5.81,
    "energy_kcal": 34.0,
    "fat_g": 0.65,
    "fibre_g": 4.3,
    "folate_ug": 104.0,
    "iron_mg": 0.5,
    "magnesium_mg": 29.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 27.0,
    "potassium_mg": 228.0,
    "protein_g": 3.24,
    "salt_g": 0.3575,
    "sat_fat_g": 0.059,
    "sodium_mg": 143.0,
    "sugar_g": 0.49,
    "vitamin_a_ug": 256.0,
    "vitamin_c_mg": 26.5,
    "vitamin_e_mg": 2.42,
    "vitamin_k_ug": 469.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709577",
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
