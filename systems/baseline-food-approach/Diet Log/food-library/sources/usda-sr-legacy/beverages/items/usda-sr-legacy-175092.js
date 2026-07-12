/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "fl-oz",
  "description": "Beverages",
  "id": "usda-sr-legacy-175092",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 32.1,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    },
    {
      "gramsPerUnit": 192.0,
      "key": "serving-dry-mix-with-6-fl-oz-water",
      "kind": "unit",
      "label": "serving dry mix with 6 fl oz water"
    }
  ],
  "name": "Beverages, cocoa mix, with aspartame, powder, prepared with water",
  "nutritionPerBasis": {
    "calcium_mg": 48.0,
    "carbs_g": 5.61,
    "energy_kcal": 29.0,
    "fat_g": 0.23,
    "fibre_g": 0.6,
    "folate_ug": 1.0,
    "iron_mg": 0.39,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 70.0,
    "potassium_mg": 211.0,
    "protein_g": 1.21,
    "salt_g": 0.18,
    "sat_fat_g": 0.139,
    "sodium_mg": 72.0,
    "sugar_g": 2.93,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175092",
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
