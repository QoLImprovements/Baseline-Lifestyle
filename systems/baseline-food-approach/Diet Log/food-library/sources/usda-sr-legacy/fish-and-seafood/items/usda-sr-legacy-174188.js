/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "tbsp",
  "description": "Finfish and Shellfish Products",
  "id": "usda-sr-legacy-174188",
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
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Fish, caviar, black and red, granular",
  "nutritionPerBasis": {
    "calcium_mg": 275.0,
    "carbs_g": 4.0,
    "energy_kcal": 264.0,
    "fat_g": 17.9,
    "fibre_g": 0.0,
    "folate_ug": 50.0,
    "iron_mg": 11.9,
    "magnesium_mg": 300.0,
    "omega3_g": 6.769,
    "phosphorus_mg": 356.0,
    "potassium_mg": 181.0,
    "protein_g": 24.6,
    "salt_g": 3.75,
    "sat_fat_g": 4.06,
    "sodium_mg": 1500.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 271.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.89,
    "vitamin_k_ug": 0.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174188",
  "state": "Unspecified",
  "subcategory": "Finfish and Shellfish Products",
  "tags": [
    "finfish-and-shellfish-products",
    "fish-and-seafood",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
