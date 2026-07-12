/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "8 samples, 3 brands, chilled and frozen",
  "id": "cofid-current-19-491",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Burger, beef, 98-99% beef, grilled",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 0.1,
    "energy_kcal": 326.0,
    "fat_g": 24.4,
    "fibre_g": 0.7,
    "folate_ug": 10.0,
    "iron_mg": 2.5,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 210.0,
    "potassium_mg": 380.0,
    "protein_g": 26.5,
    "salt_g": 1.0,
    "sat_fat_g": 10.9,
    "sodium_mg": 400.0,
    "sugar_g": 0.1,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.39,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-491",
  "state": "Grilled",
  "subcategory": "MBG",
  "tags": [
    "grilled",
    "mbg",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
