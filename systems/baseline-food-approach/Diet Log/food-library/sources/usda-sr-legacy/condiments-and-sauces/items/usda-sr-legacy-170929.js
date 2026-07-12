/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "tbsp",
  "description": "Spices and Herbs",
  "id": "usda-sr-legacy-170929",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 6.3,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 2.0,
      "key": "tsp",
      "kind": "unit",
      "label": "tsp"
    }
  ],
  "name": "Spices, mustard seed, ground",
  "nutritionPerBasis": {
    "calcium_mg": 266.0,
    "carbs_g": 28.1,
    "energy_kcal": 2130.0,
    "fat_g": 36.2,
    "fibre_g": 12.2,
    "folate_ug": 162.0,
    "iron_mg": 9.21,
    "magnesium_mg": 370.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 828.0,
    "potassium_mg": 738.0,
    "protein_g": 26.1,
    "salt_g": 0.0325,
    "sat_fat_g": 1.99,
    "sodium_mg": 13.0,
    "sugar_g": 6.79,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 7.1,
    "vitamin_e_mg": 5.07,
    "vitamin_k_ug": 5.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170929",
  "state": "Unspecified",
  "subcategory": "Spices and Herbs",
  "tags": [
    "condiments-and-sauces",
    "spices-and-herbs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
