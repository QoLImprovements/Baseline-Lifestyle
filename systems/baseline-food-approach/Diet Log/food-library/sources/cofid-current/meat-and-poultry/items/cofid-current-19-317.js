/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "20 samples including canned",
  "id": "cofid-current-19-317",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pate, liver",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 1.2,
    "energy_kcal": 349.0,
    "fat_g": 32.7,
    "fibre_g": 0.6,
    "folate_ug": 99.0,
    "iron_mg": 5.9,
    "magnesium_mg": 11.0,
    "omega3_g": 0.24,
    "phosphorus_mg": 450.0,
    "potassium_mg": 150.0,
    "protein_g": 12.6,
    "salt_g": 1.875,
    "sat_fat_g": 9.5,
    "sodium_mg": 750.0,
    "sugar_g": 0.4,
    "vitamin_a_ug": 7322.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.95
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-317",
  "state": "Unspecified",
  "subcategory": "MI",
  "tags": [
    "meat-and-poultry",
    "mi",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
