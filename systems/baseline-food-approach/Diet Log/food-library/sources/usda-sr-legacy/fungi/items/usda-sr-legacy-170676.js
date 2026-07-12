/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fungi",
  "defaultMeasure": "serving",
  "description": "Sweets",
  "id": "usda-sr-legacy-170676",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 31.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "Candies, M&M MARS 3 MUSKETEERS Truffle Crisp",
  "nutritionPerBasis": {
    "calcium_mg": 150.0,
    "carbs_g": 63.2,
    "energy_kcal": 538.0,
    "fat_g": 28.8,
    "fibre_g": 0.0,
    "folate_ug": 9.0,
    "iron_mg": 1.88,
    "magnesium_mg": 50.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 165.0,
    "potassium_mg": 296.0,
    "protein_g": 6.41,
    "salt_g": 0.1575,
    "sat_fat_g": 19.2,
    "sodium_mg": 63.0,
    "sugar_g": 57.7,
    "vitamin_a_ug": 46.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.6,
    "vitamin_k_ug": 5.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170676",
  "state": "Unspecified",
  "subcategory": "Sweets",
  "tags": [
    "fungi",
    "sweets",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
