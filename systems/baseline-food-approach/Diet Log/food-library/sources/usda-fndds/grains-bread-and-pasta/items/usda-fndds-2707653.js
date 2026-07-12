/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "1-cubic-inch",
  "description": "Yeast breads",
  "id": "usda-fndds-2707653",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 8.2,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
    },
    {
      "gramsPerUnit": 26.0,
      "key": "1-slice-or-roll",
      "kind": "unit",
      "label": "1 slice or roll"
    },
    {
      "gramsPerUnit": 104.0,
      "key": "1-piece-7-dia",
      "kind": "unit",
      "label": "1 piece (7\" dia)"
    },
    {
      "gramsPerUnit": 26.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 136.0,
      "key": "1-piece-8-dia",
      "kind": "unit",
      "label": "1 piece (8\" dia)"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Bread, dough, fried",
  "nutritionPerBasis": {
    "calcium_mg": 54.0,
    "carbs_g": 45.0,
    "energy_kcal": 384.0,
    "fat_g": 18.8,
    "fibre_g": 1.5,
    "folate_ug": 63.0,
    "iron_mg": 3.21,
    "magnesium_mg": 25.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 109.0,
    "potassium_mg": 132.0,
    "protein_g": 9.36,
    "salt_g": 0.4425,
    "sat_fat_g": 4.85,
    "sodium_mg": 177.0,
    "sugar_g": 3.55,
    "vitamin_a_ug": 19.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.29,
    "vitamin_k_ug": 9.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707653",
  "state": "Fried",
  "subcategory": "Yeast breads",
  "tags": [
    "fried",
    "grains-bread-and-pasta",
    "yeast-breads"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
