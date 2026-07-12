/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "1-cup-crumbled",
  "description": "Biscuits, muffins, quick breads",
  "id": "usda-fndds-2707816",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 89.0,
      "key": "1-cup-crumbled",
      "kind": "unit",
      "label": "1 cup, crumbled"
    },
    {
      "gramsPerUnit": 377.0,
      "key": "1-pone-8-dia-x-3-4",
      "kind": "unit",
      "label": "1 pone (8\" dia x 3/4\")"
    },
    {
      "gramsPerUnit": 61.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 1272.0,
      "key": "1-pone-9-dia-x-2",
      "kind": "unit",
      "label": "1 pone (9\" dia x 2\")"
    },
    {
      "gramsPerUnit": 485.0,
      "key": "1-pone-9-dia-x-3-4",
      "kind": "unit",
      "label": "1 pone (9\" dia x 3/4\")"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
    },
    {
      "gramsPerUnit": 61.0,
      "key": "1-piece-1-8-of-9-dia-x-3-4-pone",
      "kind": "unit",
      "label": "1 piece (1/8 of 9\" dia x 3/4\" pone)"
    },
    {
      "gramsPerUnit": 754.0,
      "key": "1-pone-8-dia-x-1-1-2",
      "kind": "unit",
      "label": "1 pone (8\" dia x 1-1/2\")"
    }
  ],
  "name": "Corn pone, baked",
  "nutritionPerBasis": {
    "calcium_mg": 113.0,
    "carbs_g": 39.7,
    "energy_kcal": 214.0,
    "fat_g": 4.31,
    "fibre_g": 1.9,
    "folate_ug": 72.0,
    "iron_mg": 2.36,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 90.0,
    "potassium_mg": 71.0,
    "protein_g": 3.5,
    "salt_g": 1.0925,
    "sat_fat_g": 0.97,
    "sodium_mg": 437.0,
    "sugar_g": 0.79,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.27,
    "vitamin_k_ug": 1.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707816",
  "state": "Baked",
  "subcategory": "Biscuits, muffins, quick breads",
  "tags": [
    "baked",
    "biscuits-muffins-quick-breads",
    "other-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
