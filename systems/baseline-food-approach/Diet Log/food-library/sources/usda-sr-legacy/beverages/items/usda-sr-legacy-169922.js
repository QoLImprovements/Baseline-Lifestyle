/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "fl-oz",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-169922",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 33.0,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    },
    {
      "gramsPerUnit": 262.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Orange juice, frozen concentrate, unsweetened, undiluted, with added calcium",
  "nutritionPerBasis": {
    "calcium_mg": 578.0,
    "carbs_g": 33.9,
    "energy_kcal": 147.0,
    "fat_g": 0.25,
    "fibre_g": 1.0,
    "folate_ug": 77.0,
    "iron_mg": 0.33,
    "magnesium_mg": 35.0,
    "omega3_g": 0.017,
    "phosphorus_mg": 313.0,
    "potassium_mg": 629.0,
    "protein_g": 2.4,
    "salt_g": 0.0175,
    "sat_fat_g": 0.059,
    "sodium_mg": 7.0,
    "sugar_g": 29.7,
    "vitamin_a_ug": 13.0,
    "vitamin_c_mg": 145.0,
    "vitamin_e_mg": 0.6,
    "vitamin_k_ug": 0.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169922",
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
