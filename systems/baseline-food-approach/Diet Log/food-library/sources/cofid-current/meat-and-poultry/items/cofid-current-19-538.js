/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "7 samples including smoked and wafer thin chicken breast. 80-100% meat",
  "id": "cofid-current-19-538",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Chicken slices",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 2.0,
    "energy_kcal": 114.0,
    "fat_g": 1.5,
    "fibre_g": 0.3,
    "folate_ug": 8.0,
    "iron_mg": 0.4,
    "magnesium_mg": 28.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 350.0,
    "potassium_mg": 360.0,
    "protein_g": 23.2,
    "salt_g": 1.45,
    "sat_fat_g": 0.4,
    "sodium_mg": 580.0,
    "sugar_g": 0.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.24,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-538",
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
