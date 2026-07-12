/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "1-small-or-thin-very-thin-slice",
  "description": "Yeast breads",
  "id": "usda-fndds-2707792",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 24.0,
      "key": "1-small-or-thin-very-thin-slice",
      "kind": "unit",
      "label": "1 small or thin/very thin slice"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "1-medium-or-regular-slice",
      "kind": "unit",
      "label": "1 medium or regular slice"
    },
    {
      "gramsPerUnit": 43.0,
      "key": "1-large-or-thick-slice",
      "kind": "unit",
      "label": "1 large or thick slice"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Bread, sunflower meal",
  "nutritionPerBasis": {
    "calcium_mg": 42.0,
    "carbs_g": 48.0,
    "energy_kcal": 306.0,
    "fat_g": 8.23,
    "fibre_g": 2.7,
    "folate_ug": 96.0,
    "iron_mg": 3.66,
    "magnesium_mg": 37.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 213.0,
    "potassium_mg": 194.0,
    "protein_g": 11.2,
    "salt_g": 1.28,
    "sat_fat_g": 1.58,
    "sodium_mg": 512.0,
    "sugar_g": 3.1,
    "vitamin_a_ug": 18.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 2.98,
    "vitamin_k_ug": 1.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707792",
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
