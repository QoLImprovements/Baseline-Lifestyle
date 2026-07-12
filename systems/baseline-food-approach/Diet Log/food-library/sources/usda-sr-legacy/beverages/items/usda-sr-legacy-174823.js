/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "8-fl-oz",
  "description": "Beverages",
  "id": "usda-sr-legacy-174823",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 254.0,
      "key": "8-fl-oz",
      "kind": "unit",
      "label": "8 fl oz"
    }
  ],
  "name": "Beverages, ABBOTT, ENSURE, Nutritional Shake, Ready-to-Drink",
  "nutritionPerBasis": {
    "calcium_mg": 127.0,
    "carbs_g": 16.9,
    "energy_kcal": 441.0,
    "fat_g": 2.53,
    "fibre_g": 0.0,
    "folate_ug": 42.0,
    "iron_mg": 1.9,
    "magnesium_mg": 42.0,
    "omega3_g": 0.128,
    "phosphorus_mg": 105.0,
    "potassium_mg": 156.0,
    "protein_g": 3.8,
    "salt_g": 0.21,
    "sat_fat_g": 0.422,
    "sodium_mg": 84.0,
    "sugar_g": 9.7,
    "vitamin_a_ug": 158.0,
    "vitamin_c_mg": 12.7,
    "vitamin_e_mg": 1.42,
    "vitamin_k_ug": 8.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174823",
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
