/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "g",
  "description": "Fats and Oils",
  "id": "usda-sr-legacy-171444",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Salad dressing, mayonnaise-type, light",
  "nutritionPerBasis": {
    "calcium_mg": 5.0,
    "carbs_g": 16.4,
    "energy_kcal": 662.0,
    "fat_g": 10.0,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 0.12,
    "magnesium_mg": 2.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 13.0,
    "potassium_mg": 36.0,
    "protein_g": 0.65,
    "salt_g": 2.0825,
    "sat_fat_g": 1.48,
    "sodium_mg": 833.0,
    "sugar_g": 6.67,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.72,
    "vitamin_k_ug": 19.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171444",
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
