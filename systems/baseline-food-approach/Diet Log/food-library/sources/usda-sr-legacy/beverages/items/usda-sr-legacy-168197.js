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
  "id": "usda-sr-legacy-168197",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "8-fl-oz",
      "kind": "unit",
      "label": "8 fl oz"
    }
  ],
  "name": "Juice, apple and grape blend, with added ascorbic acid",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 12.5,
    "energy_kcal": 211.0,
    "fat_g": 0.12,
    "fibre_g": 0.2,
    "folate_ug": 0.0,
    "iron_mg": 0.11,
    "magnesium_mg": 7.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 9.0,
    "potassium_mg": 96.0,
    "protein_g": 0.16,
    "salt_g": 0.0175,
    "sat_fat_g": 0.023,
    "sodium_mg": 7.0,
    "sugar_g": 10.9,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 28.2,
    "vitamin_e_mg": 0.01,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168197",
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
