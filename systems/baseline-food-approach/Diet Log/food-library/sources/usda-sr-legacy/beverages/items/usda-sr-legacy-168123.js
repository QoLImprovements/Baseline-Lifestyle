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
  "id": "usda-sr-legacy-168123",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "cup-8-fl-oz",
      "kind": "unit",
      "label": "cup (8 fl oz)"
    }
  ],
  "name": "Beverages, cranberry-apple juice drink, low calorie, with vitamin C added",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 4.7,
    "energy_kcal": 19.0,
    "fat_g": 0.0,
    "fibre_g": 0.1,
    "folate_ug": 0.0,
    "iron_mg": 0.06,
    "magnesium_mg": 3.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 1.0,
    "potassium_mg": 45.0,
    "protein_g": 0.1,
    "salt_g": 0.0125,
    "sat_fat_g": 0.0,
    "sodium_mg": 5.0,
    "sugar_g": 4.6,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 32.0,
    "vitamin_e_mg": 0.27,
    "vitamin_k_ug": 1.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168123",
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
