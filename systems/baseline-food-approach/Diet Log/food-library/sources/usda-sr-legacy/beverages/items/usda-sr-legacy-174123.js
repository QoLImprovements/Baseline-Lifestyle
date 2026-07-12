/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "serving-6-fl-oz",
  "description": "Beverages",
  "id": "usda-sr-legacy-174123",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 206.0,
      "key": "serving-6-fl-oz",
      "kind": "unit",
      "label": "serving 6 fl oz"
    },
    {
      "gramsPerUnit": 34.3,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    }
  ],
  "name": "Beverages, Cocoa mix, powder, prepared with water",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 11.5,
    "energy_kcal": 229.0,
    "fat_g": 0.55,
    "fibre_g": 0.5,
    "folate_ug": 1.0,
    "iron_mg": 0.17,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 43.0,
    "potassium_mg": 99.0,
    "protein_g": 0.92,
    "salt_g": 0.1825,
    "sat_fat_g": 0.328,
    "sodium_mg": 73.0,
    "sugar_g": 9.03,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.03,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174123",
  "state": "Unspecified",
  "subcategory": "Beverages",
  "tags": [
    "beverages",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
