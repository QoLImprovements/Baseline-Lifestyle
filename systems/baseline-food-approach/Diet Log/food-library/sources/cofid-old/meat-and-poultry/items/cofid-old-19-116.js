/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "7 samples, 5 brands. Fillings include cheese and broccoli, chilli, and mushroom. 40-53% meat, chilled/frozen",
  "id": "cofid-old-19-116",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Chicken in crumbs, stuffed with cheese and vegetables, baked",
  "nutritionPerBasis": {
    "calcium_mg": 62.0,
    "carbs_g": 10.8,
    "energy_kcal": 230.0,
    "fat_g": 13.9,
    "fibre_g": 0.0,
    "folate_ug": 9.0,
    "iron_mg": 0.6,
    "magnesium_mg": 22.0,
    "omega3_g": 0.45,
    "phosphorus_mg": 220.0,
    "potassium_mg": 250.0,
    "protein_g": 16.2,
    "salt_g": 1.1,
    "sat_fat_g": 4.1,
    "sodium_mg": 440.0,
    "sugar_g": 0.7,
    "vitamin_a_ug": 60.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.71,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "19-116",
  "state": "Baked",
  "subcategory": "MI",
  "tags": [
    "baked",
    "meat-and-poultry",
    "mi"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
