/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "bar",
  "description": "Snacks",
  "id": "usda-sr-legacy-174801",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 35.0,
      "key": "bar",
      "kind": "unit",
      "label": "bar"
    }
  ],
  "name": "Snacks, granola bar, GENERAL MILLS NATURE VALLEY, SWEET&SALTY NUT, peanut",
  "nutritionPerBasis": {
    "calcium_mg": 57.0,
    "carbs_g": 61.1,
    "energy_kcal": 2040.0,
    "fat_g": 22.9,
    "fibre_g": 2.9,
    "folate_ug": 55.0,
    "iron_mg": 1.44,
    "magnesium_mg": 102.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 272.0,
    "potassium_mg": 390.0,
    "protein_g": 9.14,
    "salt_g": 1.035,
    "sat_fat_g": 6.86,
    "sodium_mg": 414.0,
    "sugar_g": 33.1,
    "vitamin_a_ug": 142.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 6.89,
    "vitamin_k_ug": 11.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174801",
  "state": "Unspecified",
  "subcategory": "Snacks",
  "tags": [
    "nuts-and-seeds",
    "snacks",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
