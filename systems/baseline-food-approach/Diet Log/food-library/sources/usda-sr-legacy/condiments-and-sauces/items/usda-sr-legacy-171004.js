/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "tbsp",
  "description": "Fats and Oils",
  "id": "usda-sr-legacy-171004",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    }
  ],
  "name": "Salad dressing, KRAFT MIRACLE WHIP FREE Nonfat Dressing",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 15.5,
    "energy_kcal": 351.0,
    "fat_g": 2.7,
    "fibre_g": 1.9,
    "folate_ug": 0.0,
    "iron_mg": 0.12,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 5.0,
    "potassium_mg": 49.0,
    "protein_g": 0.2,
    "salt_g": 1.97,
    "sat_fat_g": 0.6,
    "sodium_mg": 788.0,
    "sugar_g": 10.3,
    "vitamin_a_ug": 69.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171004",
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
