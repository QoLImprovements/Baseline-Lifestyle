/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "cubic-inch-boneless",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-167709",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 17.0,
      "key": "cubic-inch-boneless",
      "kind": "unit",
      "label": "cubic inch, boneless"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz-with-bone-cooked-yield-after-bone-removed",
      "kind": "unit",
      "label": "3 oz with bone, cooked (yield after bone removed)"
    }
  ],
  "name": "Turkey, wing, smoked, cooked, with skin, bone removed",
  "nutritionPerBasis": {
    "calcium_mg": 24.0,
    "carbs_g": 0.0,
    "energy_kcal": 221.0,
    "fat_g": 12.4,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 1.46,
    "magnesium_mg": 25.0,
    "omega3_g": 0.05,
    "phosphorus_mg": 197.0,
    "potassium_mg": 266.0,
    "protein_g": 27.4,
    "salt_g": 2.49,
    "sat_fat_g": 3.38,
    "sodium_mg": 996.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.17,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167709",
  "state": "Cooked",
  "subcategory": "Poultry Products",
  "tags": [
    "cooked",
    "meat-and-poultry",
    "poultry-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
