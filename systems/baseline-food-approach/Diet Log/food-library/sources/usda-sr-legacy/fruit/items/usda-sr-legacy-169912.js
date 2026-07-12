/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "cup-unthawed",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-169912",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 173.0,
      "key": "cup-unthawed",
      "kind": "unit",
      "label": "cup, unthawed"
    }
  ],
  "name": "Melon balls, frozen",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 7.94,
    "energy_kcal": 138.0,
    "fat_g": 0.25,
    "fibre_g": 0.7,
    "folate_ug": 26.0,
    "iron_mg": 0.29,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 12.0,
    "potassium_mg": 280.0,
    "protein_g": 0.84,
    "salt_g": 0.0775,
    "sat_fat_g": 0.064,
    "sodium_mg": 31.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 89.0,
    "vitamin_c_mg": 6.2,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169912",
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
