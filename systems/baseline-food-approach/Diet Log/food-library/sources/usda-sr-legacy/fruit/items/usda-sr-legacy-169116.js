/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "cup-thawed",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-169116",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "cup-thawed",
      "kind": "unit",
      "label": "cup, thawed"
    },
    {
      "gramsPerUnit": 284.0,
      "key": "package-10-oz",
      "kind": "unit",
      "label": "package (10 oz)"
    },
    {
      "gramsPerUnit": 155.0,
      "key": "10-slices",
      "kind": "unit",
      "label": "10 slices"
    }
  ],
  "name": "Peaches, frozen, sliced, sweetened",
  "nutritionPerBasis": {
    "calcium_mg": 3.0,
    "carbs_g": 24.0,
    "energy_kcal": 393.0,
    "fat_g": 0.13,
    "fibre_g": 1.8,
    "folate_ug": 3.0,
    "iron_mg": 0.37,
    "magnesium_mg": 5.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 11.0,
    "potassium_mg": 130.0,
    "protein_g": 0.63,
    "salt_g": 0.015,
    "sat_fat_g": 0.014,
    "sodium_mg": 6.0,
    "sugar_g": 22.2,
    "vitamin_a_ug": 14.0,
    "vitamin_c_mg": 94.2,
    "vitamin_e_mg": 0.62,
    "vitamin_k_ug": 2.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169116",
  "state": "Frozen",
  "subcategory": "Fruits and Fruit Juices",
  "tags": [
    "frozen",
    "fruit",
    "fruits-and-fruit-juices"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
