/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "3-oz",
  "description": "Finfish and Shellfish Products",
  "id": "usda-sr-legacy-167742",
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
  "name": "Mollusks, scallop, (bay and sea), cooked, steamed",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 5.41,
    "energy_kcal": 466.0,
    "fat_g": 0.84,
    "fibre_g": 0.0,
    "folate_ug": 20.0,
    "iron_mg": 0.58,
    "magnesium_mg": 37.0,
    "omega3_g": 0.181,
    "phosphorus_mg": 426.0,
    "potassium_mg": 314.0,
    "protein_g": 20.5,
    "salt_g": 1.6675,
    "sat_fat_g": 0.218,
    "sodium_mg": 667.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167742",
  "state": "Steamed",
  "subcategory": "Finfish and Shellfish Products",
  "tags": [
    "finfish-and-shellfish-products",
    "fish-and-seafood",
    "steamed"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
