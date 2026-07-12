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
  "id": "usda-sr-legacy-173217",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 30.9,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    },
    {
      "gramsPerUnit": 247.0,
      "key": "cup-8-fl-oz",
      "kind": "unit",
      "label": "cup 8 fl oz"
    }
  ],
  "name": "Lemonade, frozen concentrate, white, prepared with water",
  "nutritionPerBasis": {
    "calcium_mg": 4.0,
    "carbs_g": 10.4,
    "energy_kcal": 168.0,
    "fat_g": 0.04,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 0.16,
    "magnesium_mg": 2.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 2.0,
    "potassium_mg": 15.0,
    "protein_g": 0.07,
    "salt_g": 0.01,
    "sat_fat_g": 0.006,
    "sodium_mg": 4.0,
    "sugar_g": 9.98,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 3.9,
    "vitamin_e_mg": 0.01,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173217",
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
