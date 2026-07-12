/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "8-fl-oz",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-167805",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 248.0,
      "key": "8-fl-oz",
      "kind": "unit",
      "label": "8 fl oz"
    }
  ],
  "name": "Ruby Red grapefruit juice blend (grapefruit, grape, apple), OCEAN SPRAY, bottled, with added vitamin C",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 10.5,
    "energy_kcal": 44.0,
    "fat_g": 0.1,
    "fibre_g": 0.2,
    "folate_ug": 0.0,
    "iron_mg": 0.14,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 94.0,
    "protein_g": 0.5,
    "salt_g": 0.02,
    "sat_fat_g": 0.008,
    "sodium_mg": 8.0,
    "sugar_g": 10.3,
    "vitamin_a_ug": 6.0,
    "vitamin_c_mg": 49.2,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167805",
  "state": "Unspecified",
  "subcategory": "Fruits and Fruit Juices",
  "tags": [
    "beverages",
    "fruits-and-fruit-juices",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
