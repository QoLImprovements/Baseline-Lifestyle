/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "can-8-fl-oz",
  "description": "Beverages",
  "id": "usda-sr-legacy-174853",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 355.0,
      "key": "can-8-fl-oz",
      "kind": "unit",
      "label": "can (8 fl oz)"
    },
    {
      "gramsPerUnit": 29.6,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    }
  ],
  "name": "Beverages, carbonated, reduced sugar, cola, contains caffeine and sweeteners",
  "nutritionPerBasis": {
    "calcium_mg": 2.0,
    "carbs_g": 5.16,
    "energy_kcal": 84.0,
    "fat_g": 0.0,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.02,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 11.0,
    "potassium_mg": 3.0,
    "protein_g": 0.0,
    "salt_g": 0.01,
    "sat_fat_g": 0.0,
    "sodium_mg": 4.0,
    "sugar_g": 5.16,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174853",
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
