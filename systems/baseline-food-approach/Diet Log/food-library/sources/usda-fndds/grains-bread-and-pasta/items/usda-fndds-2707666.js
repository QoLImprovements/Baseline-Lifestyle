/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "1-slice",
  "description": "Doughnuts, sweet rolls, pastries",
  "id": "usda-fndds-2707666",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 56.0,
      "key": "1-slice",
      "kind": "unit",
      "label": "1 slice"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "1-miniature",
      "kind": "unit",
      "label": "1 miniature"
    },
    {
      "gramsPerUnit": 90.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 153.0,
      "key": "1-large",
      "kind": "unit",
      "label": "1 large"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "1-hawaiian-roll",
      "kind": "unit",
      "label": "1 Hawaiian roll"
    },
    {
      "gramsPerUnit": 54.0,
      "key": "1-small",
      "kind": "unit",
      "label": "1 small"
    },
    {
      "gramsPerUnit": 6.5,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
    },
    {
      "gramsPerUnit": 527.0,
      "key": "1-loaf",
      "kind": "unit",
      "label": "1 loaf"
    },
    {
      "gramsPerUnit": 90.0,
      "key": "1-medium",
      "kind": "unit",
      "label": "1 medium"
    }
  ],
  "name": "Roll, sweet, no frosting",
  "nutritionPerBasis": {
    "calcium_mg": 62.0,
    "carbs_g": 53.6,
    "energy_kcal": 321.0,
    "fat_g": 7.37,
    "fibre_g": 3.1,
    "folate_ug": 91.0,
    "iron_mg": 2.74,
    "magnesium_mg": 24.0,
    "omega3_g": 0.015,
    "phosphorus_mg": 127.0,
    "potassium_mg": 149.0,
    "protein_g": 10.0,
    "salt_g": 0.6325,
    "sat_fat_g": 3.52,
    "sodium_mg": 253.0,
    "sugar_g": 15.4,
    "vitamin_a_ug": 40.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.38,
    "vitamin_k_ug": 0.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707666",
  "state": "Unspecified",
  "subcategory": "Doughnuts, sweet rolls, pastries",
  "tags": [
    "doughnuts-sweet-rolls-pastries",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
