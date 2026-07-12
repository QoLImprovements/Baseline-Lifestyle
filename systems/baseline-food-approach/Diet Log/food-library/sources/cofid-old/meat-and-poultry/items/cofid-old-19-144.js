/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "10 samples, 6 brands",
  "id": "cofid-old-19-144",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pate, liver, in a tube",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 0.6,
    "energy_kcal": 285.0,
    "fat_g": 25.9,
    "fibre_g": 0.0,
    "folate_ug": 19.0,
    "iron_mg": 6.0,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 520.0,
    "potassium_mg": 170.0,
    "protein_g": 12.5,
    "salt_g": 2.075,
    "sat_fat_g": 7.5,
    "sodium_mg": 830.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 7400.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "19-144",
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
