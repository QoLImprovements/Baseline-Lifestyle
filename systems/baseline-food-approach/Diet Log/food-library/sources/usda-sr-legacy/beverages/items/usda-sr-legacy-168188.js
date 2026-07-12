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
  "id": "usda-sr-legacy-168188",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 211.0,
      "key": "can-6-fl-oz",
      "kind": "unit",
      "label": "can (6 fl oz)"
    }
  ],
  "name": "Apple juice, frozen concentrate, unsweetened, undiluted, with added ascorbic acid",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 41.0,
    "energy_kcal": 695.0,
    "fat_g": 0.37,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 0.91,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 25.0,
    "potassium_mg": 448.0,
    "protein_g": 0.51,
    "salt_g": 0.0625,
    "sat_fat_g": 0.06,
    "sodium_mg": 25.0,
    "sugar_g": 38.8,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 88.9,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168188",
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
