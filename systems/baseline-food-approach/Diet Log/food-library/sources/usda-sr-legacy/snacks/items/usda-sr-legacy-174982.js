/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Snacks",
  "defaultMeasure": "cracker-round",
  "description": "Baked Products",
  "id": "usda-sr-legacy-174982",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 3.2,
      "key": "cracker-round",
      "kind": "unit",
      "label": "cracker, round"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "5-crackers",
      "kind": "unit",
      "label": "5 crackers"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "5-crackers-regular-size-round-1-serving",
      "kind": "unit",
      "label": "5 crackers, regular size, round (1 serving)"
    },
    {
      "gramsPerUnit": 4.0,
      "key": "cracker-rectangular",
      "kind": "unit",
      "label": "cracker, rectangular"
    },
    {
      "gramsPerUnit": 52.0,
      "key": "cup-crushed",
      "kind": "unit",
      "label": "cup crushed"
    }
  ],
  "name": "Crackers, standard snack-type, regular",
  "nutritionPerBasis": {
    "calcium_mg": 120.0,
    "carbs_g": 61.3,
    "energy_kcal": 510.0,
    "fat_g": 26.4,
    "fibre_g": 2.3,
    "folate_ug": 92.0,
    "iron_mg": 4.03,
    "magnesium_mg": 18.0,
    "omega3_g": 1.48,
    "phosphorus_mg": 248.0,
    "potassium_mg": 118.0,
    "protein_g": 6.64,
    "salt_g": 1.815,
    "sat_fat_g": 5.56,
    "sodium_mg": 726.0,
    "sugar_g": 8.18,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 3.03,
    "vitamin_k_ug": 69.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174982",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "snacks",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
