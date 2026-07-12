/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "can-6-fl-oz",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-174680",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 207.0,
      "key": "can-6-fl-oz",
      "kind": "unit",
      "label": "can (6 fl oz)"
    }
  ],
  "name": "Grapefruit juice, white, frozen concentrate, unsweetened, undiluted",
  "nutritionPerBasis": {
    "calcium_mg": 27.0,
    "carbs_g": 34.6,
    "energy_kcal": 611.0,
    "fat_g": 0.48,
    "fibre_g": 0.4,
    "folate_ug": 13.0,
    "iron_mg": 0.49,
    "magnesium_mg": 38.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 49.0,
    "potassium_mg": 484.0,
    "protein_g": 1.97,
    "salt_g": 0.0075,
    "sat_fat_g": 0.064,
    "sodium_mg": 3.0,
    "sugar_g": 34.2,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 120.0,
    "vitamin_e_mg": 0.14,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174680",
  "state": "Frozen",
  "subcategory": "Fruits and Fruit Juices",
  "tags": [
    "beverages",
    "frozen",
    "fruits-and-fruit-juices"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
