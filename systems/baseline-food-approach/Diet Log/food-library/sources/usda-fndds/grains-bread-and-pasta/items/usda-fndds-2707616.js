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
  "id": "usda-fndds-2707616",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "1-medium-pita",
      "kind": "unit",
      "label": "1 medium pita"
    },
    {
      "gramsPerUnit": 2.0,
      "key": "1-surface-inch",
      "kind": "unit",
      "label": "1 surface inch"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "1-small-pita",
      "kind": "unit",
      "label": "1 small pita"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "1-large-pita",
      "kind": "unit",
      "label": "1 large pita"
    },
    {
      "gramsPerUnit": 114.0,
      "key": "1-extra-large-pita",
      "kind": "unit",
      "label": "1 extra large pita"
    }
  ],
  "name": "Bread, pita",
  "nutritionPerBasis": {
    "calcium_mg": 86.0,
    "carbs_g": 55.7,
    "energy_kcal": 275.0,
    "fat_g": 1.2,
    "fibre_g": 2.2,
    "folate_ug": 107.0,
    "iron_mg": 2.62,
    "magnesium_mg": 26.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 97.0,
    "potassium_mg": 120.0,
    "protein_g": 9.1,
    "salt_g": 1.34,
    "sat_fat_g": 0.166,
    "sodium_mg": 536.0,
    "sugar_g": 1.3,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.3,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707616",
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
