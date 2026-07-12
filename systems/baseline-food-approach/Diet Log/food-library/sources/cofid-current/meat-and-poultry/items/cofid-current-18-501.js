/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "8 samples, 7 products, including chicken nuggets, chicken bites and popcorn chicken",
  "id": "cofid-current-18-501",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Chicken pieces, coated, takeaway",
  "nutritionPerBasis": {
    "calcium_mg": 28.0,
    "carbs_g": 17.6,
    "energy_kcal": 267.0,
    "fat_g": 14.1,
    "fibre_g": 1.3,
    "folate_ug": 8.0,
    "iron_mg": 0.65,
    "magnesium_mg": 27.0,
    "omega3_g": 0.47,
    "phosphorus_mg": 218.0,
    "potassium_mg": 350.0,
    "protein_g": 18.5,
    "salt_g": 1.3375,
    "sat_fat_g": 2.32,
    "sodium_mg": 535.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.7,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "18-501",
  "state": "Unspecified",
  "subcategory": "MCA",
  "tags": [
    "mca",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
