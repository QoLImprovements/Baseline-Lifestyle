/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "quantity-not-specified",
  "description": "Yeast breads",
  "id": "usda-fndds-2707650",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 44.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 44.0,
      "key": "1-slice",
      "kind": "unit",
      "label": "1 slice"
    },
    {
      "gramsPerUnit": 4.7,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
    }
  ],
  "name": "Bread, vegetable",
  "nutritionPerBasis": {
    "calcium_mg": 38.0,
    "carbs_g": 48.0,
    "energy_kcal": 259.0,
    "fat_g": 3.26,
    "fibre_g": 1.8,
    "folate_ug": 77.0,
    "iron_mg": 3.48,
    "magnesium_mg": 27.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 103.0,
    "potassium_mg": 161.0,
    "protein_g": 9.67,
    "salt_g": 1.33,
    "sat_fat_g": 1.09,
    "sodium_mg": 532.0,
    "sugar_g": 3.54,
    "vitamin_a_ug": 48.0,
    "vitamin_c_mg": 3.9,
    "vitamin_e_mg": 0.38,
    "vitamin_k_ug": 4.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707650",
  "state": "Unspecified",
  "subcategory": "Yeast breads",
  "tags": [
    "grains-bread-and-pasta",
    "unspecified",
    "yeast-breads"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
