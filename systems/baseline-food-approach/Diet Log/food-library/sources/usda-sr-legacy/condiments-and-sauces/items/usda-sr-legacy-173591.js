/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "tablespoon",
  "description": "Fats and Oils",
  "id": "usda-sr-legacy-173591",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "tablespoon",
      "kind": "unit",
      "label": "tablespoon"
    }
  ],
  "name": "Salad dressing, ranch dressing, fat-free",
  "nutritionPerBasis": {
    "calcium_mg": 50.0,
    "carbs_g": 26.5,
    "energy_kcal": 497.0,
    "fat_g": 1.92,
    "fibre_g": 0.1,
    "folate_ug": 6.0,
    "iron_mg": 1.05,
    "magnesium_mg": 8.0,
    "omega3_g": 0.076,
    "phosphorus_mg": 113.0,
    "potassium_mg": 111.0,
    "protein_g": 0.25,
    "salt_g": 2.2425,
    "sat_fat_g": 0.447,
    "sodium_mg": 897.0,
    "sugar_g": 5.35,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.18,
    "vitamin_k_ug": 2.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173591",
  "state": "Unspecified",
  "subcategory": "Fats and Oils",
  "tags": [
    "condiments-and-sauces",
    "fats-and-oils",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
