/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "11 samples, UK, fresh. Larger stems and tough ribs removed, boiled for 3-9 minutes",
  "id": "cofid-current-13-649",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Curly kale, boiled in unsalted water",
  "nutritionPerBasis": {
    "calcium_mg": 231.0,
    "carbs_g": 1.0,
    "energy_kcal": 26.0,
    "fat_g": 1.3,
    "fibre_g": 3.5,
    "folate_ug": 97.0,
    "iron_mg": 1.11,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 46.0,
    "potassium_mg": 229.0,
    "protein_g": 2.7,
    "salt_g": 0.015,
    "sat_fat_g": 0.24,
    "sodium_mg": 6.0,
    "sugar_g": 0.9,
    "vitamin_a_ug": 350.0,
    "vitamin_c_mg": 25.0,
    "vitamin_e_mg": 2.69,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-649",
  "state": "Boiled",
  "subcategory": "DG",
  "tags": [
    "boiled",
    "dg",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
