/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "1-slice",
  "description": "Yeast breads",
  "id": "usda-fndds-2707612",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "1-slice",
      "kind": "unit",
      "label": "1 slice"
    },
    {
      "gramsPerUnit": 114.0,
      "key": "1-whole-6-dia",
      "kind": "unit",
      "label": "1 whole (6\" dia)"
    },
    {
      "gramsPerUnit": 4.0,
      "key": "1-surface-inch",
      "kind": "unit",
      "label": "1 surface inch"
    },
    {
      "gramsPerUnit": 456.0,
      "key": "1-whole-16-dia",
      "kind": "unit",
      "label": "1 whole (16\" dia)"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 285.0,
      "key": "1-whole-12-dia",
      "kind": "unit",
      "label": "1 whole (12\" dia)"
    }
  ],
  "name": "Focaccia, Italian, plain",
  "nutritionPerBasis": {
    "calcium_mg": 35.0,
    "carbs_g": 35.8,
    "energy_kcal": 249.0,
    "fat_g": 7.89,
    "fibre_g": 1.8,
    "folate_ug": 138.0,
    "iron_mg": 3.16,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 128.0,
    "potassium_mg": 114.0,
    "protein_g": 8.77,
    "salt_g": 1.4025,
    "sat_fat_g": 0.877,
    "sodium_mg": 561.0,
    "sugar_g": 1.75,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.42,
    "vitamin_k_ug": 5.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707612",
  "state": "Unspecified",
  "subcategory": "Yeast breads",
  "tags": [
    "other-foods",
    "unspecified",
    "yeast-breads"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
