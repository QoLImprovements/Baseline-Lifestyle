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
  "id": "usda-sr-legacy-171002",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    }
  ],
  "name": "Salad dressing, KRAFT Mayo Light Mayonnaise",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 8.5,
    "energy_kcal": 334.0,
    "fat_g": 32.9,
    "fibre_g": 0.1,
    "folate_ug": 0.0,
    "iron_mg": 0.2,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 58.0,
    "potassium_mg": 52.0,
    "protein_g": 0.6,
    "salt_g": 1.5825,
    "sat_fat_g": 5.0,
    "sodium_mg": 633.0,
    "sugar_g": 4.2,
    "vitamin_a_ug": 185.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 155.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171002",
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
