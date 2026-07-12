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
  "id": "usda-fndds-2710151",
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
      "gramsPerUnit": 864.0,
      "key": "1-medium",
      "kind": "unit",
      "label": "1 medium"
    },
    {
      "gramsPerUnit": 540.0,
      "key": "1-small",
      "kind": "unit",
      "label": "1 small"
    },
    {
      "gramsPerUnit": 324.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Fruit and vegetable smoothie, no dairy",
  "nutritionPerBasis": {
    "calcium_mg": 39.0,
    "carbs_g": 13.8,
    "energy_kcal": 63.0,
    "fat_g": 0.37,
    "fibre_g": 1.0,
    "folate_ug": 37.0,
    "iron_mg": 0.23,
    "magnesium_mg": 30.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 23.0,
    "potassium_mg": 300.0,
    "protein_g": 1.09,
    "salt_g": 0.0475,
    "sat_fat_g": 0.059,
    "sodium_mg": 19.0,
    "sugar_g": 9.82,
    "vitamin_a_ug": 47.0,
    "vitamin_c_mg": 22.1,
    "vitamin_e_mg": 0.46,
    "vitamin_k_ug": 77.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710151",
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
