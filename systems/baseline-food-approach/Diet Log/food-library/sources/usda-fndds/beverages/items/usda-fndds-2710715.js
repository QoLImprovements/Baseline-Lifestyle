/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "quantity-not-specified",
  "description": "Nutritional beverages",
  "id": "usda-fndds-2710715",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 256.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 256.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 32.0,
      "key": "1-fl-oz",
      "kind": "unit",
      "label": "1 fl oz"
    },
    {
      "gramsPerUnit": 256.0,
      "key": "1-bottle-8-fl-oz",
      "kind": "unit",
      "label": "1 bottle (8 fl oz)"
    }
  ],
  "name": "Nutritional drink or shake, ready-to-drink (Boost Plus)",
  "nutritionPerBasis": {
    "calcium_mg": 135.0,
    "carbs_g": 17.3,
    "energy_kcal": 138.0,
    "fat_g": 5.38,
    "fibre_g": 1.2,
    "folate_ug": 38.0,
    "iron_mg": 1.73,
    "magnesium_mg": 38.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 115.0,
    "potassium_mg": 138.0,
    "protein_g": 5.38,
    "salt_g": 0.1925,
    "sat_fat_g": 0.42,
    "sodium_mg": 77.0,
    "sugar_g": 8.46,
    "vitamin_a_ug": 84.0,
    "vitamin_c_mg": 23.1,
    "vitamin_e_mg": 5.19,
    "vitamin_k_ug": 12.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710715",
  "state": "Unspecified",
  "subcategory": "Nutritional beverages",
  "tags": [
    "beverages",
    "nutritional-beverages",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
