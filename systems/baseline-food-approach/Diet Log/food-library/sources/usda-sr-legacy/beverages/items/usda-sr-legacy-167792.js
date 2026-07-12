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
  "id": "usda-sr-legacy-167792",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 246.0,
      "key": "8-fl-oz",
      "kind": "unit",
      "label": "8 fl oz"
    }
  ],
  "name": "Orange Pineapple Juice Blend",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 12.2,
    "energy_kcal": 51.0,
    "fat_g": 0.08,
    "fibre_g": 0.2,
    "folate_ug": 10.0,
    "iron_mg": 0.18,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 11.0,
    "potassium_mg": 150.0,
    "protein_g": 0.41,
    "salt_g": 0.01,
    "sat_fat_g": 0.011,
    "sodium_mg": 4.0,
    "sugar_g": 10.6,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 40.7,
    "vitamin_e_mg": 0.07,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167792",
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
