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
  "id": "usda-sr-legacy-174139",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 180.0,
      "key": "serving-6-fl-oz",
      "kind": "unit",
      "label": "serving 6 fl oz"
    },
    {
      "gramsPerUnit": 30.1,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    }
  ],
  "name": "Beverages, coffee substitute, cereal grain beverage, prepared with water",
  "nutritionPerBasis": {
    "calcium_mg": 4.0,
    "carbs_g": 1.3,
    "energy_kcal": 25.0,
    "fat_g": 0.04,
    "fibre_g": 0.4,
    "folate_ug": 1.0,
    "iron_mg": 0.08,
    "magnesium_mg": 5.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 10.0,
    "potassium_mg": 41.0,
    "protein_g": 0.1,
    "salt_g": 0.0125,
    "sat_fat_g": 0.01,
    "sodium_mg": 5.0,
    "sugar_g": 0.08,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.02,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174139",
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
