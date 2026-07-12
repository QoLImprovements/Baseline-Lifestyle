/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "tbsp",
  "description": "Fats and Oils",
  "id": "usda-sr-legacy-167699",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 17.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 265.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Salad dressing, blue or roquefort cheese dressing, fat-free",
  "nutritionPerBasis": {
    "calcium_mg": 51.0,
    "carbs_g": 25.6,
    "energy_kcal": 115.0,
    "fat_g": 1.01,
    "fibre_g": 1.8,
    "folate_ug": 2.0,
    "iron_mg": 0.12,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 107.0,
    "potassium_mg": 194.0,
    "protein_g": 1.52,
    "salt_g": 2.035,
    "sat_fat_g": 0.45,
    "sodium_mg": 814.0,
    "sugar_g": 7.44,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 0.5,
    "vitamin_e_mg": 0.04,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167699",
  "state": "Unspecified",
  "subcategory": "Fats and Oils",
  "tags": [
    "fats-and-oils",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
