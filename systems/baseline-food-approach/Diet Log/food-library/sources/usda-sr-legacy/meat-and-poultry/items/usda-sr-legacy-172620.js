/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "3-oz",
  "description": "Lamb, Veal, and Game Products",
  "id": "usda-sr-legacy-172620",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    }
  ],
  "name": "Lamb, New Zealand, imported, tongue - swiss cut, cooked, soaked and simmered",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 0.86,
    "energy_kcal": 1140.0,
    "fat_g": 22.0,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 1.74,
    "magnesium_mg": 15.0,
    "omega3_g": 0.367,
    "phosphorus_mg": 143.0,
    "potassium_mg": 132.0,
    "protein_g": 17.5,
    "salt_g": 0.13,
    "sat_fat_g": 7.34,
    "sodium_mg": 52.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.16,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172620",
  "state": "Cooked",
  "subcategory": "Lamb, Veal, and Game Products",
  "tags": [
    "cooked",
    "lamb-veal-and-game-products",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
