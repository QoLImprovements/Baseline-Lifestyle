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
  "id": "usda-fndds-2710034",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 160.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Broccoli, cauliflower and carrots, cooked, fat added",
  "nutritionPerBasis": {
    "calcium_mg": 28.0,
    "carbs_g": 5.43,
    "energy_kcal": 50.0,
    "fat_g": 2.9,
    "fibre_g": 2.9,
    "folate_ug": 35.0,
    "iron_mg": 0.5,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 34.0,
    "potassium_mg": 153.0,
    "protein_g": 1.72,
    "salt_g": 0.3775,
    "sat_fat_g": 0.728,
    "sodium_mg": 151.0,
    "sugar_g": 2.13,
    "vitamin_a_ug": 301.0,
    "vitamin_c_mg": 23.8,
    "vitamin_e_mg": 1.16,
    "vitamin_k_ug": 38.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710034",
  "state": "Cooked",
  "subcategory": "Other vegetables and combinations",
  "tags": [
    "cooked",
    "other-vegetables-and-combinations",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
