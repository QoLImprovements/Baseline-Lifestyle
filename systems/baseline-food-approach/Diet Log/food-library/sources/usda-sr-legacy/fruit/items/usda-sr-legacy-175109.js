/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "bottle-23-7-fl-oz",
  "description": "Beverages",
  "id": "usda-sr-legacy-175109",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 703.0,
      "key": "bottle-23-7-fl-oz",
      "kind": "unit",
      "label": "bottle 23.7 fl oz"
    },
    {
      "gramsPerUnit": 29.6,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    },
    {
      "gramsPerUnit": 501.0,
      "key": "bottle-16-9-fl-oz",
      "kind": "unit",
      "label": "bottle 16.9 fl oz"
    },
    {
      "gramsPerUnit": 356.0,
      "key": "bottle-12-fl-oz",
      "kind": "unit",
      "label": "bottle 12 fl oz"
    }
  ],
  "name": "Beverages, Propel Zero, fruit-flavored, non-carbonated",
  "nutritionPerBasis": {
    "calcium_mg": 1.0,
    "carbs_g": 1.14,
    "energy_kcal": 19.0,
    "fat_g": 0.0,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.03,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 25.0,
    "potassium_mg": 16.0,
    "protein_g": 0.0,
    "salt_g": 0.0825,
    "sat_fat_g": 0.0,
    "sodium_mg": 33.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 8.8,
    "vitamin_e_mg": 1.67,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175109",
  "state": "Unspecified",
  "subcategory": "Beverages",
  "tags": [
    "beverages",
    "fruit",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
