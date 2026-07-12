/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "1-medium",
  "description": "Smoothies and grain drinks",
  "id": "usda-fndds-2710152",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 864.0,
      "key": "1-medium",
      "kind": "unit",
      "label": "1 medium"
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
      "gramsPerUnit": 540.0,
      "key": "1-small",
      "kind": "unit",
      "label": "1 small"
    },
    {
      "gramsPerUnit": 1080.0,
      "key": "1-large",
      "kind": "unit",
      "label": "1 large"
    }
  ],
  "name": "Vegetable smoothie",
  "nutritionPerBasis": {
    "calcium_mg": 73.0,
    "carbs_g": 5.84,
    "energy_kcal": 89.0,
    "fat_g": 6.63,
    "fibre_g": 2.8,
    "folate_ug": 50.0,
    "iron_mg": 0.41,
    "magnesium_mg": 31.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 73.0,
    "potassium_mg": 349.0,
    "protein_g": 2.75,
    "salt_g": 0.095,
    "sat_fat_g": 1.39,
    "sodium_mg": 38.0,
    "sugar_g": 2.57,
    "vitamin_a_ug": 75.0,
    "vitamin_c_mg": 8.1,
    "vitamin_e_mg": 1.12,
    "vitamin_k_ug": 85.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710152",
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
