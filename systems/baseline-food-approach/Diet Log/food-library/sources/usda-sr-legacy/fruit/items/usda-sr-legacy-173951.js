/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "package-10-oz",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-173951",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 284.0,
      "key": "package-10-oz",
      "kind": "unit",
      "label": "package (10 oz)"
    },
    {
      "gramsPerUnit": 230.0,
      "key": "cup-thawed",
      "kind": "unit",
      "label": "cup, thawed"
    }
  ],
  "name": "Blueberries, frozen, sweetened",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 22.0,
    "energy_kcal": 355.0,
    "fat_g": 0.13,
    "fibre_g": 2.2,
    "folate_ug": 7.0,
    "iron_mg": 0.39,
    "magnesium_mg": 2.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 7.0,
    "potassium_mg": 60.0,
    "protein_g": 0.4,
    "salt_g": 0.0025,
    "sat_fat_g": 0.011,
    "sodium_mg": 1.0,
    "sugar_g": 19.7,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.52,
    "vitamin_k_ug": 17.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173951",
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
