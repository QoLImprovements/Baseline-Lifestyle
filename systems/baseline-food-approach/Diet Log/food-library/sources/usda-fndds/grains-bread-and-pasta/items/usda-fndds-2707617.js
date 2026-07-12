/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "1-small-pita",
  "description": "Yeast breads",
  "id": "usda-fndds-2707617",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
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
      "gramsPerUnit": 57.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 2.0,
      "key": "1-surface-inch",
      "kind": "unit",
      "label": "1 surface inch"
    },
    {
      "gramsPerUnit": 114.0,
      "key": "1-extra-large-pita",
      "kind": "unit",
      "label": "1 extra large pita"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "1-medium-pita",
      "kind": "unit",
      "label": "1 medium pita"
    }
  ],
  "name": "Bread, pita with fruit",
  "nutritionPerBasis": {
    "calcium_mg": 82.0,
    "carbs_g": 59.5,
    "energy_kcal": 279.0,
    "fat_g": 1.05,
    "fibre_g": 2.6,
    "folate_ug": 90.0,
    "iron_mg": 2.49,
    "magnesium_mg": 28.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 97.0,
    "potassium_mg": 209.0,
    "protein_g": 8.16,
    "salt_g": 1.135,
    "sat_fat_g": 0.154,
    "sodium_mg": 454.0,
    "sugar_g": 11.6,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 0.27,
    "vitamin_k_ug": 0.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707617",
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
