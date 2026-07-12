/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "lobster",
  "description": "Finfish and Shellfish Products",
  "id": "usda-sr-legacy-172009",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 163.0,
      "key": "lobster",
      "kind": "unit",
      "label": "lobster"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    }
  ],
  "name": "Crustaceans, spiny lobster, mixed species, cooked, moist heat",
  "nutritionPerBasis": {
    "calcium_mg": 63.0,
    "carbs_g": 3.12,
    "energy_kcal": 598.0,
    "fat_g": 1.94,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 1.41,
    "magnesium_mg": 51.0,
    "omega3_g": 0.524,
    "phosphorus_mg": 229.0,
    "potassium_mg": 208.0,
    "protein_g": 26.4,
    "salt_g": 0.5675,
    "sat_fat_g": 0.303,
    "sodium_mg": 227.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 6.0,
    "vitamin_c_mg": 2.1,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172009",
  "state": "Cooked",
  "subcategory": "Finfish and Shellfish Products",
  "tags": [
    "cooked",
    "finfish-and-shellfish-products",
    "fish-and-seafood"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
