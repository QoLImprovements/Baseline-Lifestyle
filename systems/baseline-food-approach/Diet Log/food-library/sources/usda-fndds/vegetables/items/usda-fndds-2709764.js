/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "1-cup",
  "description": "Other vegetables and combinations",
  "id": "usda-fndds-2709764",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 56.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Sprouts, NFS",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 5.94,
    "energy_kcal": 30.0,
    "fat_g": 0.18,
    "fibre_g": 1.8,
    "folate_ug": 61.0,
    "iron_mg": 0.91,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 54.0,
    "potassium_mg": 149.0,
    "protein_g": 3.04,
    "salt_g": 0.015,
    "sat_fat_g": 0.046,
    "sodium_mg": 6.0,
    "sugar_g": 4.13,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 13.2,
    "vitamin_e_mg": 0.1,
    "vitamin_k_ug": 33.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709764",
  "state": "Unspecified",
  "subcategory": "Other vegetables and combinations",
  "tags": [
    "other-vegetables-and-combinations",
    "unspecified",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
