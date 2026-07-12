/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "cup",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-167775",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 239.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 29.9,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    }
  ],
  "name": "Apple juice, frozen concentrate, unsweetened, diluted with 3 volume water, with added ascorbic acid",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 11.5,
    "energy_kcal": 197.0,
    "fat_g": 0.1,
    "fibre_g": 0.1,
    "folate_ug": 0.0,
    "iron_mg": 0.26,
    "magnesium_mg": 5.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 7.0,
    "potassium_mg": 126.0,
    "protein_g": 0.14,
    "salt_g": 0.0175,
    "sat_fat_g": 0.018,
    "sodium_mg": 7.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 25.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167775",
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
