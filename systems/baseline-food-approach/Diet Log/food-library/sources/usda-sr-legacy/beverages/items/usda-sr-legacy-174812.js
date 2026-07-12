/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "portion-2-oz-mix-1-5-oz-whiskey",
  "description": "Beverages",
  "id": "usda-sr-legacy-174812",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 106.0,
      "key": "portion-2-oz-mix-1-5-oz-whiskey",
      "kind": "unit",
      "label": "portion (2 oz mix + 1.5 oz whiskey)"
    },
    {
      "gramsPerUnit": 30.4,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    }
  ],
  "name": "Alcoholic beverage, whiskey sour, prepared from item 14028",
  "nutritionPerBasis": {
    "calcium_mg": 1.0,
    "carbs_g": 12.8,
    "energy_kcal": 638.0,
    "fat_g": 0.06,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.08,
    "magnesium_mg": 1.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 5.0,
    "potassium_mg": 18.0,
    "protein_g": 0.06,
    "salt_g": 0.1525,
    "sat_fat_g": 0.005,
    "sodium_mg": 61.0,
    "sugar_g": 12.8,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.6,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174812",
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
