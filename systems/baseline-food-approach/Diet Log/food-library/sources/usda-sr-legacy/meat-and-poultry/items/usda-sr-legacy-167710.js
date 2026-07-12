/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "3-oz-with-bone-cooked-yield-after-bone-removed",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-167710",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz-with-bone-cooked-yield-after-bone-removed",
      "kind": "unit",
      "label": "3 oz with bone, cooked (yield after bone removed)"
    },
    {
      "gramsPerUnit": 17.0,
      "key": "cubic-inch-boneless",
      "kind": "unit",
      "label": "cubic inch, boneless"
    }
  ],
  "name": "Turkey, drumstick, smoked, cooked, with skin, bone removed",
  "nutritionPerBasis": {
    "calcium_mg": 32.0,
    "carbs_g": 0.0,
    "energy_kcal": 200.0,
    "fat_g": 9.8,
    "fibre_g": 0.0,
    "folate_ug": 9.0,
    "iron_mg": 2.3,
    "magnesium_mg": 23.0,
    "omega3_g": 0.08,
    "phosphorus_mg": 199.0,
    "potassium_mg": 280.0,
    "protein_g": 27.9,
    "salt_g": 2.49,
    "sat_fat_g": 3.05,
    "sodium_mg": 996.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.62,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167710",
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
