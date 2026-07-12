/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "quantity-not-specified",
  "description": "Doughnuts, sweet rolls, pastries",
  "id": "usda-fndds-2708030",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 90.0,
      "key": "1-eclair-5-x-2-x-1-3-4",
      "kind": "unit",
      "label": "1 eclair (5\" x 2\" x 1-3/4\")"
    },
    {
      "gramsPerUnit": 100.0,
      "key": "1-cream-puff-3-1-2-x-2",
      "kind": "unit",
      "label": "1 cream puff (3-1/2\" x 2\")"
    },
    {
      "gramsPerUnit": 23.0,
      "key": "1-miniature-cream-puff",
      "kind": "unit",
      "label": "1 miniature cream puff"
    }
  ],
  "name": "Cream puff, eclair, custard or cream filled, not iced",
  "nutritionPerBasis": {
    "calcium_mg": 32.0,
    "carbs_g": 12.9,
    "energy_kcal": 264.0,
    "fat_g": 21.5,
    "fibre_g": 0.4,
    "folate_ug": 35.0,
    "iron_mg": 1.12,
    "magnesium_mg": 8.0,
    "omega3_g": 0.015,
    "phosphorus_mg": 71.0,
    "potassium_mg": 74.0,
    "protein_g": 4.76,
    "salt_g": 0.4,
    "sat_fat_g": 11.5,
    "sodium_mg": 160.0,
    "sugar_g": 2.24,
    "vitamin_a_ug": 215.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.47,
    "vitamin_k_ug": 1.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708030",
  "state": "Unspecified",
  "subcategory": "Doughnuts, sweet rolls, pastries",
  "tags": [
    "doughnuts-sweet-rolls-pastries",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
