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
  "id": "usda-fndds-2707793",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 25.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 39.0,
      "key": "1-large-or-thick-slice",
      "kind": "unit",
      "label": "1 large or thick slice"
    },
    {
      "gramsPerUnit": 25.0,
      "key": "1-medium-or-regular-slice",
      "kind": "unit",
      "label": "1 medium or regular slice"
    },
    {
      "gramsPerUnit": 22.0,
      "key": "1-small-or-thin-very-thin-slice",
      "kind": "unit",
      "label": "1 small or thin/very thin slice"
    }
  ],
  "name": "Bread, sunflower meal, toasted",
  "nutritionPerBasis": {
    "calcium_mg": 46.0,
    "carbs_g": 52.7,
    "energy_kcal": 336.0,
    "fat_g": 9.05,
    "fibre_g": 2.9,
    "folate_ug": 89.0,
    "iron_mg": 4.02,
    "magnesium_mg": 41.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 234.0,
    "potassium_mg": 213.0,
    "protein_g": 12.3,
    "salt_g": 1.4075,
    "sat_fat_g": 1.74,
    "sodium_mg": 563.0,
    "sugar_g": 3.4,
    "vitamin_a_ug": 18.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 3.27,
    "vitamin_k_ug": 1.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707793",
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
