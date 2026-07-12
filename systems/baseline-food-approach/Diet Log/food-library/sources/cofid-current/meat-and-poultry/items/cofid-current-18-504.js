/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "8 samples, 7 products, breaded and battered",
  "id": "cofid-current-18-504",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Chicken breast/steak, coated, baked",
  "nutritionPerBasis": {
    "calcium_mg": 30.0,
    "carbs_g": 15.8,
    "energy_kcal": 234.0,
    "fat_g": 11.6,
    "fibre_g": 0.8,
    "folate_ug": 21.0,
    "iron_mg": 0.65,
    "magnesium_mg": 26.0,
    "omega3_g": 0.65,
    "phosphorus_mg": 203.0,
    "potassium_mg": 300.0,
    "protein_g": 17.7,
    "salt_g": 1.165,
    "sat_fat_g": 1.78,
    "sodium_mg": 466.0,
    "sugar_g": 1.1,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.47,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "18-504",
  "state": "Baked",
  "subcategory": "MCA",
  "tags": [
    "baked",
    "mca",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
