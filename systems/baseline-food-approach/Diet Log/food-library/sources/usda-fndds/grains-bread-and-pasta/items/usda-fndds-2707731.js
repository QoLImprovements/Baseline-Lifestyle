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
  "id": "usda-fndds-2707731",
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
      "gramsPerUnit": 114.0,
      "key": "1-extra-large-pita",
      "kind": "unit",
      "label": "1 extra large pita"
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
      "gramsPerUnit": 57.0,
      "key": "1-medium-pita",
      "kind": "unit",
      "label": "1 medium pita"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "1-large-pita",
      "kind": "unit",
      "label": "1 large pita"
    }
  ],
  "name": "Bread, pita, wheat or cracked wheat",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 55.9,
    "energy_kcal": 262.0,
    "fat_g": 1.71,
    "fibre_g": 6.1,
    "folate_ug": 35.0,
    "iron_mg": 3.06,
    "magnesium_mg": 69.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 180.0,
    "potassium_mg": 170.0,
    "protein_g": 9.8,
    "salt_g": 1.0525,
    "sat_fat_g": 0.208,
    "sodium_mg": 421.0,
    "sugar_g": 2.87,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.61,
    "vitamin_k_ug": 1.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707731",
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
