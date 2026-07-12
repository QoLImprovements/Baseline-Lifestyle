/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "1-whole",
  "description": "Other vegetables and combinations",
  "id": "usda-fndds-2709803",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 5.0,
      "key": "1-whole",
      "kind": "unit",
      "label": "1 whole"
    },
    {
      "gramsPerUnit": 115.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 58.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 1.0,
      "key": "1-slice",
      "kind": "unit",
      "label": "1 slice"
    }
  ],
  "name": "Radish",
  "nutritionPerBasis": {
    "calcium_mg": 25.0,
    "carbs_g": 3.4,
    "energy_kcal": 16.0,
    "fat_g": 0.1,
    "fibre_g": 1.6,
    "folate_ug": 25.0,
    "iron_mg": 0.34,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 20.0,
    "potassium_mg": 233.0,
    "protein_g": 0.68,
    "salt_g": 0.0975,
    "sat_fat_g": 0.032,
    "sodium_mg": 39.0,
    "sugar_g": 1.86,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 14.8,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 1.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709803",
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
