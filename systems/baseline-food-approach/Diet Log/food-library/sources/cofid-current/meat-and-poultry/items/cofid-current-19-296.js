/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "11 samples, 11 products, chilled and frozen",
  "id": "cofid-current-19-296",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Curry, chicken tikka masala, retail, reheated",
  "nutritionPerBasis": {
    "calcium_mg": 60.0,
    "carbs_g": 4.9,
    "energy_kcal": 156.0,
    "fat_g": 9.8,
    "fibre_g": 1.4,
    "folate_ug": 21.0,
    "iron_mg": 1.3,
    "magnesium_mg": 25.0,
    "omega3_g": 0.42,
    "phosphorus_mg": 140.0,
    "potassium_mg": 310.0,
    "protein_g": 12.4,
    "salt_g": 0.55,
    "sat_fat_g": 3.3,
    "sodium_mg": 220.0,
    "sugar_g": 3.6,
    "vitamin_a_ug": 66.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.57,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-296",
  "state": "Unspecified",
  "subcategory": "MIG",
  "tags": [
    "meat-and-poultry",
    "mig",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
