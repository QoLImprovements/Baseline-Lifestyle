/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "3-oz",
  "description": "Pork Products",
  "id": "usda-sr-legacy-169155",
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
  "name": "Pork, cured, ham, separable fat, boneless, heated",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 2.0,
    "energy_kcal": 507.0,
    "fat_g": 51.6,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 0.53,
    "magnesium_mg": 16.0,
    "omega3_g": 0.269,
    "phosphorus_mg": 169.0,
    "potassium_mg": 195.0,
    "protein_g": 8.77,
    "salt_g": 1.6925,
    "sat_fat_g": 17.0,
    "sodium_mg": 677.0,
    "sugar_g": 0.28,
    "vitamin_a_ug": 12.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.35,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169155",
  "state": "Unspecified",
  "subcategory": "Pork Products",
  "tags": [
    "meat-and-poultry",
    "pork-products",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
