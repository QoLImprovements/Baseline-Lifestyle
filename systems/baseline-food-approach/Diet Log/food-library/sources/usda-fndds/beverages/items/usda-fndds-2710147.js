/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "1-small",
  "description": "Smoothies and grain drinks",
  "id": "usda-fndds-2710147",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 540.0,
      "key": "1-small",
      "kind": "unit",
      "label": "1 small"
    },
    {
      "gramsPerUnit": 216.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 324.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 864.0,
      "key": "1-medium",
      "kind": "unit",
      "label": "1 medium"
    },
    {
      "gramsPerUnit": 1080.0,
      "key": "1-large",
      "kind": "unit",
      "label": "1 large"
    },
    {
      "gramsPerUnit": 27.0,
      "key": "1-fl-oz",
      "kind": "unit",
      "label": "1 fl oz"
    }
  ],
  "name": "Fruit and vegetable smoothie, added protein",
  "nutritionPerBasis": {
    "calcium_mg": 84.0,
    "carbs_g": 12.2,
    "energy_kcal": 86.0,
    "fat_g": 0.78,
    "fibre_g": 1.1,
    "folate_ug": 32.0,
    "iron_mg": 0.29,
    "magnesium_mg": 43.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 138.0,
    "potassium_mg": 311.0,
    "protein_g": 7.49,
    "salt_g": 0.09,
    "sat_fat_g": 0.338,
    "sodium_mg": 36.0,
    "sugar_g": 8.47,
    "vitamin_a_ug": 53.0,
    "vitamin_c_mg": 15.3,
    "vitamin_e_mg": 0.39,
    "vitamin_k_ug": 71.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710147",
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
