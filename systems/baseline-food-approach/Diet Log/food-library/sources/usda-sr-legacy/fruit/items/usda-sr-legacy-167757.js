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
  "id": "usda-sr-legacy-167757",
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
    }
  ],
  "name": "Raspberries, frozen, red, sweetened",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 26.2,
    "energy_kcal": 431.0,
    "fat_g": 0.16,
    "fibre_g": 4.4,
    "folate_ug": 26.0,
    "iron_mg": 0.65,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 17.0,
    "potassium_mg": 114.0,
    "protein_g": 0.7,
    "salt_g": 0.0025,
    "sat_fat_g": 0.005,
    "sodium_mg": 1.0,
    "sugar_g": 21.8,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 16.5,
    "vitamin_e_mg": 0.72,
    "vitamin_k_ug": 6.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167757",
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
