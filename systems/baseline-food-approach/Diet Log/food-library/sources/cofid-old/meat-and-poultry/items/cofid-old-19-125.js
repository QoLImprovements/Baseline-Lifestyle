/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "10 samples, 3 brands",
  "id": "cofid-old-19-125",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Chicken roll",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 5.2,
    "energy_kcal": 131.0,
    "fat_g": 4.8,
    "fibre_g": 0.0,
    "folate_ug": 9.0,
    "iron_mg": 0.4,
    "magnesium_mg": 18.0,
    "omega3_g": 0.13,
    "phosphorus_mg": 220.0,
    "potassium_mg": 190.0,
    "protein_g": 17.1,
    "salt_g": 1.7,
    "sat_fat_g": 1.5,
    "sodium_mg": 680.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "19-125",
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
