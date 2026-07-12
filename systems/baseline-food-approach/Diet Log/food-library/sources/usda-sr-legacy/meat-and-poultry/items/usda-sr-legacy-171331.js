/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "tsp",
  "description": "Spices and Herbs",
  "id": "usda-sr-legacy-171331",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 1.5,
      "key": "tsp",
      "kind": "unit",
      "label": "tsp"
    },
    {
      "gramsPerUnit": 4.4,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    }
  ],
  "name": "Spices, poultry seasoning",
  "nutritionPerBasis": {
    "calcium_mg": 996.0,
    "carbs_g": 65.6,
    "energy_kcal": 307.0,
    "fat_g": 7.53,
    "fibre_g": 11.3,
    "folate_ug": 138.0,
    "iron_mg": 35.3,
    "magnesium_mg": 224.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 171.0,
    "potassium_mg": 684.0,
    "protein_g": 9.59,
    "salt_g": 0.0675,
    "sat_fat_g": 3.29,
    "sodium_mg": 27.0,
    "sugar_g": 1.8,
    "vitamin_a_ug": 132.0,
    "vitamin_c_mg": 12.0,
    "vitamin_e_mg": 1.32,
    "vitamin_k_ug": 805.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171331",
  "state": "Unspecified",
  "subcategory": "Spices and Herbs",
  "tags": [
    "meat-and-poultry",
    "spices-and-herbs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
