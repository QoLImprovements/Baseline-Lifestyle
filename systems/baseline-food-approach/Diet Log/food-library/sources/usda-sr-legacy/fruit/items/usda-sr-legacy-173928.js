/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "cup-slices",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-173928",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 171.0,
      "key": "cup-slices",
      "kind": "unit",
      "label": "cup slices"
    }
  ],
  "name": "Apples, raw, without skin, cooked, boiled",
  "nutritionPerBasis": {
    "calcium_mg": 5.0,
    "carbs_g": 13.6,
    "energy_kcal": 53.0,
    "fat_g": 0.36,
    "fibre_g": 2.4,
    "folate_ug": 1.0,
    "iron_mg": 0.19,
    "magnesium_mg": 3.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 8.0,
    "potassium_mg": 88.0,
    "protein_g": 0.26,
    "salt_g": 0.0025,
    "sat_fat_g": 0.058,
    "sodium_mg": 1.0,
    "sugar_g": 11.0,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.05,
    "vitamin_k_ug": 0.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173928",
  "state": "Boiled",
  "subcategory": "Fruits and Fruit Juices",
  "tags": [
    "boiled",
    "fruit",
    "fruits-and-fruit-juices"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
