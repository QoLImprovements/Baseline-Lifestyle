/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "cup",
  "description": "Snacks",
  "id": "usda-sr-legacy-173141",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 7.9,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 87.0,
      "key": "bag",
      "kind": "unit",
      "label": "bag"
    }
  ],
  "name": "Popcorn, microwave, regular (butter) flavor, made with palm oil",
  "nutritionPerBasis": {
    "calcium_mg": 23.0,
    "carbs_g": 57.3,
    "energy_kcal": 2240.0,
    "fat_g": 30.2,
    "fibre_g": 10.0,
    "folate_ug": 15.0,
    "iron_mg": 2.06,
    "magnesium_mg": 110.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 275.0,
    "potassium_mg": 393.0,
    "protein_g": 8.38,
    "salt_g": 1.9075,
    "sat_fat_g": 14.6,
    "sodium_mg": 763.0,
    "sugar_g": 0.3,
    "vitamin_a_ug": 9.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.91,
    "vitamin_k_ug": 4.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173141",
  "state": "Unspecified",
  "subcategory": "Snacks",
  "tags": [
    "oils-and-fats",
    "snacks",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
