/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "g",
  "description": "11 samples, 9 brands, including ‘smooth’ and ‘with bits’",
  "id": "cofid-current-14-330",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Orange juice, ambient, UHT",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 8.5,
    "energy_kcal": 34.0,
    "fat_g": 0.0,
    "fibre_g": 0.0,
    "folate_ug": 32.0,
    "iron_mg": 0.07,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 16.0,
    "potassium_mg": 164.0,
    "protein_g": 0.6,
    "salt_g": 0.0075,
    "sat_fat_g": 0.0,
    "sodium_mg": 3.0,
    "sugar_g": 8.5,
    "vitamin_a_ug": 7.0,
    "vitamin_c_mg": 31.0,
    "vitamin_e_mg": 0.15,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-330",
  "state": "Unspecified",
  "subcategory": "FC",
  "tags": [
    "beverages",
    "fc",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
