/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "10 samples, 10 products, mini and large",
  "id": "cofid-current-19-468",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Sausage roll, flaky pastry, ready-to-eat, retail",
  "nutritionPerBasis": {
    "calcium_mg": 61.0,
    "carbs_g": 27.0,
    "energy_kcal": 352.0,
    "fat_g": 24.1,
    "fibre_g": 3.4,
    "folate_ug": 2.0,
    "iron_mg": 1.16,
    "magnesium_mg": 14.0,
    "omega3_g": 0.34,
    "phosphorus_mg": 89.0,
    "potassium_mg": 129.0,
    "protein_g": 8.4,
    "salt_g": 1.4425,
    "sat_fat_g": 10.36,
    "sodium_mg": 577.0,
    "sugar_g": 1.3,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 2.11,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-468",
  "state": "Ready-to-eat",
  "subcategory": "MI",
  "tags": [
    "meat-and-poultry",
    "mi",
    "ready-to-eat"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
