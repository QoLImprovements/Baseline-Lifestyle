/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "quantity-not-specified",
  "description": "Other vegetables and combinations",
  "id": "usda-fndds-2710012",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 93.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 185.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Classic mixed vegetables, cooked, from restaurant",
  "nutritionPerBasis": {
    "calcium_mg": 25.0,
    "carbs_g": 12.4,
    "energy_kcal": 100.0,
    "fat_g": 4.74,
    "fibre_g": 3.4,
    "folate_ug": 37.0,
    "iron_mg": 0.69,
    "magnesium_mg": 27.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 68.0,
    "potassium_mg": 265.0,
    "protein_g": 2.84,
    "salt_g": 0.5675,
    "sat_fat_g": 1.2,
    "sodium_mg": 227.0,
    "sugar_g": 4.64,
    "vitamin_a_ug": 234.0,
    "vitamin_c_mg": 13.6,
    "vitamin_e_mg": 0.94,
    "vitamin_k_ug": 23.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710012",
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
