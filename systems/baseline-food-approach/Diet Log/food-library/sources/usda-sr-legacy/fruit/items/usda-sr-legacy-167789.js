/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "cup-without-pits-thawed",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-167789",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 112.0,
      "key": "cup-without-pits-thawed",
      "kind": "unit",
      "label": "cup without pits, thawed"
    },
    {
      "gramsPerUnit": 9.8,
      "key": "3-fruit-without-pits-thawed",
      "kind": "unit",
      "label": "3 fruit without pits, thawed"
    }
  ],
  "name": "Nance, frozen, unsweetened",
  "nutritionPerBasis": {
    "calcium_mg": 46.0,
    "carbs_g": 17.0,
    "energy_kcal": 306.0,
    "fat_g": 1.16,
    "fibre_g": 7.5,
    "folate_ug": 8.0,
    "iron_mg": 0.38,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 10.0,
    "potassium_mg": 244.0,
    "protein_g": 0.66,
    "salt_g": 0.0075,
    "sat_fat_g": 0.0,
    "sodium_mg": 3.0,
    "sugar_g": 8.31,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 92.5,
    "vitamin_e_mg": 1.25,
    "vitamin_k_ug": 11.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167789",
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
