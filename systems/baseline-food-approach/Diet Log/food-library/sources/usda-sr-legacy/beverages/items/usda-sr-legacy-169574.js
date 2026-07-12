/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "cocktail-2-fl-oz",
  "description": "Beverages",
  "id": "usda-sr-legacy-169574",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "cocktail-2-fl-oz",
      "kind": "unit",
      "label": "cocktail (2 fl oz)"
    },
    {
      "gramsPerUnit": 30.2,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    }
  ],
  "name": "Alcoholic beverage, daiquiri, prepared-from-recipe",
  "nutritionPerBasis": {
    "calcium_mg": 3.0,
    "carbs_g": 6.94,
    "energy_kcal": 777.0,
    "fat_g": 0.06,
    "fibre_g": 0.1,
    "folate_ug": 2.0,
    "iron_mg": 0.09,
    "magnesium_mg": 2.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 5.0,
    "potassium_mg": 21.0,
    "protein_g": 0.06,
    "salt_g": 0.0125,
    "sat_fat_g": 0.006,
    "sodium_mg": 5.0,
    "sugar_g": 5.58,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.6,
    "vitamin_e_mg": 0.03,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169574",
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
