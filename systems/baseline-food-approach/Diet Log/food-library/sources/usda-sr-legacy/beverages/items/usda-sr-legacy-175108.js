/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "12-fl-oz",
  "description": "Beverages",
  "id": "usda-sr-legacy-175108",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 365.0,
      "key": "12-fl-oz",
      "kind": "unit",
      "label": "12 fl oz"
    },
    {
      "gramsPerUnit": 244.0,
      "key": "8-fl-oz",
      "kind": "unit",
      "label": "8 fl oz"
    },
    {
      "gramsPerUnit": 30.5,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    }
  ],
  "name": "Beverages, COCA-COLA, POWERADE, lemon-lime flavored, ready-to-drink",
  "nutritionPerBasis": {
    "calcium_mg": 1.0,
    "carbs_g": 7.84,
    "energy_kcal": 32.0,
    "fat_g": 0.05,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.09,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 1.0,
    "potassium_mg": 18.0,
    "protein_g": 0.0,
    "salt_g": 0.105,
    "sat_fat_g": 0.008,
    "sodium_mg": 42.0,
    "sugar_g": 6.11,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175108",
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
