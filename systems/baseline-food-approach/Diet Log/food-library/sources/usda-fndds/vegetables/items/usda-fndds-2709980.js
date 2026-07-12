/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "1-cup-mashed",
  "description": "Other vegetables and combinations",
  "id": "usda-fndds-2709980",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 245.0,
      "key": "1-cup-mashed",
      "kind": "unit",
      "label": "1 cup, mashed"
    },
    {
      "gramsPerUnit": 88.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 175.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 370.0,
      "key": "1-whole",
      "kind": "unit",
      "label": "1 whole"
    }
  ],
  "name": "Rutabaga, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 45.0,
    "carbs_g": 8.98,
    "energy_kcal": 63.0,
    "fat_g": 2.9,
    "fibre_g": 2.4,
    "folate_ug": 19.0,
    "iron_mg": 0.46,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 55.0,
    "potassium_mg": 318.0,
    "protein_g": 1.13,
    "salt_g": 0.3575,
    "sat_fat_g": 0.744,
    "sodium_mg": 143.0,
    "sugar_g": 4.65,
    "vitamin_a_ug": 12.0,
    "vitamin_c_mg": 22.1,
    "vitamin_e_mg": 0.72,
    "vitamin_k_ug": 2.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709980",
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
