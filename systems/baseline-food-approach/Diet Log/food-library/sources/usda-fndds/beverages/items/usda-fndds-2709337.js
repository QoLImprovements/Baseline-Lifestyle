/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "1-fl-oz",
  "description": "Smoothies and grain drinks",
  "id": "usda-fndds-2709337",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 27.0,
      "key": "1-fl-oz",
      "kind": "unit",
      "label": "1 fl oz"
    },
    {
      "gramsPerUnit": 324.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 216.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 1080.0,
      "key": "1-large",
      "kind": "unit",
      "label": "1 large"
    },
    {
      "gramsPerUnit": 540.0,
      "key": "1-small",
      "kind": "unit",
      "label": "1 small"
    },
    {
      "gramsPerUnit": 864.0,
      "key": "1-medium",
      "kind": "unit",
      "label": "1 medium"
    }
  ],
  "name": "Fruit smoothie juice drink, no dairy",
  "nutritionPerBasis": {
    "calcium_mg": 30.0,
    "carbs_g": 11.9,
    "energy_kcal": 51.0,
    "fat_g": 0.24,
    "fibre_g": 1.0,
    "folate_ug": 20.0,
    "iron_mg": 0.22,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 16.0,
    "potassium_mg": 184.0,
    "protein_g": 0.6,
    "salt_g": 0.005,
    "sat_fat_g": 0.031,
    "sodium_mg": 2.0,
    "sugar_g": 8.35,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 25.7,
    "vitamin_e_mg": 0.18,
    "vitamin_k_ug": 0.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709337",
  "state": "Unspecified",
  "subcategory": "Smoothies and grain drinks",
  "tags": [
    "beverages",
    "smoothies-and-grain-drinks",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
