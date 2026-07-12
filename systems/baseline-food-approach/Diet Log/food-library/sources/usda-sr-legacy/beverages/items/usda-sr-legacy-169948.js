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
  "id": "usda-sr-legacy-169948",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 216.0,
      "key": "can-6-fl-oz",
      "kind": "unit",
      "label": "can (6 fl oz)"
    }
  ],
  "name": "Pineapple juice, frozen concentrate, unsweetened, undiluted",
  "nutritionPerBasis": {
    "calcium_mg": 39.0,
    "carbs_g": 44.3,
    "energy_kcal": 749.0,
    "fat_g": 0.1,
    "fibre_g": 0.7,
    "folate_ug": 37.0,
    "iron_mg": 0.9,
    "magnesium_mg": 35.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 28.0,
    "potassium_mg": 472.0,
    "protein_g": 1.3,
    "salt_g": 0.0075,
    "sat_fat_g": 0.007,
    "sodium_mg": 3.0,
    "sugar_g": 43.6,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 42.0,
    "vitamin_e_mg": 0.03,
    "vitamin_k_ug": 1.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169948",
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
