/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "g",
  "description": "10 samples from different outlets",
  "id": "cofid-current-11-1023",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Prawn crackers, takeaway",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 58.2,
    "energy_kcal": 570.0,
    "fat_g": 39.0,
    "fibre_g": 0.9,
    "folate_ug": 2.0,
    "iron_mg": 1.55,
    "magnesium_mg": 5.0,
    "omega3_g": 3.14,
    "phosphorus_mg": 6.0,
    "potassium_mg": 17.0,
    "protein_g": 0.3,
    "salt_g": 1.9175,
    "sat_fat_g": 3.64,
    "sodium_mg": 767.0,
    "sugar_g": 2.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 5.77,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-1023",
  "state": "Raw",
  "subcategory": "AT",
  "tags": [
    "at",
    "fish-and-seafood",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
