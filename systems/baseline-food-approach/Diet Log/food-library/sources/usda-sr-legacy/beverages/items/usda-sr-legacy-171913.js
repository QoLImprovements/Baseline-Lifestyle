/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "serving-8-fl-oz",
  "description": "Beverages",
  "id": "usda-sr-legacy-171913",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 248.0,
      "key": "serving-8-fl-oz",
      "kind": "unit",
      "label": "serving 8 fl oz"
    },
    {
      "gramsPerUnit": 31.0,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    }
  ],
  "name": "Beverages, citrus fruit juice drink, frozen concentrate, prepared with water",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 11.4,
    "energy_kcal": 46.0,
    "fat_g": 0.03,
    "fibre_g": 0.1,
    "folate_ug": 7.0,
    "iron_mg": 1.12,
    "magnesium_mg": 6.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 10.0,
    "potassium_mg": 112.0,
    "protein_g": 0.34,
    "salt_g": 0.01,
    "sat_fat_g": 0.002,
    "sodium_mg": 4.0,
    "sugar_g": 8.13,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 27.1,
    "vitamin_e_mg": 0.06,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171913",
  "state": "Frozen",
  "subcategory": "Beverages",
  "tags": [
    "beverages",
    "frozen"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
