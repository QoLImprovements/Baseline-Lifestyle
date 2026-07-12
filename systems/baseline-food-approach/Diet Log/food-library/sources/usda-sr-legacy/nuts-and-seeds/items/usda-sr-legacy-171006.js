/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "tablespoon",
  "description": "Fats and Oils",
  "id": "usda-sr-legacy-171006",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "tablespoon",
      "kind": "unit",
      "label": "tablespoon"
    },
    {
      "gramsPerUnit": 245.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Salad dressing, sesame seed dressing, regular",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 8.6,
    "energy_kcal": 1850.0,
    "fat_g": 45.2,
    "fibre_g": 1.0,
    "folate_ug": 0.0,
    "iron_mg": 0.6,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 37.0,
    "potassium_mg": 157.0,
    "protein_g": 3.1,
    "salt_g": 2.5,
    "sat_fat_g": 6.2,
    "sodium_mg": 1000.0,
    "sugar_g": 8.32,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 5.0,
    "vitamin_k_ug": 56.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171006",
  "state": "Unspecified",
  "subcategory": "Fats and Oils",
  "tags": [
    "fats-and-oils",
    "nuts-and-seeds",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
