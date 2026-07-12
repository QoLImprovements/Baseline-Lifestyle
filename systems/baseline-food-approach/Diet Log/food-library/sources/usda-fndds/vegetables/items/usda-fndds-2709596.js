/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "quantity-not-specified",
  "description": "Other dark green vegetables",
  "id": "usda-fndds-2709596",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 68.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Greens, fresh, cooked, fat added",
  "nutritionPerBasis": {
    "calcium_mg": 228.0,
    "carbs_g": 5.02,
    "energy_kcal": 58.0,
    "fat_g": 3.4,
    "fibre_g": 4.1,
    "folate_ug": 72.0,
    "iron_mg": 1.12,
    "magnesium_mg": 31.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 42.0,
    "potassium_mg": 294.0,
    "protein_g": 2.89,
    "salt_g": 0.4075,
    "sat_fat_g": 0.748,
    "sodium_mg": 163.0,
    "sugar_g": 0.72,
    "vitamin_a_ug": 259.0,
    "vitamin_c_mg": 45.3,
    "vitamin_e_mg": 1.98,
    "vitamin_k_ug": 410.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709596",
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
