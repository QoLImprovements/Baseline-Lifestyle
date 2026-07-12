/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "envelope-swiss-miss-53-oz",
  "description": "Beverages",
  "id": "usda-sr-legacy-175114",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "envelope-swiss-miss-53-oz",
      "kind": "unit",
      "label": "envelope Swiss Miss (.53 oz)"
    },
    {
      "gramsPerUnit": 19.0,
      "key": "packet-0-675-oz",
      "kind": "unit",
      "label": "packet (0.675 oz)"
    }
  ],
  "name": "Beverages, Cocoa mix, low calorie, powder, with added calcium, phosphorus, aspartame, without added sodium or vitamin A",
  "nutritionPerBasis": {
    "calcium_mg": 1440.0,
    "carbs_g": 58.0,
    "energy_kcal": 359.0,
    "fat_g": 3.0,
    "fibre_g": 1.1,
    "folate_ug": 27.0,
    "iron_mg": 4.96,
    "magnesium_mg": 208.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 1630.0,
    "potassium_mg": 2700.0,
    "protein_g": 25.1,
    "salt_g": 1.6325,
    "sat_fat_g": 1.78,
    "sodium_mg": 653.0,
    "sugar_g": 55.6,
    "vitamin_a_ug": 479.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.21,
    "vitamin_k_ug": 4.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175114",
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
