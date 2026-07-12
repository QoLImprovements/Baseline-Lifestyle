/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "1-heart",
  "description": "Other vegetables and combinations",
  "id": "usda-fndds-2709766",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "1-heart",
      "kind": "unit",
      "label": "1 heart"
    },
    {
      "gramsPerUnit": 125.0,
      "key": "1-whole",
      "kind": "unit",
      "label": "1 whole"
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
  "name": "Artichoke",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 12.0,
    "energy_kcal": 53.0,
    "fat_g": 0.34,
    "fibre_g": 5.7,
    "folate_ug": 89.0,
    "iron_mg": 0.61,
    "magnesium_mg": 42.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 73.0,
    "potassium_mg": 286.0,
    "protein_g": 2.89,
    "salt_g": 0.15,
    "sat_fat_g": 0.079,
    "sodium_mg": 60.0,
    "sugar_g": 0.99,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 7.4,
    "vitamin_e_mg": 0.19,
    "vitamin_k_ug": 14.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709766",
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
