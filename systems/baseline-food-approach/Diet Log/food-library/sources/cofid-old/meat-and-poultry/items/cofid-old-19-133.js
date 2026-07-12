/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "10 samples",
  "id": "cofid-old-19-133",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Ham and pork, chopped, canned",
  "nutritionPerBasis": {
    "calcium_mg": 52.0,
    "carbs_g": 1.4,
    "energy_kcal": 264.0,
    "fat_g": 22.4,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 1.6,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 210.0,
    "potassium_mg": 150.0,
    "protein_g": 14.2,
    "salt_g": 2.625,
    "sat_fat_g": 8.2,
    "sodium_mg": 1050.0,
    "sugar_g": 0.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 30.0,
    "vitamin_e_mg": 0.11,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "19-133",
  "state": "Canned",
  "subcategory": "MI",
  "tags": [
    "canned",
    "meat-and-poultry",
    "mi"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
