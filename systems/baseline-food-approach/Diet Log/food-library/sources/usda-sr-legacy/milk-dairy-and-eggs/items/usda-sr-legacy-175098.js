/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-5-fl-oz",
  "description": "Beverages",
  "id": "usda-sr-legacy-175098",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 47.0,
      "key": "1-5-fl-oz",
      "kind": "unit",
      "label": "1.5 fl oz"
    },
    {
      "gramsPerUnit": 31.1,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    }
  ],
  "name": "Alcoholic beverage, liqueur, coffee with cream, 34 proof",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 20.9,
    "energy_kcal": 327.0,
    "fat_g": 15.7,
    "fibre_g": 0.0,
    "folate_ug": 2.0,
    "iron_mg": 0.13,
    "magnesium_mg": 2.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 50.0,
    "potassium_mg": 32.0,
    "protein_g": 2.8,
    "salt_g": 0.23,
    "sat_fat_g": 9.66,
    "sodium_mg": 92.0,
    "sugar_g": 19.8,
    "vitamin_a_ug": 173.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.45,
    "vitamin_k_ug": 1.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175098",
  "state": "Unspecified",
  "subcategory": "Beverages",
  "tags": [
    "beverages",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
