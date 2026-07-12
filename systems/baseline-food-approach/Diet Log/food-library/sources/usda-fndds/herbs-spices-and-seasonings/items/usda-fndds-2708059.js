/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Herbs, Spices & Seasonings",
  "defaultMeasure": "1-toaster-strudel",
  "description": "Doughnuts, sweet rolls, pastries",
  "id": "usda-fndds-2708059",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 53.0,
      "key": "1-toaster-strudel",
      "kind": "unit",
      "label": "1 Toaster Strudel"
    },
    {
      "gramsPerUnit": 6.5,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
    },
    {
      "gramsPerUnit": 56.0,
      "key": "1-small",
      "kind": "unit",
      "label": "1 small"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "1-medium",
      "kind": "unit",
      "label": "1 medium"
    },
    {
      "gramsPerUnit": 142.0,
      "key": "1-large",
      "kind": "unit",
      "label": "1 large"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "1-miniature",
      "kind": "unit",
      "label": "1 miniature"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "1-pecan-swirl",
      "kind": "unit",
      "label": "1 pecan swirl"
    }
  ],
  "name": "Danish pastry, plain or spice",
  "nutritionPerBasis": {
    "calcium_mg": 71.0,
    "carbs_g": 44.6,
    "energy_kcal": 403.0,
    "fat_g": 22.4,
    "fibre_g": 1.3,
    "folate_ug": 68.0,
    "iron_mg": 1.96,
    "magnesium_mg": 19.0,
    "omega3_g": 0.005,
    "phosphorus_mg": 107.0,
    "potassium_mg": 125.0,
    "protein_g": 7.0,
    "salt_g": 1.035,
    "sat_fat_g": 5.68,
    "sodium_mg": 414.0,
    "sugar_g": 19.8,
    "vitamin_a_ug": 6.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.39,
    "vitamin_k_ug": 9.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708059",
  "state": "Unspecified",
  "subcategory": "Doughnuts, sweet rolls, pastries",
  "tags": [
    "doughnuts-sweet-rolls-pastries",
    "herbs-spices-and-seasonings",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
